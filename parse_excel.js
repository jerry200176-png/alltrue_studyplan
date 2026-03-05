import * as xlsx from 'xlsx';
import fs from 'fs';

const workbook = xlsx.readFile('2026暑假讀書班複習進度表 家長說明.xlsx');
console.log("Sheet names:", workbook.SheetNames);

const scheduleData = [];

for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const json = xlsx.utils.sheet_to_json(sheet);

    // Log the first few rows to understand the structure
    console.log(`\n\n--- Sheet: ${sheetName} ---`);
    console.log(JSON.stringify(json.slice(0, 5), null, 2));

    // Saving raw data to JSON for now
    scheduleData.push({
        sheetName,
        data: json
    });
}

// Write the parsed JSON for frontend to use
fs.writeFileSync('src/data/schedule.json', JSON.stringify(scheduleData, null, 2));
console.log("Schedule data saved to src/data/schedule.json");
