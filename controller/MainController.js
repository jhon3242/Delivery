const {UserController} = require("./UserController.js");
const {OrderController} = require("./OrderController.js");

class MainController {
	#userController = new UserController();
	#orderController = new OrderController();

	constructor(){}

	start() {
		let user = this.#userController.login();
		this.#orderController.process(user);

	}
}

exports.MainController = MainController;