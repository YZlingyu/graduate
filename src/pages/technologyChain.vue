<template>
<el-container style="height:100%;">
  <el-header>
    <admin-header></admin-header>
  </el-header>
  <el-container style="height:100%">
    <el-main>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>技术链</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row>
        <el-col :span="16">
          <div class="technologyGraph">
            <h1 class="title">技术链图谱</h1>
            <div id="main"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="list">
            <h1 class="title">相关企业列表</h1>
            <div class="enterpriseList" v-for="item in enterpriseList" :key="item.index">
              <router-link :to="{path: './company', query:{entity:item.comName}}">
                <p class="com-name">{{item.comName}}</p>
                <span class="tag1" v-for="tec in item.technologys.split(',')" :key="tec.id">{{tec}}</span>
              </router-link>
            </div>
            <h1 class="title">相关新闻列表</h1>
            <div class="newsList2" v-for="item in newsList" :key="item.index">
               <router-link :to="{path: './technology', query:{entity:item.title}}">
                <p class="com-name">{{item.title}}</p>
                <p class="news-date">{{item.time}}</p>
              </router-link>
            </div>
          </div>
        </el-col>
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
        enterpriseList: [],
        technologyList: [],
        newsList: []
      }
    },
    methods: {
      getEnterprise(){
        axios.get("http://127.0.0.1:8088/enterpriseTechnologyImport/all/1/1",{
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
           this.enterpriseList = res.data.slice(0,5);
          //  this.technologyList = res.data.technologys.split("，");
            console.log( res.data);
            // console.log(err);
        })
      },
      getNews(){
        axios.get("http://127.0.0.1:8088/news/all/1/1",{
        datatype:'jsonp',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
        }).then(res => {
            this.newsList = res.data.slice(0,5);
            console.log(this.newsList)
        })
      },
    },
    mounted(){
      this.getEnterprise();
      this.getNews();
      let echarts = require('echarts/lib/echarts');
      let myChart = echarts.init(document.getElementById('main'));
      myChart.showLoading();
      axios.get("http://127.0.0.1:8888/database/neo4j/findTechnologyChain",{
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          console.log(res)
          var data = res.data;
            myChart.hideLoading();

        var option = {
            tooltip: {
                trigger: 'item',
                triggerOn: 'mousemove'
            },
            series: [
                {
                    type: 'tree',

                    data: [data],

                    top: '18%',
                    bottom: '14%',

                    layout: 'radial',

                    symbol: 'emptyCircle',

                    symbolSize: 7,

                    initialTreeDepth: 1,

                    animationDurationUpdate: 750

                }
            ]
        }
        myChart.setOption(option);
      })
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
  /* ---graph--- */
  .technologyGraph {
    width: 98%;
    height: 900px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
    padding-top: 10px;
  }
  #main {
    width: 900px;
    height: 900px;
  }
  /* ---list--- */
  .list {
    width: 100%;
    height: 900px;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
    padding: 10px 20px;
    text-align: left;
  }
  .com-name{
    color: dodgerblue;
  }
  .tag1 {
    background-color: #eeeeee;
    border-radius: 5px;
    margin-right: 5px;
    color:#999999;
    padding: 5px;
  }
  .news-date {
    color: #999999;
  }
</style>
