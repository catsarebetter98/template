const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    'blog/home': "./src/components/blog/home/index.js",
    'blog/article': "./src/components/blog/article/index.js",
    'blog/impactmatrix': "./src/components/blog/impact-matrix/index.js",
    'blog/feelingswheel': "./src/components/blog/feelingswheel/index.js",
    'blog/angermanagement': "./src/components/blog/anger-management-checklist/index.js",
    'blog/links': "./src/components/blog/links/index.js",
    'blog/subscribe': "./src/components/blog/subscribe/index.js",
    'blog/editor': "./src/components/blog/editor/index.js",
    'blog/twitterdevrel': "./src/components/blog/twitterdevrel/index.js",
    'blog/screenshots': "./src/components/blog/screenshots/index.js",

    // developers.hshidara.com
    'developers/landing': "./src/components/developers/landing/index.js",
    'developers/open': "./src/components/developers/open/index.js",
    'developers/about': "./src/components/developers/about/index.js",
    'developers/account': "./src/components/developers/account/index.js",
    'developers/blog': "./src/components/developers/blog/index.js",
    'developers/django_cookiecutter_ui': "./src/components/developers/django_cookiecutter_ui/index.js",
    'developers/developers_blog_article': "./src/components/developers/developers_blog_article/index.js",
    'developers/signedin': "./src/components/developers/signedin/index.js",
    'developers/book': "./src/components/developers/book/index.js",

    // productmanagers.hshidara.com
    'productmanagers/landing': "./src/components/productmanagers/landing/index.js",
    'productmanagers/article': "./src/components/productmanagers/article/index.js",
    'productmanagers/terms': "./src/components/productmanagers/terms/index.js",
    'productmanagers/community': "./src/components/productmanagers/community/index.js",
    'productmanagers/learn': "./src/components/productmanagers/learn/index.js",
    'productmanagers/partners': "./src/components/productmanagers/partners/index.js",
    'productmanagers/certificate': "./src/components/productmanagers/certificate/index.js",
  },
  output: {
    path: path.resolve(__dirname, "./static/frontend"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.md$/i,
        use: 'raw-loader'
      },
      {
        test: /\.mdx?$/,
        use: [
          {
            loader: '@mdx-js/loader',
            /** @type {import('@mdx-js/loader').Options} */
            options: {}
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-inline-loader'
          }
        ]
      }
    ],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
};
