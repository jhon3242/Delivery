const { Question, Answer } = require("../domain/Const.js");
const { Order } = require("../domain/Order.js");
const { InputView } = require("../view/InputView.js");
const { OutputView } = require("../view/OutputView.js");
const { StoreRepository } = require("../repository/StoreRepository.js");
const { Store } = require("../domain/Store.js");
const { Food } = require("../domain/Food.js");



class OrderController {
	// #orderRepository = new this.#orderRepository();
	#storeRepository = new StoreRepository();

	constructor() {}

	getOrder(user){
		this.#initStore();
		return this.#order(user, this.#pickStore());

		return order;
	}

	#initStore(){ // TODO 추후 삭제
		let store = new Store("김밥나라");
		store.addFoodToMenu(new Food("김밥", 1000, 2000));
		store.addFoodToMenu(new Food("치즈김밥", 2000, 3000));
		this.#storeRepository.addStore(store);
	}

	/**
	 * 가게에 주문을 하는 함수
	 */
	#order(user, store){
		let order = new Order(user, store)
		OutputView.printStore(store);
		OutputView.printMenu(store.menu)
		while (true){
			let foodId = InputView.readMenuNum()
			if (foodId == Answer.NO) break;
			let count = InputView.readNum();
			order.addFood(foodId, count);
		}
		OutputView.printOrder(order);
		return order;
	}



	#pickStore(){ // TODO 수정 필요
		let storeId = 1 //
		return this.#storeRepository.findById(storeId);
	}

	// #promisify(order){
	// 	return new Promise((resolve) => {
	// 		setTimeout(() => {
	// 			order.cook();
	// 			resolve(order)
	// 		}, order.time)
	// 	})
	// }
}

exports.OrderController = OrderController;