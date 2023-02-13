class User {
	#id;
	#name;
	#password;

	constructor(id, name, password) {
		this.#id = id;
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
}

exports.User = User;