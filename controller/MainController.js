const {UserController} = require("./UserController.js");
const {OrderController} = require("./OrderController.js");

class MainController {
	#userController = new UserController();
	#orderController;

	constructor(){}

	start() {
		let user = this.#userController.login();
		this.#orderController = new OrderController(user); // TODO 추후 분리
		this.#orderController.process()
	}
}

exports.MainController = MainController;