<!--  时间组件 -->
<template>
  <div class="clock-time">
    <!-- 时钟特效 -->
    <p class="date">{{ date }}</p>
    <p class="time">{{ time }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: "",
      date: "",
      week: [
        "星期日",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六",
      ],
      timer:""
    };
  },
  mounted() {
    this.updateTime();
    this.init();
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
  methods: {
    init() {
       this.timer = setInterval(this.updateTime, 1000);
    },
    updateTime() {
      var cd = new Date();
      this.time =
        this.zeroPadding(cd.getHours(), 2) +
        ":" +
        this.zeroPadding(cd.getMinutes(), 2) +
        ":" +
        this.zeroPadding(cd.getSeconds(), 2);
      this.date =
        this.zeroPadding(cd.getFullYear(), 4) +
        "-" +
        this.zeroPadding(cd.getMonth() + 1, 2) +
        "-" +
        this.zeroPadding(cd.getDate(), 2) +
        " " +
        this.week[cd.getDay()];
    },
    zeroPadding(num, digit) {
      var zero = "";
      for (var i = 0; i < digit; i++) {
        zero += "0";
      }
      return (zero + num).slice(-digit);
    },
  },
};
</script>

<style lang="less" scoped>
.clock-time {
  color: #000000;
  text-align: center;
  color: #000000;
  p {
    margin: 0;
    padding: 0;
  }
  .time {
    letter-spacing: 0.05em;
    font-size: 60px;
    padding: 5px 0;
  }
  .date {
    letter-spacing: 0.1em;
    font-size: 24px;
  }
}
</style>