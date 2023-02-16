class Validator {
	static validate(src, char){
		if (char.includes(src)) return ;
		throw new Error("유효하지 않는 입력값 입니다.");
	}
}

exports.Validator = Validator;