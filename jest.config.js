module.exports = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
  moduleFileExtensions: ["js"],
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/test/*.js"],
};
