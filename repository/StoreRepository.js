const {Store} = require("../domain/Store");

class StoreRepository {
	static #instnace;
	#repository = new Map();

	constructor(){
		if (!StoreRepository.#instnace){
			StoreRepository.#instnace = this;
		}
		return StoreRepository.#instnace;
	}

	addStore(name){
		let store = new Store(name);
		this.#repository.set(store.id, store);
	}
}