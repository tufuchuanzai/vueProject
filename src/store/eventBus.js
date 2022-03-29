import Vue from "vue";

export const EventBus = new Vue()
//超级大坑 我曹 这个 事件总线 我用默认 居然无效  必须对这个总线有个确切的名字 白花了我两个小时重新复习通信语法了！！！