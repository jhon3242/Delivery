class Driver {
	#name;
	#working;
	#speed;
	#trunk = [];

	constructor(name){
		this.#name = name;
		this.#working = false;
		this.#speed = 1000;
	}

	canDeliver(){
		return this.#working == false;
	}

	async doDrive(){
		this.#working = true;
		return new Promise((resolve) => {
			setTimeout(() => {
				resolve();
			}, this.#speed);
		})
	}

	load(envelope){
		this.#trunk.push(envelope);
	}

	offload(){
		this.#working = false;
		return this.#trunk.pop();
	}
}

exports.Driver = Driver;