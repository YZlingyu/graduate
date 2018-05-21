<template>
  <el-container style="height:100%;">
    <el-header>
      <admin-header></admin-header>
    </el-header>
    <el-container style="height:100%">
      <el-main>
        <div class="container">
          <h1 class="question_title">请输入您要提问的内容</h1>
          <el-input
            type="textarea"
            :rows="5"
            placeholder="请输入内容"
            v-model="textarea1" class="questions">
          </el-input><br/>
          <el-button type="primary" class="submit_question">提交问题</el-button>

          <div class="search_block">
            <el-row style="margin-bottom: 10px;">
              <el-col :span="8">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>企业查询</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>技术查询</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>

              <el-col :span="8">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>自然人查询</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>智力成果查询</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>热点新闻查询</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>
              <el-col :span="8">
                <el-card class="box-card">
                  <div slot="header" class="clearfix">
                    <span>查询历史</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </div>
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
        textarea1: ''
      }
    },
    methods: {

    },
    created(){
    },
    mounted(){

    },
    watch: {

    },
    components:{
      adminHeader
    }
  }
</script>

<style>
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
  .container{
    text-align:center;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  .questions{
    width: 80%;
    margin: 10px auto;
  }
  .submit_question{
    margin: 10px auto;
  }
  .search_block{
    width: 80%;
    margin: 0 auto;
  }
  .box-card{
    width: 100% !important;
  }
</style>
