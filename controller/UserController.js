const { User } = require("../domain/User.js");
const { InputView } = require("../view/InputView");
const { OutputView } = require("../view/OutputView.js");
const { UseReposiotry } = require("../repository/UseReposiotry.js");



class UserController {
	#repository =new UseReposiotry ();

	constructor() {
		this.#repository.addUser(new User())
	};


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
