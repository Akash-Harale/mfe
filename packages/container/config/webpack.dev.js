const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModulefederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModulefederationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:8081/remoteEntry.js",
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
