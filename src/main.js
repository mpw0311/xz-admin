import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入浏览器数据库模块
import Database from './plugins/database/database'
// 引入二次封装的axios模块
import Http from './plugins/http/http'
// 引入全局提示魔窟家
import Message from './plugins/message/message'
// 引入element-ui框架
import ElementUI from 'element-ui'
// 引入iview框架
import iview from 'iview'
// 引入jquery
import Jquery from 'jquery'
// 引入全局样式
import './global/style.css'
import './global/icon_font/iconfont.css'
import './plugins/iconfont/iconfont'
import 'element-ui/lib/theme-chalk/index.css';
import 'iview/dist/styles/iview.css';
import '@riophae/vue-treeselect/dist/vue-treeselect.css'
// 引入树状选择器
import Treeselect from '@riophae/vue-treeselect'
// 引入时间格式化函数
import Date from './plugins/other/form_date'
// 引入设置样式函数
import SetStyle from './plugins/dom/set_style'
// 引入全屏函数
import FullScreen from './plugins/other/full_screen'
// 引入设置元素类模块
import SetClass from './plugins/dom/set_class'
// 引入存储模块
import Memory from './plugins/storage/storage'
// 引入图片读取模块
import ReadImg from './plugins/dom/get_file_image'

Vue.prototype.$$ = Jquery 
/**
 * 连接数据库
 * @param {String} databaseName 数据库名称
 * @returns {Promise}
 */
Vue.prototype.$connectDatabase = Database.connectDatabase
/**
 * 创建表格
 * @param {String} tableName 表名
 * @param {Object} options 参数
 */
Vue.prototype.$createTable = Database.createTable
/**
 * 添加数据
 * @param {String} tableName 表名
 * @param {Object} data 插入的数据
 * @returns {Promise}
 */
Vue.prototype.$insert = Database.insert
/**
 * 查找数据
 * @param {String} tableName 表名
 * @param {Number} id 数据id
 * @returns {Promise}
 */
Vue.prototype.$update = Database.find
/**
 * 修改数据
 * @param {String} tableName 表名
 * @param {Number} id 数据id
 * @param {Number} data 修改数据
 * @returns {Promise}
 */
Vue.prototype.$find = Database.update
/**
 * 添加axios实例
 * 1. 键值对数据请求
 * 2. json数据请求
 * 3. 文件数据请求
 */
Vue.prototype.$http_normal = Http.http_normal
Vue.prototype.$http_json = Http.http_json
Vue.prototype.$http_file = Http.http_file
/**
 * 引入全局提示
 * @param {String} msg 成功提示
 */
Vue.prototype.$successMsg = Message.successMsg
Vue.prototype.$warnMsg = Message.warnMsg
Vue.prototype.$errorMsg = Message.errorMsg
/**
 * 引入全局弹框
 */
Vue.prototype.$showMsgBox = Message.showMsgBox
/**
 * 引入时间格式化函数
 * @param {String | Date} date 日期格式化
 */
Vue.prototype.$formDate = Date.formDate
/**
 * 日期差(date_2 - date_1)
 * @param {String | Date} date_1
 * @param {String | Date} date_2
 */
Vue.prototype.$dateDiff = Date.dateDiff
/**
 * 给元素设置样式
 * @param {DOM Object} ele DOM元素
 * @param {String} ruleName CSS属性
 * @param {String} value CSS值
 */
Vue.prototype.$setStyle = SetStyle.setStyle
/**
 * 设置全屏函数与取消全屏函数
 * @param {DOM Object} element DOM元素
 */
Vue.prototype.$setFullScreen = FullScreen.requestFullScreen
Vue.prototype.$cancelFullScreen = FullScreen.cancelFullScreen
/**
 * 添加与删除类
 * @param {DOM Object} element DOM元素
 * @param {String} className DOM元素
 */
Vue.prototype.$addClass = SetClass.addClass
Vue.prototype.$removeClass = SetClass.removeClass
/**
 * 获取类名
 * @param {DOM Object} element DOM元素
 */
Vue.prototype.$getClassName = SetClass.getClassName
/**
 * 设置存储值
 * @param {String} key 存储键
 * @param {String | Object | Number | Boolean} value 存储值
 */
Vue.prototype.$setMemorySes = Memory.setMemorySes
Vue.prototype.$setMemoryPmt = Memory.setMemoryPmt
/**
 * 获取存储值
 * @param {String} key 存储值
 * @return {String | Object | Number | Boolean} 返回值
 */
Vue.prototype.$getMemorySes = Memory.getMemorySes
Vue.prototype.$getMemoryPmt = Memory.getMemoryPmt
/**
 * @returns {Promise}
 */
Vue.prototype.$getImgFile = ReadImg.getImgFile
// 加入element-ui组件
Vue.use(ElementUI);
// 引入iview组件
Vue.use(iview)
// 引入树状选择器组件
Vue.component('treeselect', Treeselect)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')