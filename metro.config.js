// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { mergeConfig } = require("metro-config");
const defaultSourceExts =
  require("metro-config/src/defaults/defaults").sourceExts;
const defaultAssetExts =
  require("metro-config/src/defaults/defaults").assetExts;

/** @type {import('expo/metro-config').MetroConfig} */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: [...defaultAssetExts.filter((ext) => ext !== "svg")],
    sourceExts: [...defaultSourceExts, "svg", "cjs", "json", "mjs"],
  },
};
module.exports = mergeConfig(defaultConfig, config);
