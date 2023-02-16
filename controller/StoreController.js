const { Sign, Div} = require("../domain/Const.js");
const { StoreRepository } = require("../repository/StoreRepository.js");
const { OutputView } = require("../view/OutputView.js");



class StoreController {
	#repository = new StoreRepository();
	
	constructor(){}

	async sendOrderToStore(order) {
		let envelope = [];
		OutputView.print(Sign.COOKING);
		for (let foodOrd of order.menu){
			let box = await this.#cook(order.store, foodOrd);
			envelope.push(box);
		}
		OutputView.print(Div);
		return envelope;
	}

	async #cook(store, foodOrd){
		let box = [];
		while (foodOrd.count--) {
			let food = await store.cook(foodOrd.food.id)
			box.push(food.name);
			OutputView.printCook(foodOrd.food.name);
		}
		return box;
	}
}

exports.StoreController = StoreController;