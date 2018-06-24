<template>
  <div>
    <router-link to="/">
      <img src="../assets/logo.png" class="logo">
      <span class="name">中关村四方现代服务产业技术创新战略联盟</span>
      <div style="position: relative; float:right; width: 100px;">
      <router-link to="../login"><span class="user" v-if="$store.state.isLogin === false">登录</span></router-link>
        <router-link to="./admin"><span class="user" v-if="$store.state.isLogin === true" @click="showLogout">杨卓</span></router-link>
        <span class="logout" v-if="log" @click="logout($store.state)">注销</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  import store from '@/store/user' 
  import { mapState, mapMutations } from 'vuex';
  export default {
    data() {
      return {
        log: false
      }
    },
    computed: {
      ...mapState([
        'username',
        'password',
        'isLogin'
      ])
    },
    methods: {
      showLogout() {
        this.log = !this.log;
      },
      ...mapMutations([  
        'logout'  
      ]),
    },   
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
  .logout {
    background-color: #545c64;
    font-size: 18px;
    color: #ffffff;
    position: absolute;
    top: 50px;
    right: 2px;
    padding: 10px;
  }
</style>
