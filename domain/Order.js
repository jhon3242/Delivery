class Order {
	static #idCounter = 0;
	#id;
	#store;
	#user;
	#menu = [];

	constructor(user, store){
		this.#id = ++Order.#idCounter;
		this.#store = store;
		this.#user = user;
	}

	/**
	 * @param {*} info  = {name : "chicken", cost : 20000, time : 60}
	 */
	addFood(foodId, count) {
		let food = this.#store.getFoodById(foodId);
		while (count--) this.#menu.push(food);
	}

	

	get id(){
		return this.#id;
	}
}

exports.Order = Order;