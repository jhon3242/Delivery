const { Question } = require("../domain/Const.js");
const { Order } = require("../domain/Order.js");
const { InputView } = require("../view/InputView.js");



class OrderController {
	// #orderRepository = new this.#orderRepository();
	#storeRepository = new StoreRepository();

	constructor() {}

	process(user){
		let store = this.#pickStore();
		this.#order(user, store);
	}


	/**
	 * 가게에 주문을 하는 함수
	 */
	#order(user, store){
		let order = new Order(user, store)
		while (this.#doOrder()){
			order.addMenu(menu, count)
		}
		store.addOrder(order);
	}


	/**
	 * 가게 선택
	 */
	#pickStore(){
		let storeId = 1 //
		return this.#storeRepository.findById(storeId);
	}

	/**
	 * 메뉴 선택
	 */
	 #pickMenu(){

	}

	#promisify(order){
		return new Promise((resolve) => {
			setTimeout(() => {
				order.cook();
				resolve(order)
			}, order.time)
		})
	}
}

exports.OrderController = OrderController;