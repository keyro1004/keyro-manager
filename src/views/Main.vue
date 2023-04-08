<template>
  <div>
    <el-container>
      <el-aside width="auto">
        <commons-aside />
      </el-aside>
      <el-container>
        <el-header>
          <commons-header />
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import CommonsAside from "../components/Aside.vue";
import CommonsHeader from "../components/Header.vue";
export default {
  data() {
    return {};
  },
  components: {
    CommonsAside,
    CommonsHeader,
  },
};
</script>

<style scoped>
.el-header {
  padding: 0;
}
.el-menu {
  border-right: none;
}
</style>