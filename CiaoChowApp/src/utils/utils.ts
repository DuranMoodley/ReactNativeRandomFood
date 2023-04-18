const BASEURL = "https://ciaochow.plusnarrative.biz";
import { Food } from "../data/data";

const randomNumberGeneration = (max: number) => {
	return Math.floor(Math.random() * max) + 1;
};

const getRandomItem = (foodData: Food[] | undefined, randomIdNumber: number | undefined) => {
	return foodData?.filter(item => item?.id === randomIdNumber)[0];
};

const validateEmail = (email: string) => {
	let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
	if (reg.test(email) === false) {
		return false;
	}
	else {
		return true;
	}
}

export { BASEURL, randomNumberGeneration, getRandomItem, validateEmail };