class Store {
	#storeName;
	#menus = new Map();

	constructor(name){
		this.#storeName = name;
	}

	/**
	 * @param {*} info  = {name : "chicken", cost : 20000, time : 60}
	 */
	addMenu(name, info) {
		this.#menus.set(name, info)
	}
}