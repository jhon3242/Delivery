const { MainController } = require("./controller/MainController.js");

class App {
	#mainController = new MainController();

	constructor(){}

	play(){
		this.#mainController.start();
	}
}

new App().play();



