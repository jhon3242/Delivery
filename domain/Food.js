
class Food {
	static #foodCounter = 0;
	#name;
	#time;
	#id;

	constructor(name, time) {
		this.#name = name;
		this.#time = time;
		this.#id = ++Food.#foodCounter;
	}
}

exports.Food = Food;