class Order {
	static #idCounter = 0;
	#id;
	#store;
	#user;
	#menus = [];

	constructor(store, user){
		this.#id = ++this.#idCounter;
		this.#store = name;
		this.#user = user;
	}

	/**
	 * @param {*} info  = {name : "chicken", cost : 20000, time : 60}
	 */
	addMenu(menu, count) {
		while (count--) this.#menus.push([...menu]);
	}

	cook(){

	}

	get id(){
		return this.#id;
	}
}

exports.Order = Order;