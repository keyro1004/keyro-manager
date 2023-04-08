<!-- 侧边栏组件 -->
<template>
  <el-menu
    :default-active="activePath()"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3>{{ isCollapse ? "后台" : "通用后台管理系统" }}</h3>

    <!--使用计算属性分开 有子菜单和没子菜单-->

    <el-menu-item
      v-for="item in noChildren"
      :key="item.name"
      :index="item.path"
      :idx="item.path"
      @click="clickMenu(item)"
    >
      <i :class="`el-icon-${item.icon}`"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu
      v-for="item in hasChildren"
      :key="item.label"
      :index="item.label"
    >
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item
        v-for="childItem in item.children"
        :key="childItem.name"
        :index="childItem.path"
        @click="clickMenu(childItem)"
        >{{ childItem.label }}</el-menu-item
      >
    </el-submenu>

    <!--对原本菜单进行循环-->
    <!-- <div v-for="item in menuData" :key="item.name">
      <el-menu-item  v-if="!item.children" :index="item.name"  @click="clickMenu(item)" >
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{ item.label }}</span>
      </el-menu-item>
      <el-submenu v-if="item.children" :index="item.label">
        <template slot="title">
          <i :class="`el-icon-${item.icon}`"></i>
          <span slot="title">{{ item.label }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="childItem in item.children"
            :key="childItem.name"
            :index="childItem.name"
            @click="clickMenu(childItem)"
            >{{ childItem.label }}</el-menu-item
          >
        </el-menu-item-group>
      </el-submenu>
    </div> -->
  </el-menu>
</template>

<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100vh;
  h3 {
    color: #fff;
    text-align: center;
    line-height: 48px;
    font-size: 16px;
    font-weight: 400;
  }
}
</style>

<script>
import { mapState } from "vuex";
import { getMenuList } from '@/api/menu'
export default {
  data() {
    return {
      menuData: [],
    };
  },
  mounted(){
    //请求获取当前人员拥有的菜单
    getMenuList().then((data)=>{
      this.menuData == data;
    })
  },
  methods: {
    ...mapState({
      activePath: (state) => state.tab.activePath,
    }),
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      console.log(item);
      //当页面路由与当前跳转路由不一致才进行跳转
      if (
        this.$route.path !== item.path &&
        !(this.$route.path === "/home" && item.path === "/")
      ) {
        // 点击跳转时，增加vuex的面包屑数据
        this.$store.commit("selectMenu", item);

        this.$router.push(item.path);
      }
    },
  },
  //计算属性
  computed: {
    //有子菜单
    noChildren() {
      return this.menuData.filter((item) => !item.children);
    },
    //没有子菜单
    hasChildren() {
      return this.menuData.filter((item) => item.children);
    },
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>