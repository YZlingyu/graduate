<template>
  <div>
    <nav-header></nav-header>
    <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>技术</el-breadcrumb-item>
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
              <div class="output-list" v-for="(item, index) in enterpriseList" :key="item.index">
                <div class="order">{{index+1}}</div>
                <span class="output-word">{{item.name}}</span>
                <p class="output-des">北京小米科技有限责任公司成立2010年4月，是一家专注于智能硬件和电子产品研发的移动互联网公司。“为发烧而生”是小米的产品概念。小米公司创造了用互联网模式开发手机操作系统、发烧友参与开发改进的模式。 [1]  小米还是继苹果、三星、华为之后第四家拥有手机芯片自研能力的科技公司。
                </p>
              </div>
            </div>

          </el-tab-pane>
          <el-tab-pane label="基本信息" name="second">
            <i class="el-icon-document"></i>
            <span class="title-output">{{entity}}</span>
            <p class="output-detail">人工智能（Artificial Intelligence），英文缩写为AI。它是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。
            </p>
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
                  <el-radio v-model="analyze.radio" label="1" @change="changeChoose(1)">企业</el-radio>
                  <el-radio v-model="analyze.radio" label="3" @change="changeChoose(3)">新闻</el-radio>
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
              </el-form-item>
              <el-form-item style="margin-bottom: 0;">
                <div class="row3" style="padding-bottom: 20px;">
                  <el-button type="primary" @click="submitForm('analyze')">提交</el-button>
                  <el-button @click="resetForm('analyze')">重置</el-button>
                </div>
              </el-form-item> -->
            </el-form>
          </div>
        </transition>

      </el-col>
      <el-col :span="18" style="position: relative;">
        <div id="main2"></div>
        <div class="toolBar"></div>
        <!-- <force-graph :entityTo = "entity"></force-graph> -->
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
  import forceGraph from "../components/forceGraph5.vue"
  import rightNav from "../components/rightNav.vue"
  import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
  import axios from "axios"
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
        enterpriseLength: '',
        technologyList: [],
        texhnologyLength: '',
        newsList: []
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
      },
      getEnterprise(e){
        axios.get("http://127.0.0.1:8888/database/neo4j/findCompanyByTechnology",{
          params:{
            technology : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
           this.enterpriseList = res.data;
            console.log(res.data);
            console.log(err);
        })
      },
      getNews(){
        axios.get("http://127.0.0.1:8088/news/all/1/1",{
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
           this.newsList = res.data;
            console.log(res.data);
            // console.log(err);
        })
      },
      changeChoose(x){
        var svg1 = document.getElementsByTagName("svg");
        svg1[0].parentNode.removeChild(svg1[0]);
          console.log(x);
        if(x === 0){
          this.nodes = [
            { "name": "人工智能"   , "type" : "0" },
            { "name": "北京文安智能技术股份有限公司"   , "type" : "1" },
            { "name": "北京水母科技有限公司"   , "type" : "1" },
            { "name": "雷军：如果实业立不住，再多互联网思维也没有用"   , "type" : "2" },
            { "name": "孵化网红IP做时尚节目，「菁蜜文化」获搜狐视频250万元Pre-A轮融资"   , "type" : "2" },
            { "name": "腾讯京东唯品会的“人民战争”"   , "type" : "2" },
            { "name": "8点1氪 | 印度提高手机进口关税，iPhone全线涨价；滴滴进军台湾市场；华为明年将大举进军美国"   , "type" : "2" },
            { "name": "「盖得排行」获千万元 A 轮融资，本地生活消费指南已覆盖广州、北京"   , "type" : "2" },
            { "name": "从B端走到C端，「水母基因」认为消费级基因检测风口要来了"   , "type" : "2" },
            { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" },
            { "name": "【新科技创业2017 ⑨】蓦然认知：拓展智能车载场景，2018年推对话启动的广告推荐系统"   , "type" : "2" },
            { "name": "【新科技创业2017 】圣尧无人机：研发垂直起降固定翼无人机，获天马股份Pre-A轮融资"   , "type" : "2" },
            { "name": "【新科技创业2017 】科技谷：聚焦交通出行领域，2018年将组建AI团队"   , "type" : "2" },
            { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
            { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
            { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" }
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
            { "source": 9 , "target": 0 , "relation":"投资" },
            { "source": 10 , "target": 0 , "relation":"投资" },
            { "source": 11 , "target": 0 , "relation":"新闻" },
            { "source": 12 , "target": 0 , "relation":"新闻" },
            { "source": 13 , "target": 0 , "relation":"新闻" },
            { "source": 14 , "target": 0 , "relation":"技术" },
            { "source": 15 , "target": 0 , "relation":"技术" }
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
        }
        console.log(this.nodes, this.edges);
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
          {color:"#7C5053",label:"技术"},
          {color:"#6B1901",label:"企业"},
          {color:"yellow",label:"新闻"}
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
    created(){
      this.entity = this.$route.query.entity;
      this.getEnterprise(this.entity);
      this.getNews();
       
    },
    mounted(){
      this.nodes = [
            { "name": "人工智能"   , "type" : "0" },
            { "name": "北京文安智能技术股份有限公司"   , "type" : "1" },
            { "name": "北京水母科技有限公司"   , "type" : "1" },
            { "name": "雷军：如果实业立不住，再多互联网思维也没有用"   , "type" : "2" },
            { "name": "孵化网红IP做时尚节目，「菁蜜文化」获搜狐视频250万元Pre-A轮融资"   , "type" : "2" },
            { "name": "腾讯京东唯品会的“人民战争”"   , "type" : "2" },
            { "name": "8点1氪 | 印度提高手机进口关税，iPhone全线涨价；滴滴进军台湾市场；华为明年将大举进军美国"   , "type" : "2" },
            { "name": "「盖得排行」获千万元 A 轮融资，本地生活消费指南已覆盖广州、北京"   , "type" : "2" },
            { "name": "从B端走到C端，「水母基因」认为消费级基因检测风口要来了"   , "type" : "2" },
            { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" },
            { "name": "【新科技创业2017 ⑨】蓦然认知：拓展智能车载场景，2018年推对话启动的广告推荐系统"   , "type" : "2" },
            { "name": "【新科技创业2017 】圣尧无人机：研发垂直起降固定翼无人机，获天马股份Pre-A轮融资"   , "type" : "2" },
            { "name": "【新科技创业2017 】科技谷：聚焦交通出行领域，2018年将组建AI团队"   , "type" : "2" },
            { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
            { "name": "36氪首发 | 「文安智能」完成2000万美元B轮融资，三星风投、ABB参投"   , "type" : "2" },
            { "name": "FF高管与贾跃亭的“分手战争”"   , "type" : "2" }
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
            { "source": 9 , "target": 0 , "relation":"投资" },
            { "source": 10 , "target": 0 , "relation":"投资" },
            { "source": 11 , "target": 0 , "relation":"新闻" },
            { "source": 12 , "target": 0 , "relation":"新闻" },
            { "source": 13 , "target": 0 , "relation":"新闻" },
            { "source": 14 , "target": 0 , "relation":"技术" },
            { "source": 15 , "target": 0 , "relation":"技术" }
          ];
          console.log(this.nodes, this.edges)
          this.graphDrawing(this.nodes, this.edges);
    },
    components:{
      navHeader, forceGraph, rightNav, Timeline,TimelineItem,TimelineTitle
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
