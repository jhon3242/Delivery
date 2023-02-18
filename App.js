const { MainController } = require("./controller/MainController.js");
const { initDB } = require("./init/Init.js");


class App {
	#mainController = new MainController();

	constructor(){}

	async play(){
		await initDB();
		await this.#mainController.start();
	}
}

new App().play();



