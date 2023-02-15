class Order {
	static #idCounter = 0;
	#id;
	#store;
	#user;
	#orderTime;
	#menu = [];

	constructor(user, store){
		this.#id = ++Order.#idCounter;
		this.#store = store;
		this.#user = user;
		this.#orderTime = new Date();
	}


	addFood(foodId, count) {
		let food = this.#store.getFoodById(foodId);
		this.#menu.push({name : food.name, "count" : count, "food" : food})
	}

	get id(){
		return this.#id;
	}

	get menu(){
		return this.#menu;
	}
}

exports.Order = Order;