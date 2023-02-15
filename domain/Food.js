
class Food {
	static #foodCounter = 0;
	#name;
	#time;
	#cost;
	#id;

	constructor(name, time, cost) {
		this.#name = name;
		this.#time = time;
		this.#cost = +cost;
		this.#id = ++Food.#foodCounter;
	}

	get id(){
		return this.#id;
	}

	get name(){
		return this.#name;
	}

	get cost(){
		return this.#cost;
	}

	get time(){
		return this.#time;
	}

}

exports.Food = Food;