<template>
<el-card class="box-card" style="width:400px">
  <div slot="header" class="clearfix">
    <span><h3>公告</h3></span>
  </div>
  <div v-for="item in infor" :key="item.context" class="text item">
    <a :href="item.url" target="_blank">{{item.context}}</a>
  </div>
  
</el-card>
  
</template>
<script>
import information from '@/myData/infor.js';

export default {
  name:"CommonTree",
  data() {
    return {
      infor:information.information,
      

    }
  }
  ,
  methods:{

  },

  
  
}
</script>




<style lang='less' scoped>

  .el-card {
    position:  relative;;
    left: 500px;
    top: 40px;

    
   
    width:100%;
    height: 400px;
    div {
      height: 5px ;
      a {
        width: 100%;

        color: #2c3e50;
        text-decoration: none;
        &:hover {
          color:#f1c40f;
        }
      }
    }
    
  }
  .text {
    margin-top: 10px;
    font-size: 16px;
  }
  .clearfix {
    height:10px;
  }

  .item {
    margin-bottom: 18px;
    float: left;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 400px;
  }
</style>