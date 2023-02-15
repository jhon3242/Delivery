const { Sign, Div} = require("../domain/Const.js");

const OutputView = {
	printError(err){
		console.log(`Error : ${err.message}`);
	},

	printStore(store) {
		console.log(`\n**** ${store.name}에 오신것을 환영합니다!! ****`);
	},

	printMenu(menu) {
		for (let [id, food] of menu.entries()) {
			console.log(`번호 : ${id}, 이름 : ${food.name}`);
		}
		console.log(Sign.ORDER_FINISH);
		console.log(Div);
	}
}

exports.OutputView = OutputView;