# React Native -IOS 开发环境搭建

## web架构（基础）
### 安装依赖
	* 
	必须安装的依赖有：Node、Watchman 和 React Native 命令行工具以及 Xcode。
### npm 镜像
```
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

### Yarn、React Native 的命令行工具（react-native-cli）
```
npm install -g yarn react-native-cli
* param: -g : 表示全局安装使用
```
### yarn 镜像
```
yarn config set registry https://registry.npm.taobao.org --global
yarn config set disturl https://npm.taobao.org/dist --global
```
### 创建项目
```
react-native init AwesomeProject

```
### 运行项目
```
cd AwesomeProject
react-native run-ios

```
### tips
```
   这样启动很可能遇到问题，我遇到的问题是 IOS 模拟器启动了，但是未启动,需要对照xcode commandline tool ，
   
```

### 解决办法

```
	 npm install
	 根据提示，会让你安装对应的 xcode command line.
	 然后编译项目，在启动即可。
```	

### Hot reloading
```
    热加载，在编辑的时候就可看出，改变。
    
```
::: warnning
[调试自动刷新](https://reactnative.cn/docs/debugging.html#自动刷新)

[React Native 官网文档](https://reactnative.cn/docs/getting-started/) 
:::
### 部署打包

::: tip
   IOS  上还需要申请，暂时没有做，应为要RMB。
:::