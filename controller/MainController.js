const {UserController} = require("./UserController.js");
const {OrderController} = require("./OrderController.js");
const { User } = require("../domain/User.js");

class MainController {
	#userController = new UserController();
	#orderController = new OrderController();

	constructor(){}

	start() {
		// let user = this.#userController.login();
		this.#orderController.process(new User("choi", 123)); // TODO 수정필요

	}
}

exports.MainController = MainController;