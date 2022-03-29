<template>
  <el-menu
    default-active="1-4-1"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#1e272e"
    text-color="#fff"
    active-text-color="#ffd04b"
    
  >
    <el-menu-item>
      <h3>{{ isCollapse ? "后台" : "公寓后台管理" }}</h3>
    </el-menu-item>
    <!-- 一级菜单逻辑 -->
    <el-menu-item
      v-for="item in notChild"
      :index="item.path"
      :key="item.name"
      @click="clickTo(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 二级菜单逻辑 index绑定element的icon -->
    <el-submenu v-for="item in hasChild" :key="item.name">
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group
        v-for="childitem in item.childMenu"
        :key="childitem.name" 
        
      >
        <!-- <i :class="'el-icon-' + item.icon"></i> -->
        <el-menu-item     :index="childitem.path"   @click="clickTo(childitem)">{{
          childitem.name
        }}</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  border: none;

  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
  }
}
</style>

<script >
import { EventBus } from "../store/eventBus";
export default {
  //笔记:优化的思路 让v-for遍历而不是一个个自己添加 这样可以提高可复用性

  data() {
    return {
      isCollapse: false,
      parentMenu: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "/Main",
        },
        {
          path: "/student",
          name: "student",
          label: "学生信息",
          icon: "s-data",
          url: "dataManage/dataManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "s-check",
          url: "userManage/userManage",
        },
        {
          label: "其他",
          icon: "more",
          childMenu: [
            {
              path: "./其他页面1",
              name: "页面1",
              label: "页面1",
              icon: "s-tools",
              url: "other/PageOne",
            },
            {
              path: "./其他页面2",
              name: "页面2",
              label: "页面2",
              icon: "s-tools",
              url: "other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickTo(item) {
      this.$router.push({
        name: item.name,
      });
      this.$store.commit('selectMenu',item);
      
      
    },
  },
  computed: {
    notChild() {
      return this.parentMenu.filter((item) => !item.childMenu);
    },
    hasChild() {
      return this.parentMenu.filter((item) => item.childMenu);
    },

    //笔记:遍历数组中的每个对象是否有childMenu 这样来返回一个相应的数组 方便v-for循环依次渲染dom
  },
  created() {
    EventBus.$on("share", (val) => {
      this.isCollapse = val;
    });
  },
};
</script>


