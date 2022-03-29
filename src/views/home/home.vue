<template>
  <el-row :gutter="20" class="home" id="all">
    <el-row id="box1">
      <el-col :span="10">
        <el-card id="box2" shadow="hover">
          <div class="user">
            <img src="@/assets/image/kenan.png" />
            <div class="userinfo">
              <p class="name">魏振川</p>
              <p class="acess">管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>
              上次登陆的时间:<span>{{ oldtime }}</span>
            </p>
            <p>
              本次登陆的时间:<span>{{ newtime }}</span>
            </p>
            <p>上次登陆的地点:<span>山东济南</span></p>
          </div>
        </el-card>
      </el-col>
      <el-row>
         <el-col :span="11" id="box3">
        <common-carousel></common-carousel>
        <common-tree></common-tree>
        <common-echarts1></common-echarts1>
        
       
        
      </el-col>
      <el-col :span="11" id="box4">
         <common-echarts></common-echarts>
         
       
        
      </el-col>

      </el-row>
     

    </el-row>
  </el-row>
</template>

<script>
import CommonCarousel from "@/components/CommonCarousel.vue";
import CommonTree from "@/components/CommonTree.vue";
import SecondTree from "@/components/SecondTree.vue";
import MyEcharts from "@/components/Echarts.vue";

export default {
  name: "Home",
  data() {
    return {
      newtime: "",
      oldtime: "1",
    };
  },
  components: {
    "common-carousel": CommonCarousel,
    "common-tree": CommonTree,
    "common-echarts":MyEcharts,
    "common-echarts1":SecondTree,

  },
  methods: {
    getTime() {
      let newtime1 = new Date().Format("yyyy-MM-dd hh:mm:ss.S");
      this.newtime = newtime1;

      this.$http
        .get(`/time`, {
          params: {
            newtime: newtime1,
          },
        })
        .then((res) => {
          if (res.status == 200) {
           
            this.settime(res.data[0].time);
          } else {
            alert("获取时间失败");
          }
        });
    },
    settime(oldtim) {
      this.oldtime = oldtim;
    },
  },

  created() {
    this.getTime();
  },
};
</script>


<style lang = "less" scoped>
#padder {
  padding: 5px;
}
#box1 {
  width: 100%;
  height: 100%;
  
  #box3 {
    height: 580px;
    
    width: 55%;
    position: relative;
    top: 0px;
    .common-carousel {
      width: 500px;
      height: 500px;
    }
  }
  #box2 {
    position: relative;
    left: 50px;
    width: 500px;
    height: 300px;
    .user {
      height: 150px;

      .userinfo {
        height: 100px;

        p {
          position: relative;
          bottom: 30px;

          height: 40px;
        }
      }
    }
    .login-info {
      height: 150px;
    }
  }
}

#all {
  width: 100%;
  height: 100%;
  background-color: #efefef;
  
}
.common-carousel {
  position: absolute;
  top:400px;
}
</style>
