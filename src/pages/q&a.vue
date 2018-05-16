<template>
  <div>
    <nav-header></nav-header>
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
    <nav-footer></nav-footer>
  </div>

</template>

<script>
  import navHeader from "../components/header.vue"
  import navFooter from "../components/footer.vue"
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
      navHeader, navFooter
    }
  }
</script>

<style>
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
