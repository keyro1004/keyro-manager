<template>
  <div>
    <el-row :gutter="40">
      <el-col :span="16">
        <div class="l-grid-content">
          <el-row :gutter="40">
            <el-col :span="12">
              <!-- 登录人信息 -->
              <login-box-card />
            </el-col>
            <el-col :span="12">
              <!-- 应用入口 -->
              <system-list />
            </el-col>
          </el-row>
          <div class="game-rank">
            <!-- 应用人员图表 -->
            <system-user-echarts />
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <el-card>
          <!-- 时间 -->
          <clock-time />
          <!-- 日程 -->
          <calendar-schedule />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="less" scoped>
.l-grid-content {
  .game-rank {
    margin-top: 40px;
  }
}
.r-grid-content {
  .clock-time {
    height: 100px;
  }
}
</style>

<script>
import LoginBoxCard from "@/components/home/LoginBoxCard.vue";
import ClockTime from "@/components/home/ClockTime.vue";
import CalendarSchedule from "@/components/home/CalendarSchedule.vue";
import SystemList from "@/components/home/SystemList.vue";
import systemUserEcharts from "@/components/home/systemUserEcharts.vue";
export default {
  data() {
    return {};
  },
  // 组件
  components: {
    LoginBoxCard,
    ClockTime,
    CalendarSchedule,
    SystemList,
    systemUserEcharts,
  },
  // 计算属性
  computed: {},
};
</script>