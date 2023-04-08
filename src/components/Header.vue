<!-- 顶部组件 -->
<template>
  <div class="header-container">
    <div class="l-content">
      <el-button
        style="margin-right: 20px"
        @click="handleMenu()"
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <!--面包屑-->
      <el-breadcrumb separator="/">
        <el-breadcrumb-item
          v-for="tag in tags"
          :key="tag.name"
          :to="{ path: tag.path }"
          :class="activePath == tag.path ? 'active' : ''"
        >
          <span
            @click="handleSelectMenu(tag.path)"
            @dblclick="handleCancelMenu(tag.path)"
            >{{ tag.label }}</span
          >
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown @command="handleDropdown">
        <span class="el-dropdown-link">
          <el-avatar icon="el-icon-user-solid" size="small"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="center">个人中心</el-dropdown-item>
          <el-dropdown-item command="logOut">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header-container {
  padding: 0 20px;
  background-color: #333;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .text {
    color: #fff;
    font-size: 14px;
    margin-left: 10px;
  }
  .l-content {
    display: flex;
    align-items: center;
    // deep 样式穿刺
    /deep/.el-breadcrumb__item {
      .el-breadcrumb__inner {
        font-weight: normal;
        cursor: pointer;
        // el-breadcrumb__inner 并且有 is-link 的样式
        &.is-link {
          color: #666;
        }
      }
    }
    /deep/.active {
      .el-breadcrumb__inner {
        font-weight: normal;
        cursor: pointer;
        // el-breadcrumb__inner 并且有 is-link 的样式
        &.is-link {
          color: #fff !important;
        }
      }
    }
  }
}
</style>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    // 是否展开菜单
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    // 激活对应的菜单
    handleSelectMenu(path) {
      this.$store.commit("selectActivePath", path);
    },
    // 双击关闭对应的菜单
    handleCancelMenu(path) {
      if (path === "/") {
        this.$message("首页无法关闭！");
        return;
      } else {
        var list = this.tabsList;
        var idx = "";
        var isLast = false;
        list.forEach((item, index) => {
          // 获取关闭的页面是在面包屑的第几个
          if (item.path === path) {
            idx = index;
            if (index + 1 == list.length) {
              // 判断是否最后一个面包屑
              isLast = true;
            }
          }
        });
      }
      if (isLast) {
        // 跳转到后一个面包屑
        this.$router.push(list[idx - 1].path);
        // 菜单高亮对应的面包屑
        this.$store.commit("selectActivePath", list[idx - 1].path);
      } else {
        // 跳转到前一个面包屑
        this.$router.push(list[idx + 1].path);
        // 菜单高亮对应的面包屑
        this.$store.commit("selectActivePath", list[idx + 1].path);
      }
      // 移除关闭的面包屑
      this.$store.commit("removeMenu", path);
    },
    // 下拉选择
    handleDropdown(command) {
      if (command === "center") {
        this.$router.push("/center");
      } else if (command === "logOut") {
        this.$router.push("/login");
      }
    },
  },
  computed: {
    // ES6 的是使用方式
    ...mapState({
      tags: (state) => state.tab.tabsList,
      activePath: (state) => state.tab.activePath,
      tabsList: (state) => state.tab.tabsList,
    }),
  },
};
</script>

