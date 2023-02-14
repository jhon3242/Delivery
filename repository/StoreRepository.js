class StoreRepository {
	static #instnace;
	#repository = new Map();

	constructor(){
		if (!StoreRepository.#instnace){
			StoreRepository.#instnace = this;
		}
		return StoreRepository.#instnace;
	}

	addStore(store){
		this.#repository.set(store.id, store);
	}
}