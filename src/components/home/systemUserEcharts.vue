<template>
  <el-card class="system-echarts-box">
    <div
      ref="systemEchartsDom"
      :style="{ width: '100%', height: '400px' }"
    ></div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      systemUserList: [
        {
          systemId: "1",
          systemName: "外卖管理系统",
          userNum: "100",
        },
        {
          systemId: "2",
          systemName: "OA办公系统",
          userNum: "300",
        },
        {
          systemId: "3",
          systemName: "CRM管理系统",
          userNum: "50",
        },
        {
          systemId: "4",
          systemName: "个人博客系统",
          userNum: "200",
        },
        {
          systemId: "5",
          systemName: "SaaS商城管理",
          userNum: "20",
        },
      ],
    };
  },
  computed: {},
  methods: {
    drawMiddleChart() {
      //绘制图表方法
      var systemEcharts = this.$echarts.init(this.$refs.systemEchartsDom);
      window.addEventListener("resize", function () {
        systemEcharts.resize();
      });
      var systemUserMap = {};
      systemUserMap.title = {
        text: "应用用户数量",
      };
      systemUserMap.legend = {
        data: ["用户数量"],
      };
      systemUserMap.xAxis = {
        data: this.systemUserList.map((item) => {
          return item["systemName"];
        }),
      };
      systemUserMap.yAxis = {};
      systemUserMap.series = [
        {
          name: "用户数量",
          type: "bar",
          data: this.systemUserList.map((item) => {
            return item["userNum"];
          }),
        },
      ];
      //将图表配置项赋给图表
      systemEcharts.setOption(systemUserMap);
    },
  },
  mounted() {
    this.drawMiddleChart();
  },
};
</script>

<style lang="less" scoped>
</style>