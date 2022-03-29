import Vue from 'vue';
import App from './App.vue';
import { Button, Radio, Header, Aside, Container, Main, Menu, MenuItem, MenuItemGroup, Submenu, DropdownItem, DropdownMenu, Dropdown, Row, Col, Carousel, CarouselItem, Table, TableColumn, BreadcrumbItem, Breadcrumb, Tag, Form, FormItem, Select, Switch, Input, DatePicker, Option, Dialog, Pagination, Tree, MessageBox, Message, Card } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/less/index.less';

import router from './router/index.js';
import axios from 'axios';
import store from '@/store/index.js';




Vue.config.productionTip = false
Vue.use(Button);
Vue.use(Radio)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Container)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Submenu)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dropdown)
Vue.use(Row)
Vue.use(Col)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Tag)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Switch)
Vue.use(Input)
Vue.use(DatePicker)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Pagination)
Vue.use(Tree)
Vue.use(Card)


Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message




//简易的导航守卫 
router.beforeEach((to,from,next)=>{
  //const token = store.state.user.token;
  // 这里权限的逻辑就是不等于token 并且 值为login
  //用一个伪的全局token被我放弃了 因为每次刷新全局token就没了 于是选择判断本地有没有cookie来设置登录权限
  
  if(document.cookie.indexOf('mycookie')==-1 && to.name!=='login'){
    next({name:'login'})
  }else{
    next()
  }
  
})

//添加一个格式化时间的方法
Date.prototype.Format = function (fmt) { //author: meizz 
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}




Vue.prototype.$http = axios.create({ // 将 axios方法定义到vue的原型上
  baseURL: 'http://127.0.0.1:3000/api' // 基础url，前端发起请求要先拼接上这个地址
})

//http://101.43.252.121:3000/api  
//http://127.0.0.1:3000/api


const app = new Vue({

  router,  //router:router 的简写
  store,
  render: h => h(App)
})
app.$mount('#app');
