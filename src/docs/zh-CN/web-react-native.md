# React-Navigation  

## 前端架构
### 准备

```
    /*安装组件*/
	npm install --save react-navigation
	
	npm install --save react-native-gesture-handler
	
	/*添加依赖*/
	react-native link react-native-gesture-handler
	
```
### tips
```
	如果是通过react-cli 脚手架打包的工程可能出现安装时缺少依赖，我的根据官网上教程指导，就出现这个问题。
	问题：
	bogon:AwesomeProject fandong$ npm install -g react-navigation
    npm WARN react-navigation@3.8.1 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation@3.8.1 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN @react-navigation/native@3.4.1 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN @react-navigation/native@3.4.1 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN @react-navigation/native@3.4.1 requires a peer of react-native-gesture-handler@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-tabs@1.1.2 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-tabs@1.1.2 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-drawer@1.2.1 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-drawer@1.2.1 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-drawer@1.2.1 requires a peer of react-native-gesture-handler@^1.0.12 but none is installed. You must install peer dependencies yourself.
    npm WARN @react-navigation/core@3.3.1 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-stack@1.3.0 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-stack@1.3.0 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-navigation-stack@1.3.0 requires a peer of react-native-gesture-handler@^1.0.0 but none is installed. You must install peer dependencies yourself.
    npm WARN react-native-screens@1.0.0-alpha.22 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-native-screens@1.0.0-alpha.22 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-native-safe-area-view@0.13.1 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-native-safe-area-view@0.13.1 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-native-tab-view@1.3.4 requires a peer of react@* but none is installed. You must install peer dependencies yourself.
    npm WARN react-native-tab-view@1.3.4 requires a peer of react-native@* but none is installed. You must install peer dependencies yourself.
    提示缺少： react@*
             react-native@*
             react-native-gesture-handler@*
             这可能是由于版本3.X导致的，官网也有相应的提示。
             如：Since react-navigation@3.x depends on the new React.createContext API, which is added in react@16.3.x, we will require react-native@^0.54.x. Also, react-navigation@3.x needs react-native-gesture-handler to work, you will need to make sure that the version of react-native-gesture-handler you are using matches your current react-native version.
   根据提示 npm install --save react@* ,等等即可。
```

### 导航API

```
    basic: 顶部导航条
    createStackNavigator
       uage:
       		 createStackNavigator({
										  Home: {
										    screen: HomeScreen
										  }
										 )
		参数： Home: 自定义对象，
		      screen: 显示的对象，这里我定义了的一个HomeScreen
		     
```
***HomeScreen组件***

```
import React, { Component } from 'react';
import {View, Text,Button, Alert} from 'react-native';
import styles from '../basic/style';
class HomeScreen extends Component {
    static navigationOptions={
        headerTitle:<Text>'uuu'</Text>,
        headerRight:(
            <Button
                onPress={()=>Alert.alert("hehe")}
                title="Info"
                color="blue"
            />
        )
    };
    componentWillMount(){
        //Alert.alert("Will Mount... Home");
    }
    componentWillUnmount(){
        //Alert.alert("Unmount Home");
    }
    render() { 
        return (  
            <View style={styles.container}>
                <Text>Home Screen</Text>
                <Button
                    title="touch me"
                    onPress={()=>this.props.navigation.navigate('Details',{
                        id:'home1',
                        other:'done'
                    })}
                >
                </Button>
                <Button
                title="touch me"
                onPress={()=>this.props.navigation.navigate('ModalScreen',{
                    id:'home1',
                    other:'done'
                })}
            >
            </Button>
            </View>
        );
    }
}
export default HomeScreen;
```
### 导航函数
```
   在React Native 开发中，每个组件props 会引入navigation 这个组件对象，常用的函数有;
   
      navigate(<componentName>,{params/*option*/})
      push(<componentName>,{params/*option*/})
      
      区别： 这个函数使用都能通过this.props.navigation.navigate('Details') 到对应的界面。如果当前的界面就是Details 时，使用navigate 不在出现切换界面的效果，即不会导航。
           push不同，push会把这个Details 继续入栈，想下web 中，访问的网页历史记录。
```

### 传参、添加参数、去参数

```
	 navigate(<componentName>,{params/*option*/})
    push(<componentName>,{params/*option*/})
    第二参数即。
    
    添加参数 setParam(key,value)
    去参数： getParam(key,defaultValue)
    第二个有个默认值需要注意下。

```
### 导航模式

```
 默然是左右切换加载 ，第二种为 modal 即上下加载。
 const AppNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: () => ({
      title: '首页'
    })
  },
  Details:{
    screen:DetailScreen,
    navigationOptions:({navigation})=>{
      return {title: navigation.getParam("id","no-id")};
    }
  },
  ModalScreen:{
      screen:ModalScreen,
      navigationOptions:()=>({
          title:'Modal'
      })
  }
},{
  initialRouteName:"Home",
  mode:'modal',
  //headerMode:'none'
});
const AppContainer=createAppContainer(AppNavigator);
 
```
### 导航的生命周期

::: warnning
	  组件跳转当前界面A，表示A 入栈，会触发 组件的生命周期即 componentWillMount 事件触发，如果从A 切换到B，不会触发A 的

    componentWillUnMount 事件，B的componentWillMount 触发，但是B 切换到A时，B会触发componentWillUnMount。应为A并没有出栈。
:::
### 导航的样式调整
```
   /*自定义导航头*/
	static navigationOptions = {
    headerTitle: <LogoTitle />,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
```

### 其他导航API

```
	createBottomTabNavigator
	：同第一个
	
	createDrawerNavigator
	usage：
			static navigationOptions = {
		    drawerLabel: 'Home',
		    drawerIcon: ({ tintColor }) => (
		      <Image
		        source={require('./chats-icon.png')}
		        style={[styles.icon, {tintColor: tintColor}]}
		      />
		    ),
		  };
	
	createSwitchNavigator
	usage:
			const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
			const AuthStack = createStackNavigator({ SignIn: SignInScreen });
			
			export default createAppContainer(createSwitchNavigator(
			  {
			    AuthLoading: AuthLoadingScreen,
			    App: AppStack,
			    Auth: AuthStack,
			  },
			  {
			    initialRouteName: 'AuthLoading',
			  }
			));
			
			--
			AuthLoadingScreen 中调用：this.props.navigation.navigate(userToken ? 'App' : 'Auth');

```
:::success
    如有不当，尽情指出！，感谢！
    
    [Navigation 官网API地址](https://reactnavigation.org/docs/en/auth-flow.html)

:::






