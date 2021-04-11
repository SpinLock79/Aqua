import * as path from 'path';
import * as webpack from 'webpack';
import { TsconfigPathsPlugin } from "tsconfig-paths-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

const appPath = "../wwwroot/scripts/";
const sourcePath = "/src/";

const config: webpack.Configuration = {
    mode: "development",
    context: path.join(__dirname, sourcePath),
    entry: "./index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
		plugins: [new TsconfigPathsPlugin({ 
            configFile: path.resolve(__dirname, "./tsconfig-for-webpack-config.json"),
            extensions: [".ts", ".tsx", ".js"],
            logLevel: "INFO",
            baseUrl: path.resolve(__dirname, "."),
            mainFields: ["browser", "main"]
         })]
    },
    output: {
        path: path.join(__dirname, appPath),
        filename: "index.js"
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    {loader: "css-loader"}
                ],                
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: "css-loader" },
                    {
                        loader: "postcss-loader", options: {
                            postcssOptions:{
                                plugins: function () {
                                    return [
                                        require('autoprefixer')
                                    ];
                                }
                            }
                        }
                    },
                    { loader: "sass-loader" }
                ],                
                exclude: /node_modules/
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg|png)$/,
                use: [ {loader: 'url-loader'} ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify("development")
            }
        }),        
        new BundleAnalyzerPlugin({ analyzerPort: 4000 })
    ]
};

export default config;