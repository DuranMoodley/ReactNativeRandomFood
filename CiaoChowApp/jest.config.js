module.exports = {
	roots: ["<rootDir>/src"],
	preset: 'ts-jest',
	testEnvironment: 'node',
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	clearMocks: true,
	//testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
	coverageDirectory: 'coverage',
	transformIgnorePatterns: ['<rootDir>/node_modules/'],
	// transform: {
	// 	"^.+\\.tsx?$": "ts-jest"
	// },
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json"
	]
};
