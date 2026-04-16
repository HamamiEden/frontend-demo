module.exports = {
  displayName: "shared-utils",
  preset: "../../../jest.preset.ts",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/shared/utils",
};
