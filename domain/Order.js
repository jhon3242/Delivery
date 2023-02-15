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
		this.#menu.push({"food" : food, "count" : count, })
	}

	get id(){
		return this.#id;
	}

	get menu(){
		return this.#menu;
	}

	get store(){
		return this.#store;
	}

	get totalCost(){
		let total = 0;
		this.menu.forEach(obj => {
			total += obj.food.cost * obj.count;
		})
		return total
	}
}

exports.Order = Order;