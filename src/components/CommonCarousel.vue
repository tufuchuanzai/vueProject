<template>
  <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="item in pictures" :key="item.name">
      <a :href= item.link target="_blank"><img :src= item.url /> </a>
    </el-carousel-item>
  </el-carousel>
</template>

<script>


export default {
    name:'CommonCarousel',
    data() {
      return {
        pictures:[
        {
          name:'first',
          url:require('@/assets/image/firstPicture.png'),
          link:'https://www.view.sdu.edu.cn/sddxxxfyfkztwz/sddxyqfkgzztwz.htm'

        },
        {
          name:'second',
          url:require('@/assets/image/secondPicture.png'),
          link:'https://www.view.sdu.edu.cn/info/1021/162649.htm'

        },
        {
          name:'three',
          url:require('@/assets/image/threePicture.png'),
          link:'https://www.view.sdu.edu.cn/sddxxxfyfkztwz/sddxyqfkgzztwz.htm'

        },
        {
          name:'four',
          url:require('@/assets/image/fourPicture.png'),
          link:'https://www.view.sdu.edu.cn/sddxxxfyfkztwz/sddxyqfkgzztwz.htm'

        }]


      }
    },
}
</script>


<style lang="less" >

  
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img {
    height: 100%;
    width: 100%;
  }
</style>