

class Store {
	static #idCounter = 0;
	#id;
	#chefCount = 1;
	#storeName;
	#orderRepository;
	

	constructor(name){
		this.#id = ++this.#idCounter;
		this.#storeName = name;
		this.#orderRepository = new OrderRepository(this);
	}

	/**
	 * @param {*} info  = {name : "chicken", cost : 20000, time : 60}
	 */
	addMenu(name, info) {
		this.#menus.set(name, info)
	}

	addOrder(order){
		this.#orderRepository.addOrder(order);
	}

	cook(menuId){
		let menu = menus.findById(menuId);
		setTimeout(() => menu, menu.time);
	}

	get id(){
		return this.#id;
	}

	get chefCount(){
		return this.#chefCount
	}
}

exports.Store = Store;