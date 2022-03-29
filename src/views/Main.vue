<template>
  <el-container style="height:100%">

  <el-aside width="auto">
    <common-aside></common-aside>
  </el-aside>
  
  <el-container>
    <el-header>
      <common-header></common-header>
    </el-header>
    <common-tag/>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>


</el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
import CommonTag from '../components/CommonTag.vue'


export default {
    name:'Main',
     components:{
      CommonAside,
      CommonHeader,
      CommonTag
    

    },
    
    

}
</script>


<style lang ="less" scoped>

  .el-header, .el-footer {
    background-color: #ecf0f1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }

</style>