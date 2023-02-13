
const readlineSync = require("readline-sync");



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
}

exports.InputView = InputView;