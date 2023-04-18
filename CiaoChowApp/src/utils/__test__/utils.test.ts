import { randomNumberGeneration, validateEmail } from '../utils';

describe('Random Generation', () => {
	it('should generate a number that is less than 3', () => {
		expect(randomNumberGeneration(2)).toBeLessThanOrEqual(3);
	});

	it('should not be less than 0', () => {
		expect(randomNumberGeneration(2)).not.toBeLessThanOrEqual(0);
	});
});

describe('Email validation', () => {
	it('should be valid email', () => expect(validateEmail("duranmoodley97@gmail.com")).toBeTruthy());
	it('should be valid email', () => expect(validateEmail("1234ghdgd@gmail.com")).toBeTruthy());
	it('should be valid email', () => expect(validateEmail("duranmoodley97@yahoo.com")).toBeTruthy());
	it('should be valid email', () => expect(validateEmail("duranmoodley@gmail.com")).toBeTruthy());
	it('should be invalid email', () => expect(validateEmail("duranmoodley97gmail.com")).toBeFalsy());
	it('should be invalid email', () => expect(validateEmail("")).toBeFalsy());
	it('should be invalid email', () => expect(validateEmail("duranmoodley97@gmail")).toBeFalsy());
	it('should be invalid email', () => expect(validateEmail("duranmoodley@gmail.")).toBeFalsy());
});