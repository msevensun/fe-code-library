var path = require('path');

var webpack = require('webpack');

/*验证config文件是否正确*/
var validate = require('webpack-validator');

/*清空发布目录*/
var CleanWebpackPlugin = require('clean-webpack-plugin');

/* 创建一个html模板，自动插入打包的js*/
var HtmlWebpackPlugin = require('html-webpack-plugin');

/*提取css文件*/
var ExtractTextPlugin = require('extract-text-webpack-plugin');

/* 可以把分开配置的config合并，分开生产环境和调试环境*/
var Merge = require('webpack-merge');

/*自动打开浏览器*/
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

/*copy目录下的图片到输出目录*/
 var TransferWebpackPlugin = require('transfer-webpack-plugin');

/*当前 npm 运行*/
var currentTarget = process.env.npm_lifecycle_event;

var debug,    
    devServer,  
    minimize;   

if (currentTarget == "build") { //线上模式

    debug = false, devServer = false, minimize = true;

} else if (currentTarget == "dev") { //开发模式

    debug = true, devServer = false, minimize = false;

} else if (currentTarget == "dev-hrm") { // 热更新模式

    debug = true, devServer = true, minimize = false;
}

/*代理访问地址*/
var proxyTarget = 'http://localhost:8888';


var PATHS = {
    /*发布目录*/
    publicPath: devServer ? '/dist/' : './',

    /*公共资源目录*/
    libsPath: path.resolve(process.cwd(), './libs'),

    /*src源码目录*/
    srcPath: path.resolve(process.cwd(), './src'),

    /*node_modules 依赖包目录*/
    node_modulesPath: path.resolve('./node_modules')
}

var resolve = {
    /*引用时可以忽略后缀 */
    extensions: ['', '.js', '.css', '.scss', '.ejs', '.png', '.jpg'],
    root: [
        PATHS.node_modulesPath
    ],
    /*别名，引用时直接可以通过别名引用*/
    alias: {
        /*
         * js
         */
        // zepto: path.join(PATHS.libsPath, "js/zepto/zepto.mis.js"),
        // zextend: path.join(PATHS.libsPath, "js/zepto/zepto.extend.js"),
        // cookie: path.join(PATHS.libsPath, "js/cookie/zepto.cookie.min.js"),

        /*
         * css
         */
        reset: path.join(PATHS.libsPath, "css/reset/reset.css")
    }
}

/*入口*/
var entry = {
    index: './src/js/index.js',
    flexible: path.join(PATHS.libsPath, "js/flexible.js"),
    common: [
        path.join(PATHS.libsPath, "js/zepto/zepto.mis.js"),
        path.join(PATHS.libsPath, "js/zepto/zepto.extend.js"),
        path.join(PATHS.libsPath, "js/cookie/zepto.cookie.min.js")
    ]
};

/*webpack 编译后输出标识*/
var output = {
    /*输出目录*/
    path: path.join(__dirname, 'dist'),

    /*发布后，资源的引用目录*/
    publicPath: PATHS.publicPath,

    /*文件名称 可以配置不同模式下是否加版本号*/
    filename: devServer ? 'js/[name].js' : 'js/[name].js',

    //require.ensure
    chunkFilename: 'js/[name].chunk.js'

    /*按需加载模块时输出的文件名称*/
    //  : devServer ? 'js/[name].js' : 'js/[name].js'
}
var loaders = [

    /*处理html图片和控制html压缩*/
    {
        test: /\.html$/,
        loader: "html",
        query: {
            minimize: false
        }
    },

    /*提取css到单独文件loader*/
    {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader", {
            publicPath: '../'
        })
    },

    /*img loader*/
    {
        test: /.*\.(png|gif|jpe?g)$/,
        loader: 'url-loader',
        query: {
            
             // *  limit=10000 ： 10kb
             // *  图片大小小于10kb 采用内联的形式，否则输出图片
             // * 
            limit: 10000,
            name: 'img/[name].[ext]'
        }
    }
    // ,
    // //ES6写法
    // {
    //     test: path.join(PATHS.srcPath, 'js/es6/'),
    //     loader: 'babel-loader',
    //     query: {
    //       presets: ['es2015']
    //     }
    // }

    /* font loader*/
    // {
    //     test: /\.(eot|woff|woff2|ttf|svg)$/,
    //     loader: 'file-loader',
    //     query: {
    //         limit: 5000,
    //         name: '/font/[name]-[hash:8].[ext]'
    //     }
    // }
];

