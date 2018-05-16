<template>
  <div>
    <nav-header></nav-header>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '../techniqueChain' }">企业</el-breadcrumb-item>
      <el-breadcrumb-item>{{entity}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row style="position:relative; ">
      <el-col :span="6" style="z-index:0;">
        <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" class="tab-left">
          <el-tab-pane label="相关实体   " name="first">
            <!-- <i class="el-icon-document"></i>
            <span class="title-output">链接成果</span><span class="title-output">108</span><span class="title-output">项</span>
            <div id="output-link">
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
            <div id="patent-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接专利</span><span class="title-output">432</span><span class="title-output">项</span>
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
            </div> -->
            <div id="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接机构</span><span class="title-output">{{enterpriseList.length}}</span><span class="title-output">所</span>
              <div class="output-list" v-for="(item, index) in enterpriseList" :key="item.id">
                <div class="order">{{ index+1 }}</div>
                <span class="output-word">{{item.name}}</span>
                <span class="tag" v-if="item.no">{{item.no}}</span>
              </div>
            </div>
            <div id="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接技术</span><span class="title-output">{{technologyList.length}}</span><span class="title-output">个</span>
              <div class="output-list" v-for="(item, index) in technologyList" :key="item.id">
                <div class="order">{{ index+1 }}</div>
                <span class="output-word">{{item}}</span>
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

            <p class="output-detail">北京蓦然认知科技有限公司简称“蓦然认知”，成立于2016年5月5号，总部位于北京市海淀区清华科技园。
　　蓦然认知是一家专注于认知计算，自然语言理解技术的初创公司，对外提供人机协作，智能对话整体解决方案，是国内唯一家能够全语音完成复杂任务的决策引擎。</p>
          </el-tab-pane>
          <el-tab-pane label="新闻" name="third">
            <span class="title-output">新闻</span><span class="title-output">{{newsList.length}}</span><span class="title-output">条</span>
            <!--<div id="news">
              <el-steps direction="vertical" :active="1">
                <el-step title="5000万用户数据被盗！它能解决让Facebook头疼的问题？" description="2018-03-21 据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！"></el-step>
                <el-step title="5000万用户数据被盗！它能解决让Facebook头疼的问题？" description="2018-01-02 据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！"></el-step>
                <el-step title="5000万用户数据被盗！它能解决让Facebook头疼的问题？" description="2017-12-12 据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！"></el-step>
                <el-step title="5000万用户数据被盗！它能解决让Facebook头疼的问题？" description="2018-03-21 据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！"></el-step>
                <el-step title="5000万用户数据被盗！它能解决让Facebook头疼的问题？" description="2018-01-02 据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！"></el-step>
                <el-step title="5000万用户数据被盗！它能解决让Facebook头疼的问题？" description="2017-12-12 据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！"></el-step>
              </el-steps>
            </div>-->
            <timeline>
              <timeline-item color="dodgerblue" v-for="item in newsList" :key="item.index">
                <div class="news_title">{{item.title}}</div><br/>
                <div class="news_time">{{item.time}}</div><br/>
                <div class="news_detail">{{item.abs}}</div>
              </timeline-item>
              <!-- <timeline-item color="dodgerblue">
                <div class="news_title">5000万用户数据被盗！它能解决让Facebook头疼的问题？</div><br/>
                <div class="news_time">2018-03-21</div><br/>
                <div class="news_detail">据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！</div>
              </timeline-item>
              <timeline-item color="dodgerblue">
                <div class="news_title">5000万用户数据被盗！它能解决让Facebook头疼的问题？</div><br/>
                <div class="news_time">2018-03-21</div><br/>
                <div class="news_detail">据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！</div>
              </timeline-item>
              <timeline-item color="dodgerblue">
                <div class="news_title">5000万用户数据被盗！它能解决让Facebook头疼的问题？</div><br/>
                <div class="news_time">2018-03-21</div><br/>
                <div class="news_detail">据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！</div>
              </timeline-item> -->
            </timeline>
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
                <div class="row2" style="margin:0;">设置分析对象</div>
                <div class="row3" style="margin:0;">
                  <el-radio v-model="analyze.radio" label="0" @change="changeChoose(0)">全部</el-radio>
                  <el-radio v-model="analyze.radio" label="1" @change="changeChoose(1)">技术</el-radio>
                  <el-radio v-model="analyze.radio" label="3" @change="changeChoose(3)">新闻</el-radio>
                  <el-radio v-model="analyze.radio" label="4" @change="changeChoose(4)">投融资关系</el-radio>
                </div>
              </el-form-item>
              <!-- <el-form-item prop="checkPass" style="margin-bottom:0;">
                <div class="row2">设置分析主体</div>
                <div class="row3" style="padding: 0 10px;box-sizing: border-box;">
                  <el-checkbox-group v-model="analyze.checkList" style="background-color: #fff;">
                    <el-checkbox label="专家"></el-checkbox>
                    <el-checkbox label="机构"></el-checkbox>
                    <el-checkbox label="成果"></el-checkbox>
                    <el-checkbox label="专利"></el-checkbox>
                  </el-checkbox-group>
                </div>
              </el-form-item> -->
              <!-- <el-form-item style="margin-bottom: 0;">
                <div class="row3" style="padding-bottom: 20px;">
                  <el-button type="primary">提交</el-button>
                  <el-button @click="resetForm('analyze')">重置</el-button>
                </div>
              </el-form-item> -->
            </el-form>
          </div>
        </transition>

      </el-col>
      <el-col :span="18" style="position: relative;">
        <div class="graph-container">
          <!-- <i class="el-icon-close" @click="controlShow"></i> -->
          <!-- <img src="../assets/导航器.png" class="navigator1" v-bind:class="{ show: isShow }" > -->
          <div id="main2"></div>
          <div class="toolBar"></div>
        </div>
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
  import forceGraph from "../components/forceGraph4.vue"
  import rightNav from "../components/rightNav.vue"
  import axios from 'axios'
  import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
  export default {
    data() {
      return {
        activeName2: 'first',
        analyze:{
          radio: '0',
          checkList: []
        },
        showPop: false,
        showRight: false,
        enterpriseList: [],
        enterpriseDetail: '',
        enterpriseRange: '',
        technologyList: [],
        technologyLength: '',
        newsList: [],
        entity: '',
        absList: [],
        nodes: [],
        edges: []
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
      changeChoose(x){
        var svg1 = document.getElementsByTagName("svg");
        svg1[0].parentNode.removeChild(svg1[0]);
          console.log(x);
        if(x === 0){
          this.nodes = [
            { "name": "北京蓦然认知科技有限公司"   , "type" : "0" },
            { "name": "经纬中国"   , "type" : "1" },
            { "name": "经纬创投"   , "type" : "1" },
            { "name": "襄禾资本"   , "type" : "1" },
            { "name": "【新科技创业2017 ⑨】蓦然认知：拓展智能车载场景，2018年推对话启动的广告推荐系统MorAds"   , "type" : "2" },
            { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
            { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" },
            { "name": "自然语言理解"   , "type" : "3" },
            { "name": "人工智能"   , "type" : "3" },
            { "name": "机器人"   , "type" : "3" }
          ];
          this.edges = [
            { "source": 1 , "target": 0 , "relation":"投资" },
            { "source": 2 , "target": 0 , "relation":"投资" },
            { "source": 3 , "target": 0 , "relation":"投资" },
            { "source": 4 , "target": 0 , "relation":"新闻" },
            { "source": 5 , "target": 0 , "relation":"新闻" },
            { "source": 6 , "target": 0 , "relation":"新闻" },
            { "source": 7 , "target": 0 , "relation":"技术" },
            { "source": 8 , "target": 0 , "relation":"技术" },
            { "source": 9 , "target": 0 , "relation":"技术" }
          ];
          console.log(this.nodes, this.edges)
          this.graphDrawing(this.nodes, this.edges);
        }else if(x === 1){

        // var svg1 = document.getElementsByTagName("svg");
        // svg1[0].parentNode.removeChild(svg1[0]);
          
          this.nodes = [
             { "name": "北京蓦然认知科技有限公司"   , "type" : "0" },
            { "name": "自然语言理解"   , "type" : "3" },
            { "name": "人工智能"   , "type" : "3" },
            { "name": "机器人"   , "type" : "3" }
          ];
          this.edges = [
            { "source": 1 , "target": 0 , "relation":"技术" },
            { "source": 2 , "target": 0 , "relation":"技术" },
            { "source": 3 , "target": 0 , "relation":"技术" },
          ];
          this.graphDrawing(this.nodes, this.edges);
          // this.getEnterprises(entity);
          // nodes = this.nodeList;
        }else if(x === 3){
          this.nodes = [
            { "name": "北京蓦然认知科技有限公司"   , "type" : "0" },
            { "name": "【新科技创业2017 ⑨】蓦然认知：拓展智能车载场景，2018年推对话启动的广告推荐系统MorAds"   , "type" : "2" },
            { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
            { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" }
          ];
          this.edges = [
            { "source": 1 , "target": 0 , "relation":"新闻" },
            { "source": 2 , "target": 0 , "relation":"新闻" },
            { "source": 3 , "target": 0 , "relation":"新闻" }
          ];
          this.graphDrawing(this.nodes, this.edges);
          // this.getTechnologies(entity);
          // nodes = this.nodeList;
        }else if(x === 4){
          this.nodes = [
            { "name": "北京蓦然认知科技有限公司"   , "type" : "0" },
            { "name": "经纬中国"   , "type" : "1" },
            { "name": "经纬创投"   , "type" : "1" },
            { "name": "襄禾资本"   , "type" : "1" },
            { "name": "北京源码资本投资有限公司", "type": "1"}
          ];
          this.edges = [
            { "source": 1 , "target": 0 , "relation":"投资" },
            { "source": 2 , "target": 0 , "relation":"投资" },
            { "source": 3 , "target": 0 , "relation":"投资" },
            { "source": 4 , "target": 0 , "relation":"投资" }
          ];
          this.graphDrawing(this.nodes, this.edges);
        }
        console.log(this.nodes, this.edges);
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
            // console.log(this.enterpriseList);
            // console.log(err);
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
           this.newsList = res.data;
            // console.log(res.data);
            // console.log(err);
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
          // console.log(this.enterpriseRange);
            // console.log(res);
            // console.log(err);
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
          // console.log(this.enterpriseRange);
            // console.log(res);
            // console.log(err);
        })
      },
      async getEnterprises(e){
        axios.get("http://127.0.0.1:8088/absImport/toName",{
          params:{
            name : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          this.nodeList = [];
           this.enterpriseLength = res.data.length;
           this.enterpriseList = res.data;
           for(var enterprise of this.enterpriseList){
             if(enterprise){
               this.nodeList.push({"name": enterprise.name, "type": 2});
             }else{
               }
           }
            for(var i=0; i<this.nodeList.length; i++){
              this.edgeList.push({"source": i, "target": 0})
            }
        })
      },
      getTechnologies(e){
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
           this.technologyLength = res.data.length;
           this.technologyList = res.data[0].technologys.split(",");
           for(var technology of this.technologyList){
             if(technology){
               this.nodeList.push({"name": technology.name, "type": 3});
             }else{
             }
           }
        })
      },
      async getNews(e){
        this.nodeList = [];
        axios.get("http://127.0.0.1:8088/news/nerNames",{
          params:{
            nerNames: e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
           this.newsList = res.data;
          //  for(var news of this.newsList){
          //    if(news){
          //      this.nodeList.push({"name": news.title, "type": 3})
          //    }
          //  }
            // console.log(res);
            // console.log(err);
        })
      },
      graphDrawing(nodes, edges){
        var width = 800;
        var height = 550;
        // document.getElementById("#main2").innerHTML = "";

        var svg = d3.select("#main2")
          .append("svg")
          .attr("width",width)
          .attr("height",height);

        var force = d3.layout.force()
          .nodes(nodes)		//指定节点数组
          .links(edges)		//指定连线数组
          .size([width,height])	//指定范围
          .linkDistance(150)	//指定连线长度
          .charge(-400);	//相互之间的作用力

        force.start();	//开始作用

        /*console.log(nodes);
       console.log(edges);*/

        //添加连线
        var svg_edges = svg.selectAll("line")
          .data(edges)
          .enter()
          .append("line")
          .style("stroke","#ccc")
          .style("stroke-width",1)
          .attr("marker-end", "url(#resolved)" );

        // var color = d3.scale.category20();
        var color = [
          {color:"#7C5053",label:"企业"},
          {color:"#6B1901",label:"投资企业"},
          {color:"yellow",label:"新闻"},
          {color:"#9b8117",label:"技术"}
        ];

        //添加节点
        var svg_nodes = svg.selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
          .attr("r",20)
          .style("fill",
            (d)=>{
              if(d.type==0){
                return color[0].color;
              }else if(d.type==1){
                return color[1].color;
              }else if(d.type==2){
                return color[2].color;
              }else if(d.type==3){
                return color[3].color;
              }else if(d.type==4){
                return color[4].color;
              }
            }
          )
        .on("click", function(d, i){
          //console.log(d.name);
          if(d.name === "图像识别"){
            window.location.href="/#/techniqueChain";
          }else if(d.name==="一种基于人脸识别的系统设计与实现（成果）"){
            window.location.href="/#/outputDetail";
          }else if(d.name==="一种基于人脸识别的系统设计与实现（专利）"){
            window.location.href="/#/patentDetail";
          }else if(d.name==="北京邮电大学"){
            window.location.href="/#/companyDetail";
          }else if(d.name==="李明学"){
            window.location.href="/#/specialistDetail";
          }
        })
        .call(force.drag);	//使得节点能够拖动

      //添加描述节点的文字
        var svg_texts = svg.selectAll("text")
          .data(nodes)
          .enter()
          .append("text")
          .style("fill", "black")
          .attr("dx", -30)
          .attr("dy", 40)
          .text(function(d){
            return d.name;
          });

        var edges_text = svg.selectAll(".linetext")
          .data(edges)
          .enter()
          .append("text")
          .attr("class","linetext")
          .style("fill", "black")
          .text(function(d){
            return d.relation;
          });
        //arrow
        var marker=
          svg.append("marker")
          //.attr("id", function(d) { return d; })
            .attr("id", "resolved")
            //.attr("markerUnits","strokeWidth")//设置为strokeWidth箭头会随着线的粗细发生变化
            .attr("markerUnits","userSpaceOnUse")
            .attr("viewBox", "0 -5 10 10")//坐标系的区域
            .attr("refX",32)//箭头坐标
            .attr("refY", -1)
            .attr("markerWidth", 12)//标识的大小
            .attr("markerHeight", 12)
            .attr("orient", "auto")//绘制方向，可设定为：auto（自动确认方向）和 角度值
            .attr("stroke-width",2)//箭头宽度
            .append("path")
            .attr("d", "M0,-5L10,0L0,5")//箭头的路径
            .attr('fill','#000000');//箭头颜色


          force.on("tick", function(){	//对于每一个时间间隔

          //更新连线坐标
          svg_edges.attr("x1",function(d){ return d.source.x; })
            .attr("y1",function(d){ return d.source.y; })
            .attr("x2",function(d){ return d.target.x; })
            .attr("y2",function(d){ return d.target.y; });

          //更新节点坐标
          svg_nodes.attr("cx",function(d){ return d.x; })
            .attr("cy",function(d){ return d.y; });

          //更新文字坐标
          svg_texts.attr("x", function(d){ return d.x; })
            .attr("y", function(d){ return d.y; });

          edges_text.attr("x",function(d){ return (d.source.x + d.target.x) / 2 ; });
          edges_text.attr("y",function(d){ return (d.source.y + d.target.y) / 2 ; });
        });
        // console.log(color);
        var toolBar = document.getElementsByClassName("toolBar")[0];
        var tool = "";
        for(var j=0; j<color.length;j++){
          tool += '<div class="circle1" style="background-color:'+color[j].color+';"></div><span class="label2">'+color[j].label+'</span>';
        }
        toolBar.innerHTML=tool;
      }
    },
    mounted(){
      this.entity = this.$route.query.entity;
      console.log(this.$route.query.entity);
      this.getCompanies(this.entity);
      this.getNews(this.entity);
      this.getCompanyDetail(this.entity);
      this.getAbsImport(this.entity);
      this.getTechnologies(this.entity);
      this.nodes = [
          { "name": "北京蓦然认知科技有限公司"   , "type" : "0" },
          { "name": "经纬中国"   , "type" : "1" },
          { "name": "经纬创投"   , "type" : "1" },
          { "name": "襄禾资本"   , "type" : "1" },
          { "name": "【新科技创业2017 ⑨】蓦然认知：拓展智能车载场景，2018年推对话启动的广告推荐系统MorAds"   , "type" : "2" },
          { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
          { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" },
          { "name": "自然语言理解"   , "type" : "3" },
          { "name": "人工智能"   , "type" : "3" },
          { "name": "机器人"   , "type" : "3" }
        ];
        this.edges = [
          { "source": 1 , "target": 0 , "relation":"投资" },
          { "source": 2 , "target": 0 , "relation":"投资" },
          { "source": 3 , "target": 0 , "relation":"投资" },
          { "source": 4 , "target": 0 , "relation":"新闻" },
          { "source": 5 , "target": 0 , "relation":"新闻" },
          { "source": 6 , "target": 0 , "relation":"新闻" },
          { "source": 7 , "target": 0 , "relation":"技术" },
          { "source": 8 , "target": 0 , "relation":"技术" },
          { "source": 9 , "target": 0 , "relation":"技术" }
        ];
      this.graphDrawing(this.nodes, this.edges);
    
      // console.log(this.radioNum)
    //  nodes = [
    //       { "name": "北京蓦然认知科技有限公司"   , "type" : "1" },
    //       { "name": "经纬中国"   , "type" : "2" },
    //       { "name": "经纬创投"   , "type" : "2" },
    //       { "name": "襄禾资本"   , "type" : "2" },
    //       { "name": "北京源码资本投资有限公司", "type": "2"}
    //     ];
      
        // this.getNews(entity);
        // nodes = this.nodeList;
      

      
      

      // var nodes = this.nodeList;

      


      // var edges = this.edgeList;

      // // console.log(nodes, edges)
      // var edges = [
      //   { "source": 1 , "target": 0 , "relation":"" },
      //   { "source": 2 , "target": 0 , "relation":"" },
      //   { "source": 3 , "target": 0 , "relation":"" }
      // ];

      
    },
    components:{
      navHeader, forceGraph, rightNav,Timeline,TimelineItem,TimelineTitle
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
    padding: 30px;
    box-sizing: border-box;
    background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eee;
  }
  .el-radio+.el-radio{
    margin: 0;
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
  /*----news----*/
  .news_title{
    font-weight: bold;
  }
  .news_time{
    font-size: 12px;
    color: dodgerblue;
  }
  /* ----forceGraph---- */
   #main2{
    margin: 0 auto;
    vertical-align: middle;
  }
  .toolBar{
    width: 800px;
    text-align: center;
    margin-bottom: 10px;
  }
  .circle1{
    width: 10px;
    height: 10px;
    border-radius: 50px;
    display: inline-block;
  }
  .label2{
    margin-right: 10px;
  }
  .graph-container{
    position: relative;
    z-index: 0;
  }
  .navigator1{
    width: 250px;
    height: 200px;
    z-index: 2;
    position: absolute;
    right: 30px;
    top: 30px;
  }
  .el-icon-close{
    position: absolute;
    top: 45px;
    right: 44px;
    z-index: 10;
    color: #fff;
  }
  .show{
    display: none;
  }
  .link.resolved {
    stroke-dasharray: 0,2 1;
  }
</style>

</style>
