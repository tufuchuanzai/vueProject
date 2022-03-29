<template>
  <header>
    <!-- 头部导航栏左半部分元素 -->
    <div class="l-content">
      <el-button icon="el-icon-s-grid" size="mini" @click="change"></el-button>

      <!-- <h3 style="color: black">首页</h3> -->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="item in tags"
          :key="item.path"
          :to="{ path: item.path }"
          >{{ item.label }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <!-- 头部导航栏右半部分元素 -->
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span>
          <img :src="userImg" alt="用户头像" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { EventBus } from "../store/eventBus";
import { mapState } from "vuex";
//data的userImg必须写成require 单独一个url不行
export default {
  data() {
    return {
      userImg: require("@/assets/image/kenan.png"),
      isCollapse1: false,
    };
  },
  methods: {
    change() {
      
      this.isCollapse1 = !this.isCollapse1;

      EventBus.$emit("share", this.isCollapse1);
    },
  },
  computed: {
    ...mapState({
      tags: state => state.tablist,
    }),
  },
};
</script>

<style lang ="less" scoped>
header {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 20px;
  }
}
.r-content {
  img {
    position: relative;
    top: 10px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
  }
}
</style>