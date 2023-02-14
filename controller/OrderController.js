const { Question } = require("../domain/Const.js");
const { InputView } = require("../view/InputView.js");



class OrderController {
	#orderRepository = new this.#orderRepository();
	#user;

	constructor(user) {
		this.#user = user;
	}

	process(){
		this.order();
		this.cook(); // TODO 추후 storeController 만들어 분리 예정
	}

	order(){
		while (this.doOrder()){
			this.#orderRepository
				.addOrder(this.#pickStore(), this.#pickMenu());
		}
	}

	/**
	 * 주문할지 물어봄
	 */
	#doOrder(){

	}

	/**
	 * orderRepository 로 부터 주문을 가져와 메뉴를 요리 
	 */
	cook(){

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

	#promisify(order){
		return new Promise((resolve) => {
			setTimeout(() => {
				order.cook();
				resolve(order)
			}, order.time)
		})
	}
}