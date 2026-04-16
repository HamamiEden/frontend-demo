module.exports = {
  displayName: "shared-assets",
  preset: "../../../jest.preset.ts",
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  coverageDirectory: "../../../coverage/libs/shared/assets",
};
