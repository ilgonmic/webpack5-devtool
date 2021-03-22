let config = {
    mode: 'development',
    resolve: {
      modules: [
        "node_modules"
      ]
    },
    plugins: [],
    module: {
      rules: []
    }
  };
  
  // entry
  config.entry = {
      main: ["./compiled/my.js"]
  };
  
  config.output = {
      path: require("path").resolve(__dirname, "../../../build"),
      filename: "my.js",
      devtoolModuleFilenameTemplate: "[absolute-resource-path]"
  };
  
  // source maps
  config.module.rules.push({
          test: /\.js$/,
          use: ["source-map-loader"],
          enforce: "pre"
  });
  config.devtool = 'source-map';
  
  
  module.exports = config
  