const { Food } = require("./Food");
const { OrderRepository } = require("../repository/OrderRepository.js");

class Store {
	static #idCounter = 0;
	#id;
	#chefCount = 1;
	#storeName;
	#menus;
	#orderRepository;
	

	constructor(name){
		this.#id = ++Store.#idCounter;
		this.#storeName = name;
		this.#orderRepository = new OrderRepository(this);
		this.#menus = new Map();
		this.addMenu(new Food("chicken", 40));
	}

	
	addMenu(food) {
		this.#menus.set(food.id, food)
	}

	addOrder(order){
		this.#orderRepository.addOrder(order);
	}

	cook(menuId){
		let menu = menus.findById(menuId);
		setTimeout(() => menu, menu.time);
	}

	getFoodById(foodId){
		return this.#menus.findById(foodId);
	}

	get id(){
		return this.#id;
	}

	get chefCount(){
		return this.#chefCount
	}

	get menus(){
		return this.#menus
	}
}

exports.Store = Store;