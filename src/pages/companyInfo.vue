<template>
<el-container style="height:100%;">
  <el-header>
    <admin-header></admin-header>
  </el-header>
  <el-container style="height:100%">
    <el-aside width="200px" height="100%">
       <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height: 100%">
        <el-menu-item index="1" @click="show=1">
          <i class="el-icon-setting"></i>
          <span slot="title">关系图谱</span>
        </el-menu-item>
        <el-menu-item index="2" @click="show=2">
          <i class="el-icon-menu"></i>
          <span slot="title">相关分析</span>
        </el-menu-item>
        <el-menu-item index="3" @click="show=3">
          <i class="el-icon-setting"></i>
          <span slot="title">新闻视角</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>企业</el-breadcrumb-item>
        <el-breadcrumb-item>{{entity}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row v-show="show === 1">
        <el-col :span="16">
          <div class="card">
            <h1 class="title">企业关系图谱</h1>
            <div id="main"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card basic-info">
            <h1 class="title">企业信息</h1>
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" class="tab-left">
          <el-tab-pane label="相关实体   " name="first">
            <div class="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接机构</span><span class="title-output">{{enterpriseList.length}}</span><span class="title-output">所</span>
              <div class="output-list" v-for="(item, index) in enterpriseList" :key="item.id">
                <router-link :to="{path: 'company', query:{entity:item.name}}">
                  <div class="order">{{ index+1 }}</div>
                  <span class="output-word">{{item.name}}</span>
                  <span class="tag" v-if="item.no">{{item.no}}</span>
                </router-link>
              </div>
            </div>
            <div class="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接技术</span><span class="title-output">{{technologyList.length}}</span><span class="title-output">个</span>
              <div class="output-list" v-for="(item, index) in technologyList" :key="item.id">
                <router-link :to="{path: 'technolopgy', query:{entity:item}}">
                  <div class="order">{{ index+1 }}</div>
                  <span class="output-word">{{item}}</span>
                </router-link>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="基本信息" name="second">
            <el-row>
              <el-col :span="7">
                <img src="../assets/404.png" class="person">
              </el-col>
              <el-col :span="17">
                <span class="title-output">{{entity}}</span><br/>
                <span v-for="label in enterpriseRange" :key="label.index">{{label}}&nbsp;&nbsp;</span><br/>
                <span v-if="enterpriseDetail">{{enterpriseDetail.address}}</span><br/>
                <span v-if="enterpriseDetail">{{enterpriseDetail.website}}</span><br/>
              </el-col>
            </el-row>
            <p class="output-detail">北京蓦然认知科技有限公司简称“蓦然认知”，成立于2016年5月5号，总部位于北京市海淀区清华科技园。蓦然认知是一家专注于认知计算，自然语言理解技术的初创公司，对外提供人机协作，智能对话整体解决方案，是国内唯一家能够全语音完成复杂任务的决策引擎。</p>
          </el-tab-pane>
          <el-tab-pane label="新闻" name="third">
            <span class="title-output">新闻</span><span class="title-output">{{newsList.length}}</span><span class="title-output">条</span>
            <timeline>
              <timeline-item color="dodgerblue" v-for="item in newsList" :key="item.index">
                <div class="news_title">{{item.title}}</div><br/>
                <div class="news_time">{{item.time}}</div><br/>
                <div class="news_detail">{{item.abs}}</div>
              </timeline-item>
            </timeline>
          </el-tab-pane>
        </el-tabs>
          </div>
        </el-col>
      </el-row>
      <el-row v-show="show === 2">
        <div class="draw-canvas">
          <h1>企业技术领域贡献</h1>
          <div id="radar"></div>
        </div>
        <div class="draw-canvas">
          <h1>企业领域成果输出量</h1>
          <div id="bar"></div>
        </div>
      </el-row>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
  import adminHeader from "../components/adminHeader.vue"
  import forceGraph from "../components/forceGraph4.vue"
  import rightNav from "../components/rightNav.vue"
  import axios from 'axios'
  import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
  export default {
    data() {
      return {
        show: 1,
        activeName: 'first',
        enterpriseList: [],
        enterpriseDetail: '',
        enterpriseRange: '',
        technologyList: [],
        technologyLength: '',
        newsList: [],
        entity: '',
        absList: [],
        nodes: [],
        edges: [],
        treeData: {}
      }
    },
    methods: {
      handleClick(tab, event) {
        // console.log(tab, event);
      },
      popOut(){
        this.showPop = !this.showPop;
      },
      showRightPop(){
        this.showRight= !this.showRight;
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      getCompanies(e){
        axios.get("http://127.0.0.1:8888/database/neo4j/findCompanyByCompany",{
          params:{
            company : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res){
            this.enterpriseList = res.data;
          }
          else{
            console.log(err);
          }
        })
      },
      getNews(e){
        axios.get("http://127.0.0.1:8088/news/nerNames",{
          params:{
            nerNames : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res) {
            this.newsList = res.data;
          }
          else {
            console.log(err);
          }
        })
      },
      getCompanyDetail(e){
        axios.get("http://127.0.0.1:8088/enterpriseBaseImport/comName",{
          params:{
            enterprise: e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res.data[0]){
            this.enterpriseDetail = res.data[0];
            this.enterpriseRange = res.data[0].opeRange.split("，");
          }
        })
      },
      getAbsImport(e){
        axios.get("http://127.0.0.1:8088/absImport/toName",{
          params:{
            name: e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res.data[0]){
            this.absList = res.data;
            console.log(this.absList)
          }
            console.log(err);
        })
      },
      getEnterprises(e){
          var self = this;
        axios.get("http://127.0.0.1:8088/absImport/toName",{
          params:{
            name : e
          },
          datatype:'jsonp',
          async: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          this.nodeList = [];
           self.enterpriseLength = res.data.length;
           this.enterpriseList.concat(res.data);
           for(var enterprise of this.enterpriseList){
             if(enterprise){
               this.treeData.push({"name": enterprise.name, "children": []});
             }
             this.drawTree(data);
           }
        })
      },
      getTechnologies(e){
        var self = this;
        this.nodeList = [];
        axios.get("http://127.0.0.1:8088/enterpriseTechnologyImport/comName",{
          params:{
            comName : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          console.log(res.data);
           self.technologyLength = res.data.length;
           self.technologyList = res.data[0].technologys.split(",");
           for(var technology of self.technologyList){
             if(technology){
               self.nodeList.push({"name": technology.name, "type": 3});
             }else{
             }
           }
        })
      },
      getNews(e){
        this.nodeList = [];
        axios.get("http://127.0.0.1:8088/news/nerNames",{
          params:{
            nerNames: e
          },
          datatype:'jsonp',
          async: true,
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          console.log(res.data)
           this.newsList = res.data;
            // console.log(this.newsList);
            // console.log(err);
        })
      },
      getTreeData(e) {
        this.treeData.name = this.entity;
        this.treeData.children = [];
        this.treeData.children.push({"name": "投资", "children": []});
        this.treeData.children.push({"name": "技术", "children":[]});
        this.treeData.children.push({"name": "新闻", "children":[]});

        axios.get("http://127.0.0.1:8888/database/neo4j/findCompanyByCompany",{
          params:{
            company : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          
          if(res){
            // console.log(res.data)
            for(var item of res.data) {
              this.treeData.children[0].children.push({"name": item.name, "children": []});
            }
            axios.get("http://127.0.0.1:8088/enterpriseTechnologyImport/comName",{
              params:{
                comName : e
              },
              datatype:'jsonp',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            }).then((res, err) => {
              
              this.technologyLength = res.data.length;
              this.technologyList = res.data[0].technologys.split(",");
              // console.log(this.technologyList);
              for(var technology of this.technologyList){
                if(technology){
                  this.treeData.children[1].children.push({"name": technology, "children":[]});
                }else{
                }
              }
              axios.get("http://127.0.0.1:8088/news/nerNames",{
                params:{
                  nerNames: e
                },
                datatype:'jsonp',
                async: true,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                }
              }).then((res, err) => {
                console.log(res.data)
                for(var item of res.data) {
                  this.treeData.children[2].children.push({"name": item.title, "children": []});
                }
              console.log(this.treeData);
              this.drawTree(this.treeData);
              })
            })
          }
          else{
            console.log(err);
          }
        })
      },
      drawTree(data){
        var echarts = require('echarts/lib/echarts');
        var myChart = echarts.init(document.getElementById('main'));
        myChart.showLoading();
        myChart.hideLoading();

          var option = {
              tooltip: {
                  trigger: 'item',
                  triggerOn: 'mousemove'
              },
              series: [
                  {
                      type: 'tree',
                      legend: {
                        width: 700,
                        height: 300,
                        orient: 'horizontal'
                      },
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
      },
      drawRadar(){
        var echarts = require('echarts/lib/echarts');
        var radarChart = echarts.init(document.getElementById('radar'));
        var option = {
              radar: {
                  // shape: 'circle',
                  name: {
                      textStyle: {
                          color: '#fff',
                          backgroundColor: '#999',
                          borderRadius: 3,
                          padding: [3, 5]
                    }
                  },
                  indicator: [
                    { name: '社交智能', max: 100},
                    { name: '知识表示', max: 100},
                    { name: '随机优化', max: 100},
                    { name: '遗传算法', max: 100},
                    { name: '计算机性能分析', max: 100},
                    { name: '吞吐量', max: 100}
                  ]
              },
              series: [{
                  type: 'radar',
                  // areaStyle: {normal: {}},
                  data : [
                      {
                          value : [40, 55, 33, 17, 5, 8],
                          name : '企业'
                      }
                  ]
              }]
          };

        radarChart.setOption(option);
      },
      drawBar(){
        var echarts = require('echarts/lib/echarts');
        var barChart = echarts.init(document.getElementById('bar'));
        var option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '20%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : ['社交智能', '知识表示', '随机优化', '遗传算法', '计算机性能分析', '吞吐量'],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    type:'bar',
                    barWidth: '60%',
                    data:[10, 24, 8, 2, 0, 16]
                }
            ]
        };
        barChart.setOption(option);
      }
    },
    mounted(){
      this.entity = this.$route.query.entity;
      // console.log(this.$route.query.entity);
      this.getCompanies(this.entity);
      this.getNews(this.entity);
      this.getCompanyDetail(this.entity);
      this.getAbsImport(this.entity);
      this.getTechnologies(this.entity);
      this.getTreeData(this.entity);
      this.drawRadar();
      this.drawBar();
      // console.log(this.treeData);
      
    },
    components:{
      adminHeader, forceGraph, rightNav, Timeline, TimelineItem, TimelineTitle
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
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    height: 100%;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  /* main */
  .card {
    background-color: #ffffff;
    border-radius: 5px;
    height: 740px;
    width: 98%;
    margin: 20px auto;
    padding: 10px;
    box-sizing: border-box;
  }
  #main {
    overflow: scroll;
    height: 600px;
    width: 100%;
  }
  .draw-canvas {
    display: inline-block;
    height: 700px;
    width: 45%;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
  }
  #radar, #bar {
    width: 450px;
    height: 700px;
    padding-left: 50px;
  }
  #radar div, #bar div {
    width: 450px !important;
    height: 700px !important;
  }
  /* 基本信息 */
  .el-tab-pane{
    height: 470px;
    overflow-x: hidden;
    overflow-y: scroll;
    text-align: left;
  }
  .title-output{
    font-weight: bold;
    margin: 10px 0 20px 0;
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
  .person{
    width: 80px;
    height: 80px;
  }
  .company-link {
    margin-bottom: 20px; 
  }
</style>
