<template>
  <div>
    <router-link to="/">
      <img src="../assets/logo.png" class="logo">
      <span class="name">中关村四方现代服务产业技术创新战略联盟</span>
      <span class="loggout">注销</span>
      <span class="user">杨卓</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style>
 .logo{
    width: 40px;
    height: 40px;
    margin: 10px 10px 10px 30px;
    float: left;
  }
  .name {
    float: left;
    line-height: 60px;
    height: 60px;
    font-size: 18px;
    color: #ffffff;
  }
  .user, .loggout {
    float: right;
    color: #ffffff;
    margin-right: 10px;
    line-height: 60px;
    height: 60px;
    font-size: 18px;
  }
</style>
