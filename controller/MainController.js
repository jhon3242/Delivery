const {UserController} = require("./UserController.js");
const {OrderController} = require("./OrderController.js");
const {StoreController} = require("./StoreController.js");
const {DeliveryController} = require("./DeliveryController.js");
const { User } = require("../domain/User.js");

class MainController {
	#userController = new UserController();
	#orderController = new OrderController();
	#storeController = new StoreController();
	#deliveryController = new DeliveryController();

	constructor(){}

	async start() {
		// let user = this.#userController.login();
		let order = this.#orderController.process(new User("choi", 123)); // TODO 수정필요
		let envelope = await this.#storeController.transmitOrder(order);
		this.#deliveryController.preset();
		this.#deliveryController.deliver(envelope);
	}

}

exports.MainController = MainController;