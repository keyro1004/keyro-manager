<!--   日程组件 -->
<template>
    <div class="calendar-container">
      <div class="schedule-head">
        <div class="today" @click="toToday">回到今天</div>
        <div class="select one">
          <el-select class="select" v-model="yearModel" @change="yearChange" placeholder="">
            <el-option v-for="item in years" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
        <div class="select two">
          <el-select v-model="monthModel" @change="monthChange" placeholder="">
            <el-option v-for="item in months" :key="item.value" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </div>
      </div>
      <div class="weekdays">
        <div class="item" v-for="(item,index) in weekdays" :key="index">{{item}}</div>
      </div>
      <div class="days">
        <div class="days-item" 
          v-for="(item,index) in days" 
          :key="index" 
          @click="daySelect(item)">
          <div class="days-con" v-if="item.year == yyyy && item.month == mm && item.name == dd" :class="item.name == dd ? 'now': ''">
            {{item.name}}
            <div class="circle" v-if="item.content"></div>
          </div>
          <div class="days-con" v-else :class="item.name === currentDay ? 'select': ''">
            {{item.name}}
            <div class="circle" v-if="item.content"></div>
          </div>
        </div>
      </div>
      <div class="schedule-list">
        <div class="title">日程安排</div>
        <div v-if="scheduleList && scheduleList.length" class="schedule">
          <div class="schedule-item">
            <el-timeline>
              <el-timeline-item class="line-item" 
                v-for="(item,index) in scheduleList" 
                :key="index"
                color="#ffffff"
                size="large">
                <div class="time">{{item.time}}</div>
                <div class="circle">
                  <div>{{item.type == 1 ? '会议': ''}}</div>
                </div>
                <div class="content">
                  <div class="name" :title="item.name">{{item.name}}</div>
                  <div class="site">
                    <!-- <img class="icon" src="../assets/img/locate.png"> -->
                    <span>{{item.place}}</span>
                  </div>
                  <div class="people">
                    <div class="txt" @click="openDia(item.people)">查看参与者</div>
                    <div class="num">（共{{item.num}}人）</div>
                  </div>
                </div>
              </el-timeline-item>
            </el-timeline>
          </div>
        </div>
        <div v-else class="no-data">暂无安排！</div>
      </div>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        yyyy: null,
        mm: null,
        dd: null,
        yearModel: null,
        monthModel: null,
        years: [],
        months: [],
        weekdays:['周日','周一','周二','周三','周四','周五','周六'],
        days: [],
        today: null, //今天
        currentDay: null, // 选中天
        scheduleList: [],
        tableDate:[
          {year:2023,month:3,name:2,content:[
            {time:'10:00 - 11:00',type: 1,name:'2会议名称会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议名称会议名称会议名称会议名称会议名称',place:'小会议室',people:'张三、李四、王五',num:'3'},
            {time:'14:00 - 16:00',type: 1,name:'2会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'2会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'17:00 - 18:00',type: 1,name:'21会议名称',place:'小会议室',people:'张三、李四',num:'2'},
          ]},
          {year:2023,month:3,name:5,content:[
            {time:'10:00 - 11:00',type: 1,name:'5会议名称会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议名称会议名称会议名称会议名称会议名称',place:'小会议室',people:'张三、李四、王五',num:'3'},
            {time:'14:00 - 16:00',type: 1,name:'5会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'5会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'5会议名称',place:'小会议室',people:'张三、李四',num:'2'},
          ]},
          {year:2023,month:3,name:14,content:[
            {time:'10:00 - 11:00',type: 1,name:'14会议名称会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议名称会议名称会议名称会议名称会议名称',place:'小会议室',people:'张三、李四、王五',num:'3'},
            {time:'14:00 - 16:00',type: 1,name:'14会议名称',place:'小会议室',people:'张三、张三、李四张三、李四张三、李四张三、李四张三、李四张三、李四李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'14会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'14会议名称',place:'小会议室',people:'张三、李四',num:'2'},
          ]},
          {year:2023,month:3,name:18,content:[
            {time:'10:00 - 11:00',type: 1,name:'15会议名称会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议名称会议名称会议名称会议名称会议名称',place:'小会议室',people:'张三、李四、王五',num:'3'},
            {time:'14:00 - 16:00',type: 1,name:'15会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'15会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'15会议名称',place:'小会议室',people:'张三、李四',num:'2'},
          ]},
          {year:2023,month:3,name:22,content:[
            {time:'10:00 - 11:00',type: 1,name:'22会议名称会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议会议名称会议名称会议名称会议名称会议名称会议名称',place:'小会议室',people:'张三、李四、王五',num:'3'},
            {time:'14:00 - 16:00',type: 1,name:'22会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'22会议名称',place:'小会议室',people:'张三、李四',num:'2'},
            {time:'16:20 - 16:50',type: 1,name:'22会议名称',place:'小会议室',people:'张三、李四',num:'2'},
          ]},
        ]
      }
    },
    mounted() {
      var date = new Date()
      this.yyyy = date.getFullYear()
      this.mm = date.getMonth() + 1
      this.dd = date.getDate()
      this.initDate()
    },
    methods: {
      getList() {
        const params = {
          year: this.yearModel,
          month: this.monthModel
        }
        this.getMonthDayNum(this.yearModel,this.monthModel)
      },
      // 获取当前月的天数、当前月第一天是周几
      getMonthDayNum(year, month) {
        let d = new Date(year, month, 0)
        let day = d.getDate()
        for (let i = 1; i <= day; i++) {
          this.days.push({year:year,month:month,name:i})
        }
        d.setDate(1)
        let weekNum = d.getDay()
        for (let j = 0; j < weekNum; j++) {
          this.days.unshift('')
        }
        this.tableDate.forEach((item) => {
          this.days.forEach((d,i) => {
            if(item.year == this.yearModel && item.month == this.monthModel) {
              if(item.name == d.name) {
                this.days[i].content= item.content
              }
            }
          })
        })
      },
      // 回到今天
      toToday() {
        this.days = []
        this.yearModel = this.yyyy
        this.monthModel = this.mm
        this.today = this.dd
        this.currentDay = null
        // this.scheduleList = []
        this.tableDate.forEach((item) => {
          if(this.yearModel == item.year && this.monthModel == item.month && this.today == item.name) {
            this.scheduleList = item.content
          }
        })
        this.getMonthDayNum(this.yearModel,this.monthModel)
      },
      // 选中天
      daySelect(val) {
        this.currentDay = val.name
        this.scheduleList = val.content
      },
      initDate() {
        this.yearModel = this.yyyy
        this.monthModel = this.mm
        this.today = this.dd
        this.currentDay = null
        this.tableDate.forEach((item) => {
          if(this.yearModel == item.year && this.monthModel == item.month && this.today == item.name) {
            this.scheduleList = item.content
          }
        })
        this.selectYear(this.yearModel)
        this.selectMonth(this.monthModel)
        this.getMonthDayNum(this.yearModel,this.monthModel)
      },
      // 选择年
      yearChange() {
        this.days = []
        this.scheduleList = []
        this.getList()
      },
      // 选择月
      monthChange() {
        this.days = []
        this.scheduleList = []
        this.getList()
      },
      selectYear(year) {
        this.years = []
        for(let i=0;i<30;i++) {
          this.years.push({value:(year+1-i),label:(year+1-i)+'年'})
        }
      },
      selectMonth() {
        this.months = []
        for(let i=1;i<=12;i++){
          this.months.push({value:i,label:i+ "月"});
        }
      },
      openDia(val) {
        this.$alert(val,'查看参与者', {
          confirmButtonText: '关闭',
          callback: action => {
          }
        })
      }
    }
  }
  </script>
  
