const { Order } = require("../domain/Order");

class OrderRepository {
	// static #instance;
	#repository = []
	#store;
	
	constructor(store){
		this.#store = store;
		// if (!OrderRepository.#instance) {
		// 	OrderRepository.#instance = this;
		// }
		// return OrderRepository.#instance;
	}

	addOrder(user, menu){
		let order = new Order(this.#store, user, menu);

		this.#repository.push(order.promisify());
	}
}