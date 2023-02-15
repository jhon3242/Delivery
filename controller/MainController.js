const {UserController} = require("./UserController.js");
const {OrderController} = require("./OrderController.js");
const {StoreController} = require("./StoreController.js");
const { User } = require("../domain/User.js");

class MainController {
	#userController = new UserController();
	#orderController = new OrderController();
	#storeController = new StoreController();

	constructor(){}

	async start() {
		// let user = this.#userController.login();
		

		let order = this.#orderController.process(new User("choi", 123)); // TODO 수정필요
		let envelop = await this.#storeController.sendOrderToStore(order);
	}
}

exports.MainController = MainController;