<style lang="less" scoped>
.el-timeline-item__tail {
  position: absolute;
  border-left: 1*100vw/1920 dashed rgba(242, 141, 73, 1);
}
.calendar-container {
  font-family: SourceHanFont;
  .schedule-head {
    margin-top: 25*100vw/1920;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 14*100vw/1920;
    font-weight: 400;
    .today {
      cursor: pointer;
      color: #3377FF;
      line-height: 20*100vw/1920;
    }
    .select {
      width: 10vw;
      .el-select{
        line-height: 30*100vw/1920;
 
      }
      .one {
        margin-right: 5*100vw/1920;
        .el-input {
          width: 96*100vw/1920;
        }
      }
      .two {
        .el-input {
          width: 80*100vw/1920;
        }
 
      }
    }
  }
  .weekdays {
    display: flex;
    font-size: 14*100vw/1920;
    font-weight: 400;
    color: #6484AB;
    line-height: 19*100vw/1920;
    margin-top: 19*100vw/1920;
    .item {
      width: 77*100vw/1920;
      text-align: center;
    }
  }
  .days {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    .days-item {
      margin: 8*100vw/1920 16px 0;
      font-size: 14*100vw/1920;
      font-weight: 400;
      color: #6484AB;
      position: relative;
      .days-con {
        width: 38px;
        line-height: 38px;
        text-align: center;
        cursor: pointer;
      }
      .now {
          text-align: center;
          width: 36*100vw/1920;
          background: #538FFF;
          border-radius: 30*100vw/1920;
          color: #fff;
          box-sizing: border-box;
          line-height: 34*100vw/1920;
        }
        .select {
          line-height: 34*100vw/1920;
          text-align: center;
          width: 36*100vw/1920;
          border-radius: 30*100vw/1920;
          background: rgba(83, 143, 255, 0.1);
          border: 1*100vw/1920 solid #538FFF;
          box-sizing: border-box;
        }
      .circle {
        position: absolute;
        bottom: 2*100vw/1920;
        left: 45%;
        width: 5*100vw/1920;
        height: 5*100vw/1920;
        background: #F28D49;
        border-radius: 50%;
      }
    }
  }
  .schedule-list {
    height: 325px;
    position: relative;
    .title {
      margin: 20*100vw/1920 0 20*100vw/1920 10*100vw/1920;
      font-size: 16*100vw/1920;
      font-weight: 500;
      color: #3D4966;
      line-height: 14*100vw/1920;
    }
    .schedule {
      max-height: 325px;
      overflow: auto;
      &::-webkit-scrollbar{
        display: none;
      }
    }
    .schedule-item {
      margin: 0 8*100vw/1920 0 139*100vw/1920;
      font-size: 14*100vw/1920;
      font-weight: 400;
      .line-item {
        .time {
          position: absolute;
          left: -120*100vw/1920;
          top: 2*100vw/1920;
          color: #3D4966;
          line-height: 14*100vw/1920;
        }
        .circle {
          position: absolute;
          left: -20*100vw/1920;
          top: 2*100vw/1920;
          text-align: center;
          background: #fff;
          color: #F28D49;
          line-height: 20*100vw/1920;
          z-index: 99;
          div {
            border-radius: 10*100vw/1920;
            width: 50*100vw/1920;
            background: rgba(242, 141, 73, .11);
          }
        }
        .content {
          margin-left: 20*100vw/1920;
          .name {
            width: 255px;
            color: #3D4966;
            line-height: 18*100vw/1920;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
          .site {
            margin: 8*100vw/1920 0 10*100vw/1920;
            color: #6484AB;
            line-height: 18px;
            .icon {
              width: 10*100vw/1920;
              height: 14*100vw/1920;
              margin-right: 6*100vw/1920;
            }
          }
          .people {
            color: #3377FF;
            line-height: 14*100vw/1920;
            display: flex;
            align-items: center;
            cursor: pointer;
            .num {
              margin-left: 10*100vw/1920;
              color: #6484AB;
            }
          }
        }
      }
    }
    .no-data {
      margin: 22*100vw/1920;
      text-align: center;
      // height: 259.2*100vw/1920;
      font-size: 22*100vw/1920;
      
      font-weight: 400;
      color: #CDDAEA;
      line-height: 20*100vw/1920;
    }
  }
}
</style>