var plugins = [

    /*全局标识 */
    new webpack.DefinePlugin({
        /*开发标识 */
        __DEV__: debug,
        /**热更新标识**/
        __DEVHRM__: devServer,
        /*代理的标识*/
        __DEVAPI__: devServer ? "/devApi/" : "''",
    }),

    /*公共js*/
    // new webpack.optimize.CommonsChunkPlugin(
    //     devServer ?
    //     {name: "flexible", filename: "js/flexible.js"}:
    //     {names: ["flexible", "webpackAssets"]}
    // ),

    /*如：使用jquery 可以直接使用符号 "$" */
    // new webpack.ProvidePlugin({
    //     $: "zepto",
    //     Zepto: "zepto",
    //     'window.Zepto': 'zepto',
    //     'window.$': 'zepto'
    // }),


    /*删除重复依赖的文件*/
    new webpack.optimize.DedupePlugin(),

    /*避免在文件不改变的情况下hash值不变化*/
    new webpack.optimize.OccurenceOrderPlugin(),

    /*发布前清空发布目录 */
    new CleanWebpackPlugin(['dist'], {
        root: '', 
        verbose: true,
        dry: false 
    }),

    /*提取css文件到单独的文件中 */
    new ExtractTextPlugin(devServer ? "css/[name].css" : "css/[name].css", {allChunks: true}),

    //把指定文件夹下的文件复制到指定的目录 
    new TransferWebpackPlugin([
      {from: PATHS.srcPath+'/img/lazy-pic/',to: './img/lazy-pic/'} 
    ]),

    /*创建html文件*/
    new HtmlWebpackPlugin({
        filename: 'home.html',
        template: __dirname + '/src/home.html',
        /*插入html中的位置 inject: true | 'head' | 'body' | false */
        inject: 'true',
        // 需要依赖的模块
        chunks: ['common', 'index', 'webpackAssets'],
        // 根据依赖自动排序
        chunksSortMode: 'auto'
    })
];

if (minimize) {
    plugins.push(
        /*压缩*/
        new webpack.optimize.UglifyJsPlugin({ // js、css都会压缩
            mangle: {
                except: ['$super', '$', 'exports', 'require', 'module', '_']
            },
            compress: {
                warnings: false
            },
            output: {
                comments: false,
            }
        })
    )
}

var config = {
    entry: entry,
    /*查找loader 的位置*/
    resolveLoader: {root: path.join(__dirname, "node_modules")},
    output: output,
    module: {
        loaders: loaders
    },
    resolve: resolve,
    plugins: plugins
}
/*开启热更新，并自动打开浏览器*/
if (devServer) {
    config = Merge(
        config,
        {
            plugins: [
                //把指定文件夹下的文件复制到指定的目录
                new TransferWebpackPlugin([
                  {from: PATHS.srcPath+'/img/lazy-pic/',to: './'} 
                ]),
                // 全局开启代码热替换
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                }),
                new OpenBrowserPlugin({url: 'http://localhost:8080' + PATHS.publicPath + 'home.html'})
            ],
            devServer: {
                // 启用历史记录
                historyApiFallback: true,
                hot: true,
                inline: true,
                stats: 'errors-only',
                host: "localhost", 
                port: "8080", 
                /*代理访问 可以绕过同源策略 和 webpack '热更新'结合使用*/
                proxy: {
                    '/devApi/*': {
                        target: proxyTarget,
                        secure: true,
                        /* rewrite 的方式扩展性更强，不限制服务的名称*/
                        rewrite: function (req) {
                            req.url = req.url.replace(/^\/devApi/, '');
                        }
                    }
                }
            }
        }
    );
}

module.exports = validate(config);