const Question = {
	ADDRRESS : "주소를 입력해주세요.",
	ORDER_FOOD : "주문할 음식 번호를 입력해주세요. : ",
	COUNT : "몇 개를 주문하실건가요? : ",
	CONTINUE_ORDER : "주문을 계속 하실건가요? ( y / s )",
}

const Sign = {
	ORDER_FINISH : "주문을 종료하고 싶으면 n 를 입력해주세요.",
	RECEIPT : "			주문서			",
	COOKING : "			조리중...		",
	PICKUP : "			픽업중...		",
	DELIVER : "			배달중...		",
	FINISH : "		배달이 완료되었습니다!		",
}

const Answer = {
	YES : "y",
	NO : "n"
}

const Validate = {
	ORDER_NUM : "0123456789n",
	NUM : "0123456789",
};

const Div = "-------------------------------------------------\n\n"

module.exports = {Question, Answer, Sign, Validate, Div};