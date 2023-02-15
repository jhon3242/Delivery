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
			console.log(`번호 : ${id}	이름 : ${food.name}		가격${food.cost}`);
		}
		console.log(Sign.ORDER_FINISH);
		console.log(Div);
	},

	printOrder(order) {
		console.log(Div);
		console.log(Sign.RECEIPT);
		order.menu.forEach(obj => {
			console.log(`음식 : ${obj.food.name}	개수 : ${obj.count}	가격 : ${obj.food.cost * obj.count}`);
		})
		console.log(Div);
		console.log(`총 금액 : ${order.totalCost}`);
	},

	printCook(foodName) {
		console.log(`${foodName}이/가 조리가 완료되었습니다.`);
	},

	print(msg) {
		console.log(msg);
	}
}

exports.OutputView = OutputView;