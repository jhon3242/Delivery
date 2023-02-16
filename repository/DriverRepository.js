class DriverRepository {
	static #instance;
	#repository = [];

	constructor(){
		if (!DriverRepository.#instance) {
			DriverRepository.#instance = this;
		}
		return DriverRepository.#instance;
	}

	addDriver(driver){
		this.#repository.push(driver);
	}

	getOneDriver(){
		for (let driver of this.#repository){
			if (driver.canDeliver()) return driver;
			throw new Error("가용 배달 기사가 없습니다.");
		}
	}
}

exports.DriverRepository = DriverRepository