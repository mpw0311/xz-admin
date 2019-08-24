# 开发手册

## 添加路由

路由是通过后台返回的数据动态生成的，所以，只需要在菜单管理处添加菜单的同时添加组件的路径即可。

组件初始路径默认为`views`目录下。

<br/>


## 添加icon

通过强大的阿里妈妈[iconfont](https://www.iconfont.cn/)平台下载自己喜欢的`icon`。

将下载好的`SVG`文件放到`src/icons/svg`目录下，即可自动生成`icon`。

引入后可直接使用：

```
<svg-icon icon-class="icon的名字"/>
```

同样可以使用[font-awesome](http://fontawesome.dashgame.com/)提供的图标，项目中已经引入

```
<i class="fa fa-address-book"></i>
```

<br/>

## 添加页面

页面统一存放在`src/views`目录下。

页面创建好后，在菜单管理模块添加对应的菜单项，填写组件路径即可动态生成路由。

<br/>

## 第三方插件

第三方插件的引入代码都统一存放在了`src/initial/module.js`文件里，当然，也可以根据自己的喜欢放在任何地方。

<br/>

## 第三方组件

第三方组件统一存放在`src/components`目录下。

<br/>

## 数据过滤器

过滤器统一存放在`src/initial/filter.js`文件里，只需按照该文件里面代码格式在该文件里进行编写即可。

<br/>

## 修改请求地址

请求地址在`public/js/baseUrl.js` 文件内，只需修改这串代码即可。

```
baseURL = 'http://openlan.missiono.cn'	
```