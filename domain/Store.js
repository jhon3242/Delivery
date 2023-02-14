class Store {
	static #idCounter = 0;
	#id;
	#storeName;
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

	get id(){
		return this.#id;
	}
}