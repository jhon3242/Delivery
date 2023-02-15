const { Food } = require("./Food");
const { OrderRepository } = require("../repository/OrderRepository.js");

class Store {
	static #idCounter = 0;
	#id;
	#chefCount = 1;
	#name;
	#menu;
	#orderRepository;
	

	constructor(name){
		this.#id = ++Store.#idCounter;
		this.#name = name;
		this.#orderRepository = new OrderRepository(this);
		this.#menu = new Map();
		
	}

	addFoodToMenu(food) {
		this.#menu.set(food.id, food)
	}

	addOrder(order){
		this.#orderRepository.addOrder(order);
	}

	async cook(foodId){
		let food = this.menu.get(foodId);
		await new Promise((resolve) => {
			setTimeout(() => {
				resolve(food);
			}, +food.time);
		})
		return food;
	}

	getFoodById(foodId){
		return this.#menu.get(+foodId);
	}

	get id(){
		return this.#id;
	}

	get chefCount(){
		return this.#chefCount;
	}

	get menu(){
		return this.#menu;
	}

	get name(){
		return this.#name;
	}


}

exports.Store = Store;