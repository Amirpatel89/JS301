const fs = require('fs');

fs.readdir('./data', (err, files) => {
	files.map((fileName,index) => {
		// console.log(fileName[4]);
		// console.log(fileName[4]);
		// console.log(fileName[4])
		var convert = (Number(fileName[4]));
		if (!isNaN(convert)){
			console.log(fileName)
			// filesWithNumber.push(fileName)
		}
	
		fs.readFile(`./data/${fileName}`, (err, data) => {
			// console.log(fileName);
			if (err) throw err;
			// console.log(data);
			var convert = (Number(fileName[4]));
			if (isNaN(convert)){
				console.log(fileName);
				// filesBonus.push(fileName);

			}
		});
	});
})
