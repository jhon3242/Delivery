const OutputView = {
	printError(err){
		console.log(`Error : ${err.message}`);
	},

	printMenu(menu) {
		console.log(`메뉴 : ${menu}`);
	}
}

exports.OutputView = OutputView;