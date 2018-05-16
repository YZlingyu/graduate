<template>
  <div class="container">
    <router-link to="/">
      <img src="../assets/logo.png" class="logo">
    </router-link>
    <el-input placeholder="请输入专家名称、成果名称、技术等，以空格隔开" style="height: 30px;" v-model="input1" class="input-with-select">
      <el-button slot="append" class="search-btn2" style="background-color: dodgerblue;color: #fff;">搜索</el-button>
    </el-input>
    <!--<div class="right">-->
      <router-link to="/question"><span class="find">问一问</span></router-link>
    <!--</div>-->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        input1: ''
      }
    },
    methods: {

    }
  }
</script>

<style>
  .container{
    padding-bottom: 20px;
    border-bottom: 2px solid #ccc;
  }
  a{
    text-decoration: none;
    color: #000000;
  }
  .right{
    width: 300px;
    height: 80px;
    line-height: 80px;
    margin-right: 60px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    float:right;
  }
  .logo{
    width: 60px;
    height: 60px;
    margin: 10px 80px 10px 30px;
    float: left;
  }
  .input-with-select{
    width: 400px;
    margin-left: 50px;
    margin-top: 20px;
  }
  .el-input-group__append{
    background-color: dodgerblue;
    color: #fff;
  }
  .find{
    float:right;
    color:#000;
    line-height: 80px;
    margin-right: 100px;
  }
</style>
