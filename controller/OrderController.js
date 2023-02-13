const { Question } = require("../domain/Const.js");
const { InputView } = require("../view/InputView.js");



class OrderController {
	#user;

	constructor(user) {
		this.#user = user;
	}

	order(){
		InputView.read(Question.ORDER_STORE);
		InputView.read(Question.ORDER_MENU);
	}
}