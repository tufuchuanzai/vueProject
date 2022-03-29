<template>
  <div id="MyEcharts">
    <h3>上周本楼用电统计</h3>
    <div ref="chart2" class="container"></div>
    
  </div>
</template>

<script>
import echarts from "echarts";

export default {
  name: "MyEcharts",
  methods: {
    getcharts() {
      console.log(this.$refs.chart2);

      let myChart = echarts.init(this.$refs.chart2);
      let option3 = {
        tooltip : {
            trigger : 'axis',
            showDelay : 0, // 显示延迟，添加显示延迟可以避免频繁切换，单位ms
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
       
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [300, 200, 150, 80, 200, 610, 530],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(220, 220, 220, 0.8)",
            },
          },
        ],
      };

      myChart.setOption(option3);
    },
  },
  mounted() {
    this.getcharts();
  },
};
</script>

<style scoped>
#MyEcharts {
  position: absolute;
  top:174px;
  left:0px;
  
  width: 800px;
}
.container {
  width:600px;
  height:400px;
  background-color: #efefef;
  
}
h3 {
  position: relative;
  top: 100px;
  right: 90px;
  z-index: 99;
}
</style>
