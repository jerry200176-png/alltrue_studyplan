const xlsx = require('xlsx');
const fs = require('fs');

const workbook = xlsx.readFile('2026暑假讀書班複習進度表 家長說明.xlsx');
console.log("Sheet names:", workbook.SheetNames);

const scheduleData = [];

for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json(sheet, { defval: "" }); // Include empty cells

    // Log the first few rows to understand the structure
    console.log(`\n\n--- Sheet: ${sheetName} ---`);
    console.log(JSON.stringify(json.slice(0, 5), null, 2));

    scheduleData.push({
        sheetName,
        data: json
    });
}

if (!fs.existsSync('src/data')) {
    fs.mkdirSync('src/data', { recursive: true });
}

// Write the parsed JSON for frontend to use
fs.writeFileSync('src/data/schedule.json', JSON.stringify(scheduleData, null, 2));
console.log("Schedule data saved to src/data/schedule.json");
