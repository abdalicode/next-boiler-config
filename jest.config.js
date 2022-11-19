// eslint-disable-next-line no-undef
const nextJest = require("next/jest");

const createJestConfig = nextJest({
	dir: "./",
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
	// Add more setup options before each test is run
	// setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	// if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
	moduleDirectories: ["node_modules", "<rootDir>/"],
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"^@components/(.*)$": "<rootDir>/src/common/components/$1",
		"^@styles/(.*)$": "<rootDir>/src/common/styles/$1",
		"^@hooks/(.*)$": "<rootDir>/src/common/hooks/$1",
		"^@store/(.*)$": "<rootDir>/src/common/store/$1",
		"^@types/(.*)$": "<rootDir>/src/types/$1",
		"^@queries/(.*)$": "<rootDir>/src/common/queries/$1",
		"^@layouts/(.*)$": "<rootDir>/src/common/layouts/$1",
		"^@api/(.*)$": "<rootDir>/src/common/api/$1",
		"^@ui/(.*)$": "<rootDir>/src/ui/$1",
	},
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
// eslint-disable-next-line no-undef
module.exports = createJestConfig(customJestConfig);
