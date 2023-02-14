class UserRepository {
	static #instance;
	#repository = new Map();
	
	constructor(){
		if (!UserRepository.#instance) {
			UserRepository.#instance = this;
		}
		return UserRepository.#instance;
	}

	addUser(user){
		repository.set(user.id, user);
	}
}