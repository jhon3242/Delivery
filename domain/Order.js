class Order {
	static #idCounter = 0;
	#id;
	#store;
	#user;
	#menus = [];

	constructor(store, user){
		this.#id = ++Order.#idCounter;
		this.#store = store;
		this.#user = user;
	}

	/**
	 * @param {*} info  = {name : "chicken", cost : 20000, time : 60}
	 */
	addMenu(foodId, count) {
		let food = this.#store.getFoodById(foodId);
		while (count--) this.#menus.push(menu);
	}

	cook(){

	}

	get id(){
		return this.#id;
	}
}

exports.Order = Order;