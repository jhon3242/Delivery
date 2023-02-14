class User {
	static #idCounter = 0;
	#id;
	#name;
	#password;

	constructor(name, password) {
		this.#id = ++this.#idCounter;
		this.#name = name;
		this.#password = password;
	}

	isMatch(name, password){
		// console.log("ismatch");
		// console.log(name + " " + password);
		// console.log(this.#name == name);
		// console.log(this.#password == password);
		return this.#name == name && this.#password == password;
	}

	get id(){
		return this.#id;
	}
}

exports.User = User;