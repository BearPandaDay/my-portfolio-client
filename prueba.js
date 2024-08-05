const fs = require('fs');
const easy = require('./src/assets/png/easy.js')

let renamed = false;
// easy.main();

console.log("fuera");
const folderPath = './src/assets/png';
fs.watch(folderPath, { encoding: 'buffer' }, async (eventType, filename) => {
    if (eventType === "change") {
        if (filename.toString().endsWith('.png')) {
            await easy.main();
            console.log("change");
            return
        }
    }
    if (eventType === "rename" && !renamed) {
        await easy.main();
        console.log("rename");
        renamed = true;
        return;
    }

    return;
}); 