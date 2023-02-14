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

	process(user){
		this.#initStore();
		let store = this.#pickStore();
		this.#order(user, store);
	}

	#initStore(){ // TODO 수정 필요
		let store = new Store("김밥나라");
		store.addMenu(new Food("김밥", 5));
		this.#storeRepository.addStore(store);
	}


	/**
	 * 가게에 주문을 하는 함수
	 */
	#order(user, store){
		let order = new Order(user, store)
		while (this.#continueOrder()){
			OutputView.printMenu(store.menus)
			let foodId = InputView.read(Question.ORDER_FOOD)
			let count = InputView.read(Question.COUNT);
			order.addfood(foodId, count);
		}
		store.addOrder(order);
	}

	#continueOrder(){
		return true;
		// let answer = InputView.read(Question.CONTINUE_ORDER);
		// if (answer == Answer.YES) return true;
		// return false;
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