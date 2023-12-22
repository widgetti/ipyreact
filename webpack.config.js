const path = require("path");
const version = require("./package.json").version;

// Custom webpack rules
const rules = [
  {
    test: /\.mjs$/i,
    use: [
      {
        loader: "raw-loader",
        options: {
          esModule: false,
        },
      },
    ],
  },
  { test: /\.ts$/, loader: "ts-loader" },
  { test: /\.tsx$/, loader: "ts-loader" },
  { test: /\.js$/, loader: "source-map-loader" },
  { test: /\.css$/, use: ["style-loader", "css-loader"] },
];

// Packages that shouldn't be bundled but loaded at runtime
const externals = ["@jupyter-widgets/base"];

const resolve = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  extensions: [".webpack.js", ".web.js", ".ts", ".js", ".tsx", ".jsx"],
};

const resolve16 = {
  // Add '.ts' and '.tsx' as resolvable extensions.
  extensions: [".webpack.js", ".web.js", ".ts", ".js", ".tsx", ".jsx"],
  alias: {
    react: "react16",
    "react-dom": "react-dom16",
    "react-dom/client": path.resolve(__dirname, "src/client_react16.js"),
  },
};

module.exports = [
  /**
   * Notebook extension
   *
   * This bundle only contains the part of the JavaScript that is run on load of
   * the notebook.
   */
  {
    entry: "./src/extension.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "ipyreact", "nbextension"),
      libraryTarget: "amd",
      publicPath: "",
    },
    module: {
      rules: rules,
    },
    devtool: "source-map",
    externals,
    resolve,
  },

  // cannot get this to work yet
  // {
  //   entry: './src/extension.ts',
  //   output: {
  //     filename: 'index16.js',
  //     path: path.resolve(__dirname, 'ipyreact', 'nbextension'),
  //     libraryTarget: 'amd',
  //     publicPath: '',
  //   },
  //   module: {
  //     rules: rules
  //   },
  //   devtool: 'source-map',
  //   externals,
  //   resolve: resolve16,
  // },

  /**
   * Embeddable @widgetti/jupyter-react bundle
   *
   * This bundle is almost identical to the notebook extension bundle. The only
   * difference is in the configuration of the webpack public path for the
   * static assets.
   *
   * The target bundle is always `dist/index.js`, which is the path required by
   * the custom widget embedder.
   */
  {
    entry: "./src/index.ts",
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      libraryTarget: "amd",
      library: "@widgetti/jupyter-react",
      publicPath:
        "https://unpkg.com/@widgetti/jupyter-react@" + version + "/dist/",
    },
    devtool: "source-map",
    module: {
      rules: rules,
    },
    externals,
    resolve,
  },

  /**
   * Documentation widget bundle
   *
   * This bundle is used to embed widgets in the package documentation.
   */
  {
    entry: "./src/index.ts",
    output: {
      filename: "embed-bundle.js",
      path: path.resolve(__dirname, "docs", "source", "_static"),
      library: "@widgetti/jupyter-react",
      libraryTarget: "amd",
    },
    module: {
      rules: rules,
    },
    devtool: "source-map",
    externals,
    resolve,
  },
];
