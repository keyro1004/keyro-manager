<!--  登录人卡片信息  -->
<template>
  <!-- 登录人信息 -->
  <el-card class="login-box-card">
    <div slot="header" class="login-content">
      <!-- 登录人头像 -->
      <el-avatar
        shape="circle"
        :size="150"
        fit="fill"
        :src="userInfo.userIcon"
      ></el-avatar>
      <!-- 登录人姓名，角色-->
      <div class="logon-name-role">
        <div class="logon-name-text">{{ userInfo.userName }}</div>
        <el-tag size="small" v-for="role in userInfo.roleList" :key="role">{{
          role
        }}</el-tag>
      </div>
    </div>
    <!-- 上次登录时间地点 -->
    <el-descriptions class="margin-top" :column="1" size="medium">
      <el-descriptions-item label="上次登录时间">{{
        userInfo.lastLoginTime
      }}</el-descriptions-item>
      <el-descriptions-item label="上次登录地址">{{
        userInfo.lastAddress
      }}</el-descriptions-item>
      <el-descriptions-item label="上次登录IP">{{
        userInfo.lastLoginIP
      }}</el-descriptions-item>
    </el-descriptions>
  </el-card>
</template>

<style lang="less" scoped>
.login-box-card {
  height: 390px;
  .login-content {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .logon-name-role {
      padding-left: 20px;
      .logon-name-text {
        font-weight: bolder;
        font-size: 24px;
        line-height: 55px;
      }
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      AvatarSize: 150,
      userInfo: {
        userName: "曾健朗",
        userIcon: "",
        lastLoginTime: "2023-03-16",
        lastAddress: "广州",
        lastLoginIP: "192.168.1.1",
        roleList: ["超级管理员", "后台管理员"],
      },
    };
  },
};
</script>

