<template>
<el-container style="height:100%;">
  <el-header>
    <admin-header></admin-header>
  </el-header>
  <el-container style="height:100%">
    <el-main>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>注册</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row style="margin-top: 50px;">
        <div class="login">
          <h1 class=title>注册</h1>
          <span class="login-label">用户名</span>
          <el-input v-model="username" placeholder="请输入用户名" class="login-input"></el-input><br>
          <span class="login-label">密码</span>
          <el-input v-model="password1" placeholder="请输入密码" class="login-input" type="password"></el-input><br/>
          <span class="login-label">密码</span>
          <el-input v-model="password2" placeholder="请输入密码" class="login-input" type="password"></el-input><br/>
          <el-button type="primary" class="login-btn">登录</el-button>
          <el-button class="login-btn">取消</el-button>
        </div>
      </el-row>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  import adminHeader from "../components/adminHeader.vue"
  import axios from 'axios'
  export default {
    data() {
      return {
        dialogVisible:true,
        username: '',
        password1: '',
        password2: ''
      }
    },
    methods: {
      handleClose(done) {
        
      }
    },
    mounted(){
      
    },
    components:{
      adminHeader
    }
  }
</script>

<style>
  a {
    text-decoration: none;
    color: #999999;
  }
  /* 布局 */
   .el-header {
    background-color: #545c64;
    color: #333;
    text-align: center;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  /* login */
  .login {
    width: 50%;
    height: 300px;
    padding: 20px;
    margin-top: 50px;
    margin: 20px auto;
    background-color: #ffffff;
  }
  .login-label, .login-input {
    margin-top: 10px;
  }
  .login-input {
    width: 80%;
  }
  .login-label {
    display: inline-block;
    width: 100px;
    text-align: left;
  }
  .login-btn {
    margin-top: 20px;
  }
</style>
