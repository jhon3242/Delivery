
const readlineSync = require("readline-sync");
const { Question, Validate } = require("../domain/Const.js");
const { Validator } = require("../domain/Validator.js");
const { OutputView } = require("./OutputView.js");


const InputView = {
	readName(){
		return this.read("NAME : ");
		
	},

	readPassword() {
		return this.read("PASSWORD : ");
	},


	read(question){
		return readlineSync.question(question);
	},

	readMenuNum(){
		try {
			let answer =this.read(Question.ORDER_FOOD);
			Validator.validate(answer, Validate.ORDER_NUM);
			return answer;
		} catch (err) {
			OutputView.printError(err);
			return this.readMenuNum();
		}
	},

	readNum(){
		try {
			let answer = this.read(Question.COUNT);
			Validator.validate(answer, Validate.NUM);
			return answer;
		} catch (err) {
			OutputView.printError(err);
			return this.readNum();
		}
	}

}

exports.InputView = InputView;