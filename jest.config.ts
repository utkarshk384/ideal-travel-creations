import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  roots: ["<rootDir>"],
  testPathIgnorePatterns: ["<rootDir>[/\\\\](node_modules|.next)[/\\\\]"],
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$"],
  setupFilesAfterEnv: ["./src/tests/jest.setup.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "./node_modules/babel-jest",
    "\\.(gql|graphql)$": "jest-transform-graphql",
  },
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "^@/graphql(.*)$": "<rootDir>/src/lib/graphql$1",
    "^@/animations(.*)$": "<rootDir>/src/Animations$1",
    "^@/components(.*)$": "<rootDir>/Components$1",
    "^@/apolloClient(.*)$": "<rootDir>/src/lib/apolloClient",
    "^@/apolloQuery(.*)$": "<rootDir>/src/lib/apolloQuery",
    "^@/styles(.*)$": "<rootDir>/styles/pages$1",
    "^@/src(.*)$": "<rootDir>/src$1",
    "^@/api/(.*)$": "<rootDir>/pages/api$1",
    "^@/pages(.*)$": "<rootDir>/pages$1",
  },
};

export default config;
