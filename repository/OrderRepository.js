const { Order } = require("../domain/Order");

class OrderRepository {
	static #instance;
	#repository = [] 
	
	
	constructor(){
		if (!OrderRepository.#instance) {
			OrderRepository.#instance = this;
		}
		return OrderRepository.#instance;
	}

	addOrder(store, menu){
		let order = new Order(store, menu);

		this.#repository.push(order.promisify());
	}
}