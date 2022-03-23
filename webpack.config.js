// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModernModePlugin = require("./modernPlugin");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const SentryCliPlugin = require("@sentry/webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const stylesHandler = "style-loader";

const config = {
  devtool: isProduction ? "source-map" : "eval-cheap-module-source-map",
  experiments: {
    outputModule: true,
  },
  entry: "./src/index.jsx",
  output: {
    module: true,
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    hot: true,
    open: false,
    host: "localhost",
  },
  plugins: [
    ...[!isProduction && new ReactRefreshPlugin()].filter(Boolean),
    new HtmlWebpackPlugin({
      template: "index.html",
    }),
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new ModernModePlugin({
      isModuleBuild: true,
      targetDir: path.resolve("./dist"),
    }),
    ...[
      isProduction &&
        new SentryCliPlugin({
          project: "shoplazza-pm",
          org: "my-sentry-test",
          authToken:
            "d56e3b0ae5e641a9a1db8f229214a5a153a1b78f55cf4de38670fcd6b124823a",
          include: "dist",
          ignore: ["node_modules", "webpack.config.js"],
          configFile: "sentry.properties",
          urlPrefix: "~/",
        }),
    ].filter(Boolean),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.css$/i,
        use: [
          stylesHandler,
          {
            loader: "css-loader",
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
