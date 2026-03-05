const fs = require('fs');

const rawData = JSON.parse(fs.readFileSync('src/data/schedule.json', 'utf8'));
const sheet = rawData[0].data; // We only process the first sheet for now

const weeks = [];
let currentWeek = null;

for (let row of sheet) {
    // Check if it's a new week header row
    const weekMatch = row['__EMPTY'] && String(row['__EMPTY']).match(/第.週/);
    if (weekMatch) {
        if (currentWeek) weeks.push(currentWeek);
        currentWeek = {
            title: row['__EMPTY'],
            days: ['週一', '週二', '週三', '週四', '週五', '週六'],
            dates: [
                row['__EMPTY_1'], row['__EMPTY_2'], row['__EMPTY_3'],
                row['__EMPTY_4'], row['__EMPTY_5'], row['__EMPTY_7']
            ], // Note: Excel dates need formatting, but we keep them raw for now or format them later
            schedule: []
        };
        continue;
    }

    // It's a time slot row
    const timeSlot = row['暑 假 讀 書 班 複 習 進 度 表'];
    if (!timeSlot || !timeSlot.includes('-')) continue; // Skip non-time rows

    if (currentWeek) {
        currentWeek.schedule.push({
            time: timeSlot,
            mon: row['__EMPTY_1'] || '',
            tue: row['__EMPTY_2'] || '',
            wed: row['__EMPTY_3'] || '',
            thu: row['__EMPTY_4'] || '',
            fri: row['__EMPTY_5'] || '',
            sat: row['__EMPTY_7'] || ''
        });
    }
}

if (currentWeek) weeks.push(currentWeek);

// Fix excel dates (days since 1900)
function excelDateToJSDate(serial) {
    if (typeof serial !== 'number') return serial;
    const utc_days = Math.floor(serial - 25569);
    const utc_value = utc_days * 86400;
    const date_info = new Date(utc_value * 1000);
    return `${date_info.getMonth() + 1}/${date_info.getDate()}`;
}

weeks.forEach(w => {
    w.dates = w.dates.map(excelDateToJSDate);
});

fs.writeFileSync('src/data/clean_schedule.json', JSON.stringify(weeks, null, 2));
console.log('Cleaned schedule saved to src/data/clean_schedule.json');
