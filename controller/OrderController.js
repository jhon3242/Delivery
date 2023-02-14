const { Question } = require("../domain/Const.js");
const { InputView } = require("../view/InputView.js");



class OrderController {
	#user;

	constructor(user) {
		this.#user = user;
	}

	order(){
		this.#pickStore();
		this.#pickMenu();
		InputView.read(Question.ORDER_STORE);
		InputView.read(Question.ORDER_MENU);
	}

	/**
	 * 가게 선택
	 */
	#pickStore(){

	}

	/**
	 * 메뉴 선택
	 */
	 #pickMenu(){

	}
}