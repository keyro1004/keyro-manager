<!-- 应用列表 -->
<template>
  <el-card
    class="system-list-box"
    :body-style="{ height: '292px', overflow: 'auto' }"
  >
    <div slot="header" class="clearfix">
      <span>应用列表</span>
    </div>
    <div
      v-for="(itemGroup, index) in systemListGroup"
      :key="index"
      class="system-item-row"
    >
      <div v-for="(item, idx) in itemGroup" :key="idx">
        <div class="block" @click="handleOpenSystem(item)">
          <el-avatar shape="square" :size="100" :src="item.url"></el-avatar>
          <span class="title" :title="item.name">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      systemList: [
        {
          url: "",
          name: "外卖管理系统",
          systemId: "1",
        },
        {
          url: "",
          name: "OA办公系统",
          systemId: "2",
        },
        {
          url: "",
          name: "CRM管理系统",
          systemId: "3",
        },
        {
          url: "",
          name: "个人博客系统",
          systemId: "4",
        },
        {
          url: "",
          name: "SaaS商城管理",
          systemId: "5",
        }
      ],
    };
  },
  //计算属性
  computed: {
    //对应用进行 4 * 4的分组
    systemListGroup() {
      if (this.systemList.length <= 4) {
        return this.systemList;
      } else {
        var newSystemListGroup = [];
        for (
          var index = 0;
          index < parseInt(this.systemList.length / 4);
          index++
        ) {
          newSystemListGroup.push(
            this.systemList.slice(index * 4, (index + 1) * 4)
          );
        }
        var lastList = parseInt(this.systemList.length % 4);
        if (lastList != 0) {
          newSystemListGroup.push(
            this.systemList.slice(
              newSystemListGroup.length * 4,
              this.systemList.length
            )
          );
        }
        return newSystemListGroup;
      }
    },
  },
  methods: {
    handleOpenSystem(item) {
      this.$alert("【" + item.name + "】请耐心等待开发", "暂无开发", {
        confirmButtonText: "确定",
        callback: (action) => {},
      });
    },
  },
};
</script>

<style lang="less" scoped>
.system-list-box {
  /deep/ .el-card__body::-webkit-scrollbar {
    display: none;
  }
  .system-item-row {
    display: flex;
    justify-content: flex-start;
    .title {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
  }

  .el-card__header {
    border-bottom: none;
  }
  .block {
    display: grid;
    text-align: center;
    padding: 10px;
    cursor: pointer;
  }
}
</style>