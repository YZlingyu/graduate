<template>
  <div>
    <nav-header></nav-header>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '../techniqueChain' }">技术</el-breadcrumb-item>
      <el-breadcrumb-item>基于深度学习的人脸识别的安全防盗系统</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="position:relative; ">
      <el-col :span="6" style="z-index:0;">
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" class="tab-left">
          <el-tab-pane label="相关实体   " name="first">
            <i class="el-icon-document"></i>
            <span class="title-output">所属标签</span>
            <span class="tag">人脸识别</span>
            <div id="patent-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接成果</span><span class="title-output">5</span><span class="title-output">项</span>
              <div class="output-list">
                <div class="order">1</div>
                <span class="output-word">Maecenas</span>
                <span class="output-word">2016</span>
                <span class="tag">人脸识别</span>
                <p class="output-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
                </p>
              </div>
              <div class="output-list">
                <div class="order">2</div>
                <span class="output-word">Maecenas</span>
                <span class="output-word">2015</span>
                <span class="tag">人脸识别</span>
                <p class="output-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
                </p>
              </div>
              <div class="output-list">
                <div class="order">3</div>
                <span class="output-word">Maecenas</span>
                <span class="output-word">2014</span>
                <span class="tag">图像检测</span>
                <p class="output-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
                </p>
              </div>
              <div class="output-list">
                <div class="order">4</div>
                <span class="output-word">Maecenas</span>
                <span class="output-word">2013</span>
                <span class="tag">图像检测</span>
                <p class="output-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
                </p>
              </div>
            </div>
            <div id="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接机构</span>
              <div class="output-list">
                <span class="output-word">北京邮电大学</span>
                <span class="tag">图像检测</span>
                <span class="tag">人脸识别</span>
                <span class="tag">…</span>
                <p class="output-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
                </p>
              </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="基本信息" name="second">
            <span class="title-output" style="margin-bottom: 20px;">基于深度学习的人脸识别的安全防盗系统</span><br/>
            <span class="title4">专利简介</span>
            <p class="output-detail">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
            </p>
            <span class="title4">发表年份</span>
            <p class="output-detail">2009</p>
          </el-tab-pane>
        </el-tabs>
        <div class="pop-trigger" @click="popOut">
          <i class="el-icon-caret-top"></i>
          <span>数据过多，尝试筛选功能？</span>
        </div>
        <transition name="pop-fade">
          <div style="margin-left: 20px; text-align:center; border: 1px solid #ccc;" v-if="showPop" id="popout">
            <div class="row1 pop-trigger" style="margin:0;" @click="popOut">
              <i class="el-icon-caret-bottom"></i>
              <span>相关实体筛选</span>
            </div>
            <el-form :model="analyze" status-icon ref="analyze" label-width="100px" class="demo-ruleForm">
              <el-form-item prop="pass" style="margin:0;">
                <div class="row2" style="margin:0;">设置分析步长</div>
                <div class="row3" style="margin:0;">
                  <el-radio v-model="analyze.radio" label="1">1</el-radio>
                  <el-radio v-model="analyze.radio" label="2">2</el-radio>
                  <el-radio v-model="analyze.radio" label="3">3</el-radio>
                </div>
              </el-form-item>
              <el-form-item prop="checkPass" style="margin-bottom:0;">
                <div class="row2">设置分析主体</div>
                <div class="row3" style="padding: 0 10px;box-sizing: border-box;">
                  <el-checkbox-group v-model="analyze.checkList" style="background-color: #fff;">
                    <el-checkbox label="专家"></el-checkbox>
                    <el-checkbox label="机构"></el-checkbox>
                    <el-checkbox label="成果"></el-checkbox>
                    <el-checkbox label="专利"></el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-form-item>
              <el-form-item style="margin-bottom: 0;">
                <div class="row3" style="padding-bottom: 20px;">
                  <el-button type="primary" @click="submitForm('analyze')">提交</el-button>
                  <el-button @click="resetForm('analyze')">重置</el-button>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </transition>

      </el-col>
      <el-col :span="18" style="position: relative;">
        <force-graph></force-graph>
        <i class="el-icon-back" @click="showRightPop" v-if="showRight==false"></i>
        <div class="pop-right" v-if="showRight==false">查看分布图</div>
        <i class="el-icon-arrow-right el-icon-arrow-right1" @click="showRightPop" v-if="showRight==true"></i>
        <transition name="slide-fade">
          <right-nav v-if="showRight"></right-nav>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import navHeader from "../components/header.vue"
  import forceGraph from "../components/forceGraph3.vue"
  import rightNav from "../components/rightNav.vue"
  export default {
    data() {
      return {
        activeName2: 'first',
        analyze:{
          radio: '1',
          checkList: []
        },
        showPop: false,
        showRight: false
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      popOut(){
        this.showPop = !this.showPop;
      },
      showRightPop(){
        this.showRight= !this.showRight;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components:{
      navHeader, forceGraph, rightNav
    }
  }
</script>

<style>
  .bread{
    margin: 20px 40px;
  }
  .tab-left{
    height: 550px;
    margin-left: 20px;
    border: 1px solid #e4e7ed;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .el-tab-pane{
    height: 470px;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .title-output{
    font-weight: bold;
    margin: 10px 0 20px 0;
    color: darkblue;
  }
  .output-list{
    margin-top: 10px;
  }
  .tag{
    background-color: #CCEEFF;
    padding: 3px;
    border-radius: 5px;
  }
  .order{
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    display: inline-block;
    border-radius: 100px;
    background-color: dodgerblue;
    color: #ffffff;
    margin-right: 10px;
  }
  .output-word{
    margin-right: 15px;
  }
  .output-des{
    font-size: 16px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin-top: 5px;
  }
  .pop-trigger{
    margin-left: 20px;
    background-color: #84D0FF;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
  .pop-right{
    width: 15px;
    background-color: #ccc;
    padding: 5px;
    position: absolute;
    right: 0;
    top: 200px;
  }
  .el-icon-back{
    position: absolute;
    right: 25px;
    top: 250px;
  }
  .title4{
    font-weight: bold;
  }
  .output-detail{
    font-size: 14px;
  }
  /*---弹出框---*/
  .el-form-item__content{
    margin: 0 !important;
  }
  .row2{
    background-color: #CCEEFF;
    height: 70px;
    line-height: 70px;
  }
  .row3{
    background-color: #ffffff;
  }
  .pop{
    display: none;
  }
  #popout{
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 200;
    width: 338px;
  }
  .show2{
    display: none;
  }
  .el-icon-arrow-right1{
    position: absolute;
    top: 250px;
    right: 250px;
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  .pop-fade-enter-active {
    transition: all .3s ease;
  }
  .pop-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .pop-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateY(10px);
    opacity: 0;
  }
</style>
