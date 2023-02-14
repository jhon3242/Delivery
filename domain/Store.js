class Store {
	static #idCounter = 0;
	#id;
	#storeName;
	#chefCount = 1;
	#menus = new Map();

	constructor(name){
		this.#id = ++this.#idCounter;
		this.#storeName = name;
	}

	/**
	 * @param {*} info  = {name : "chicken", cost : 20000, time : 60}
	 */
	addMenu(name, info) {
		this.#menus.set(name, info)
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