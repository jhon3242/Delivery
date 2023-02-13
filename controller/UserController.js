const { User } = require("../domain/User.js");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView.js");




class UserController {
	#id = 1;
	#repository = new Map();

	constructor() {this.init()};

	init(){
		this.#repository.set(this.#id, new User(this.#id, "choi", 123));
		this.#id++;
	}

	login() {
		try {
			return this.#findUser(InputView.readName(), 
									InputView.readPassword())
		} catch (err) {
			OutputView.printError(err);
			return this.login();
		}
	}

	#findUser(name, passowrd) {
		let [result] = [...this.#repository]
						.filter(([_, obj]) => obj.isMatch(name, passowrd));
		if (!result ) throw new Error("No matched User")
	}
}

exports.UserController = UserController;
