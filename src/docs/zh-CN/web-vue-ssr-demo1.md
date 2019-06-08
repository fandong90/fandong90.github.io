# Vue SSR 搭建

## 什么是服务端渲染SSR

::: warnning
	Vue.js 是构建客户端应用程序的框架。默认情况下，可以在浏览器中输出 Vue 组件，进行生成 DOM 和操作 DOM。然而，也可以将同一个组件渲染为服务器端的 HTML 字符串，将它们直接发送到浏览器，最后将这些静态标记"激活"为客户端上完全可交互的应用程序。

	服务器渲染的 Vue.js 应用程序也可以被认为是"同构"或"通用"，因为应用程序的大部分代码都可以在服务器和客户端上运行。
	----[Vue SSR 指南](https://ssr.vuejs.org/zh/)
:::

## 为什么要SSR

::: warnning
	* 更好的 SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面。
	* 更快的内容到达时间 (time-to-content)，特别是对于缓慢的网络情况或运行缓慢的设备。无需等待所有的 JavaScript 都完成下载并执行，才显示服务器渲染的标记，所以你的用户将会更快速地看到完整渲染的页面。通常可以产生更好的用户体验，并且对于那些「内容到达时间(time-to-content) 与转化率直接相关」的应用程序而言，服务器端渲染 (SSR) 至关重要。
	----来自[Vue SSR 指南](https://ssr.vuejs.org/zh/)
::: 

##  开始搭建（后面有完整实例包下载地址）

:::tip

	 * 给出Vue SSR 没有给出的细节，需要掌握的东西有点多，对于新手上手有些困难。
	 *  express 使用注意点，注意express.static 静态文件的路径地址。
	 *  示例中直接把dist作为服务的静态文件路径地址了。
		 通过vue-server-renderer 生成的json文件
		 vue-ssr-client-manifest.json
		 vue-ssr-server-bundle.json
		 的作用，请仔细参考Vue SSR指南。
	 *  本示例只是简单的搭建，后期会继续完善，敬请期待。
:::

```
	 /*dist/vue-ssr-client-manifest.json*/
	  "publicPath": "",
	  "all": [
	    "main.js" /*静态文件放置的位置*/
	  ],
	  "initial": [
	    "main.js"
	  ],
```

# 不含Ajax 数据请求，即也不包含Vue全家桶

  * 主要工具列表
 
	::: success
		*  Vue@2.x
		*  vue-server-renderer@2.X
		*  webpack@4.x
		*  express@4.x
	:::

  * 思路

	::: success
		* 在nodejs 环境中把vue模板生成 html 字符串，通过express get或者post 请求发送给浏览器。
		* 发送给浏览器是编译OK的html页面，vue组件不可用，没有虚拟的DOM渲染。
		* Vue SSR 中把渲染拆分为两部分，html 在服务端渲染（数据也可以）即*entry-server.js*。
		* Vue 虚拟Dom 通过 *entry-client.js*,在浏览器端建立DOM。
	:::

* 行动

  
  ```
    /*创建一个项目文件夹*/
    
	    mkdir myapp
	    
	    cd myapp
	    
	    npm init 
     
  	 /*安装相信的npm pack*/
  	 
  	 npm install vue vue-server-renderer  vue-router vue-compiler-template --save-dev
  	 
  	 npm install webpack webpack-cli
  	 
  	 ....
  ```
    这个demo中相应的依赖包列表如下,缺少请使用npm install packname 安装。
    
  ```  
	  "dependencies": {
	    "css-loader": "^2.1.1",
	    "express": "^4.17.1",
	    "file-loader": "^4.0.0",
	    "sass-loader": "^7.1.0",
	    "style-loader": "^0.23.1",
	    "vue": "^2.6.10",
	    "vue-loader": "^15.7.0",
	    "vue-router": "^3.0.6",
	    "vue-server-renderer": "^2.6.10",
	    "vue-template-compiler": "^2.6.10",
	    "webpack": "^4.33.0",
	    "webpack-dev-middleware": "^3.7.0",
	    "webpack-merge": "^4.2.1",
	    "webpack-node-externals": "^1.7.2"
	  },
	  "devDependencies": {
	    "webpack-cli": "^3.3.3"
	  }
	  
  ```
   创建的目录结构如下：
   
   ![demo1目录结构图](http://fandong90.github.io/dist/static/img/demo1frame.png)
   
   		*src : 用于编写Vue相关源码位置
   		*build: 用与webpack打包编译，启动nodejs
   		*node_modules: node lib 包默认位置
   		*dist: 打包生成的文件路径
   		/*...*/
   	
   	* 构建Vue 实例
   	
   	```
   		/*src/main.js*/
   		
   		import Vue from 'vue';
		import App from './App.vue';
		
		import  { createRouter } from './Routers/index' ;
		
		export function createApp(){
		    const router = createRouter();
		    const app = new Vue({
		        router,
		        render: h=>h(App)
		    });
		
		    return { app, router };
		}
   	```
   	* 构建路由（最简也可以去掉路由，想了下去掉就没了啥，主要是后面要加上vue全家桶继续构建 ）
   	
   	```
   	   /*src/Routers/index.js*/
   	   
   	    import Vue from 'vue';
		import VueRouter from 'vue-router';
		import Foo from '../Components/foo.vue';
		
		
		Vue.use(VueRouter);
		
		export function createRouter(){
		
		    return new VueRouter({
		        mode:'history',
		        routes:[ { path:'/',component: Foo }]
		    });
		} 
   		
   	```
   	* 构建App.vue

   	```
   	  /*src/App.vue*/
   	  <template>
	    <div>
	        <router-view></router-view>
	    </div>
		</template>
		
		<script>
		export default {
		
		}
		</script>
		
		<style>
		
		</style>
   	```
   	
   * 构建entry-server.js 
   
   ```
   		/*src/entry-server.js
   		 *在node 中运行js，渲染Vue组件（服务端），使用vue-server-renderer 函数 createBundleRenderer 生成html字		 *符串。
   		*/
   		
   		import { createApp } from './main';

		export default context => {
		    // 因为有可能会是异步路由钩子函数或组件，所以我们将返回一个 Promise，
		    // 以便服务器能够等待所有的内容在渲染前，
		    // 就已经准备就绪。
		  return new Promise((resolve, reject) => {
		
		    const { app, router } = createApp();
		
		    // 设置服务器端 router 的位置
		    router.push(context.url)
		
		    // 等到 router 将可能的异步组件和钩子函数解析完
		    router.onReady(() => {
		      const matchedComponents = router.getMatchedComponents()
		      // 匹配不到的路由，执行 reject 函数，并返回 404
		      if (!matchedComponents.length) {
		        return reject({ code: 404 })
		      }
		
		      // Promise 应该 resolve 应用程序实例，以便它可以渲染
		      resolve(app)
		    }, reject)
		  })
		}
		----来自[Vue SSR 指南](https://ssr.vuejs.org/zh/)
   ```
   
   * 构建entry-client.js
   
   ```
   		/*src/entry-client.js 用于浏览器端渲染 */
   		const { app , router } = require('./main').createApp();

       /*不考虑数据问题*/
		router.onReady(() => {
		
		    /**路由准备好挂载 */
		    app.$mount('#app');
		    
		});
		
   ```
   ::: danger
       entry-server.js 和 entry-client.js 
       
       经过entry-server.js 的vue 实例，包括部分数据在服务端渲染，
       页面的交互，虚拟dom的Vue组件有entry-client.js 在浏览器端重建。
       
   :::
   
   * webpack 打包构建
   
   ```
   		/*build/webpack.common.js 
   		* 通用的配置文件
   		*/
   		const path = require('path');
		const VueLoaderPlugin   = require('vue-loader/lib/plugin');
		const rules = require('./webpack.rules');
		module.exports={
		    module:{
		        rules: rules.config
		    },
		    resolve: {
		        extensions: ['.json', '.js', '.jsx','.vue'],
		        alias:{
		            '@': path.resolve(__dirname,'..','src'),
		        }
		    },
		    plugins:[
		        new VueLoaderPlugin()
		    ]
		}
		
		
   		
   ```
   server webpack
   
   ```
     /*build/webpack.server.js*/
     	const path = require('path');
		const merge = require('webpack-merge')
		const baseConfig = require('./webpack.common.js')
		const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
		module.exports = merge(baseConfig, {
		  mode:'development',
		  // 将 entry 指向应用程序的 server entry 文件
		  entry: path.resolve(__dirname,'..','src/entry-server.js'),
		
		  // 这允许 webpack 以 Node 适用方式(Node-appropriate fashion)处理动态导入(dynamic import)，
		  // 并且还会在编译 Vue 组件时，
		  // 告知 `vue-loader` 输送面向服务器代码(server-oriented code)。
		  target: 'node',
		
		  // 对 bundle renderer 提供 source map 支持
		  devtool: 'source-map',
		
		  // 此处告知 server bundle 使用 Node 风格导出模块(Node-style exports)
		  output: {
		    libraryTarget: 'commonjs2'
		  },
		
		  // // https://webpack.js.org/configuration/externals/#function
		  // // https://github.com/liady/webpack-node-externals
		  // // 外置化应用程序依赖模块。可以使服务器构建速度更快，
		  // // 并生成较小的 bundle 文件。
		  // externals: nodeExternals({
		  //   // 不要外置化 webpack 需要处理的依赖模块。
		  //   // 你可以在这里添加更多的文件类型。例如，未处理 *.vue 原始文件，
		  //   // 你还应该将修改 `global`（例如 polyfill）的依赖模块列入白名单
		  //   whitelist: /\.css$/
		  // }),
		
		  // 这是将服务器的整个输出
		  // 构建为单个 JSON 文件的插件。
		  // 默认文件名为 `vue-ssr-server-bundle.json`
		  plugins: [
		    new VueSSRServerPlugin()
		  ]
	});
     ----来自[Vue SSR 指南](https://ssr.vuejs.org/zh/)
   ```
   
   client webpack
   
   ```
   		/*build/webpack.client.js*/
   		const path = require('path');
		const webpack = require('webpack')
		const merge = require('webpack-merge')
		const baseConfig = require('./webpack.common.js')
		const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
		
		module.exports = merge(baseConfig, {
		  entry:  path.resolve(__dirname,'..','src/entry-client.js'),
		  mode:'development',
		  optimization:{
		    splitChunks:{
		      cacheGroups: {
		        commons: {
		            name: "manifest",
		            chunks: "initial",
		            minChunks: 2
		        }
		      }
		    }
		  },
		  plugins: [
		    // 此插件在输出目录中
		    // 生成 `vue-ssr-client-manifest.json`。
		    new VueSSRClientPlugin()
		  ]
		})
   		
   ```
   webpack module.rules 文件
   
   ```
   		/*build/webpack.rules.js*/
   		
   		/** config  webpack moudle.rules loader */
		module.exports={
		  config:[
		    {
		        test: /\.css$/,
		        use: [
		          'style-loader',
		          'css-loader'
		        ]
		      },
		      {
		        test:/\.scss/,
		        use:[
		          {loader:'css-loader'}
		          ,
		          {
		            loader: "sass-loader" // compiles Sass to CSS
		          }
		        ]
		      },
		      {
		         test: /\.(png|svg|jpg|gif)$/,
		         use: [
		           'file-loader'
		         ]
		       },
		       {
		            test: /\.(woff|woff2|eot|ttf|otf)$/,
		            use: [
		              'file-loader'
		            ]
		       },
		       {
		           test:/\.vue$/,
		           loader:'vue-loader'
		       }
		   ]
		};
		
   ```
   express 服务搭建
   
   ```
   		/*build/server.js*/
   		const Express = require('express');
		const app = new Express();
		const { createBundleRenderer } = require('vue-server-renderer')
		const path = require('path');
		const template = require('fs').readFileSync(path.resolve(__dirname,'..','index.template.html'), 'utf-8')
		const serverBundle = require( path.resolve(__dirname,'..','dist/vue-ssr-server-bundle.json'))
		const clientManifest = require(path.resolve(__dirname,'..','dist/vue-ssr-client-manifest.json'))
		const renderer = createBundleRenderer(serverBundle, {
		  template,
		  clientManifest
		})
		
		app.use(Express.static(path.resolve(__dirname,'..','dist')));
		
		// app.use(webpackDevMiddleware(compiler,{
		//     publicPath: config.output.publicPath
		// }));
		
		app.get("*",(req, res)=>{
		    const context = { url: req.url};
		    //console.log(context);
		    renderer.renderToString(context,(err,html)=>{
		        console.log(html);
		        res.end(html);
		    });
		});
		
		app.listen(3000, () => {
		    console.log('App listening on port 3000!');
		});
   		
   ```
   
   启动命令 package.json
   
   ```
    
   		"scripts": {
	    "test": "echo \"Error: no test specified\" && exit 1",
	    "build:server": "webpack --config  ./build/webpack.server.js",
	    "build:client": "webpack --config  ./build/webpack.client.js",
	    "dev": " npm run build:server && npm run build:client && node ./build/server.js"
	   }
	   
	   npm run dev
	   
   ```
   本文完。[demo git](https://github.com/fandong90/VueDemo.git)
   
   	
   	
   	
  
	

