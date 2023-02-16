const { Sign } = require("../domain/Const.js");
const { Driver } = require("../domain/Driver.js");
const { DriverRepository } = require("../repository/DriverRepository.js");
const { OutputView } = require("../view/OutputView.js");



class DeliveryController {
	#instance =  new DriverRepository();

	constructor() {}

	preset(){
		this.#instance.addDriver(new Driver("choi"));
	}

	async deliver(envelope){
		let driver = this.#instance.getOneDriver();
		await this.#pickUp(driver, envelope);
		await this.#drop(driver);
		
	}

	async #pickUp(driver, envelope){
		OutputView.print(Sign.PICKUP);
		await driver.doDrive();
		driver.load(envelope);
	}

	async #drop(driver){
		OutputView.print(Sign.DELIVER);
		await driver.doDrive();
		driver.offload();
		OutputView.print(Sign.FINISH);
	}
}

exports.DeliveryController = DeliveryController