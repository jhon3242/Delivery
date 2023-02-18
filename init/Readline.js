const fs = require('fs');
const path = require('path');




function readCsv(filename) {
	const csvPath = path.join(__dirname, '..', 'db', filename);
	const csv = fs.readFileSync(csvPath, 'utf-8');
	return parsing(csv);
}

function parsing(csv){
	let readlines = csv.split("\n");
	return readlines;
	// return readlines.map(item => item.split(","))
}
// (async () => {
// 	readCsv("store.csv");
// })()

exports.readCsv = readCsv;