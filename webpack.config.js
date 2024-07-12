const urljoin = require('url-join');
const webpack = require('webpack');
const paths = require('./config/paths');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const EnvironmentPlugin = webpack.EnvironmentPlugin;
const ReactRefreshTypeScript = require('react-refresh-typescript');

require('dotenv').config({ path: paths.dotenv });

module.exports = (_, argv) => {
  const mode = argv.mode || process.env.NODE_ENV || 'none';
  const isProduction = mode === 'production';

  const PUBLIC_PATH = process.env.PUBLIC_PATH || './';
  const STATIC_PATH = PUBLIC_PATH;

  return {
    mode: 'none',
    entry: './src/index.tsx',
    output: {
      filename: 'js/[name].js',
      path: paths.appBuild,
      publicPath: 'auto',
      clean: true,
    },
    resolve: {
      alias: {
        '@': paths.appSrc,
        '~': paths.appSrc,
      },
      extensions: paths.moduleFileExtensions.map((ext) => `.${ext}`),
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                getCustomTransformers: () => ({
                  before: isProduction ? [] : [ReactRefreshTypeScript()],
                }),
              },
            },
          ],
        },
        {
          test: /\.(scss|css|sass)$/,
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'resolve-url-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [{ from: paths.appPublicStatic, to: './' }],
      }),
      new HtmlWebpackPlugin({
        template: paths.appHtml,
        publicPath: PUBLIC_PATH,
        filename: 'index.html',
        templateParameters: {
          urljoin,
          STATIC_PATH: STATIC_PATH,
        },
      }),
      !isProduction &&
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            checkSyntacticErrors: true,
            tsconfig: paths.appTsConfig,
          },
        }),
      new EnvironmentPlugin({
        APP_BASE_URL: process.env.APP_BASE_URL || '/',
      }),
      !isProduction &&
        new ReactRefreshWebpackPlugin({
          overlay: false,
        }),
    ].filter(Boolean),
    devServer: {
      static: paths.appBuild,
      host: process.env.HOST || 'localhost',
      port: process.env.PORT || 9000,
    },
  };
};
