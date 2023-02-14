const { User } = require("../domain/User");

class UserRepository {
	static #instance;
	#repository = new Map();
	
	
	constructor(){
		if (!UserRepository.#instance) {
			UserRepository.#instance = this;
		}
		return UserRepository.#instance;
	}

	addUser(name){
		let user = new User(name);
		this.#repository.set(user.id, user);
	}
}