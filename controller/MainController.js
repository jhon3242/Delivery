const {UserController} = require("./UserController.js");
const {OrderController} = require("./OrderController.js");

class MainController {
	#userController = new UserController();
	#orderController;

	constructor(){}

	start() {
		let user = this.#userController.login();
		this.#orderController = new OrderController(user);
		
	}
}

exports.MainController = MainController;