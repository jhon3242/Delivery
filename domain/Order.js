class Order {
	static #idCounter = 0;
	#id;
	#store;
	#menus = [];

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

	cook(){
		
	}

	get id(){
		return this.#id;
	}
}