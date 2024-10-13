const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Update the transformer and resolver configurations
config.transformer = {
  babelTransformerPath: require.resolve('react-native-svg-transformer'),
  ...config.transformer,
};

config.resolver = {
  assetExts: config.resolver.assetExts.filter(ext => ext !== 'svg'),
  sourceExts: [...config.resolver.sourceExts, 'svg'],
  ...config.resolver,
};

module.exports = withNativeWind(config, { input: './global.css' });