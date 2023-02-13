const {UserController} = require("./UserController.js");

class MainController {
	#userController = new UserController();

	constructor(){}

	start() {
		let user = this.#userController.login();
		
	}
}

exports.MainController = MainController;