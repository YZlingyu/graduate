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
        <router-link to="./technologyChain">
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">查看技术链</span>
          </el-menu-item>
        </router-link>
      </el-menu>
    </el-aside>
    <el-main>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>技术</el-breadcrumb-item>
        <el-breadcrumb-item>{{entity}}</el-breadcrumb-item>
      </el-breadcrumb>
      <el-row v-show="show === 1">
        <el-col :span="16">
          <div class="card">
            <h1 class="title">技术关系图谱</h1>
            <div id="main"></div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="card basic-info">
            <h1 class="title">技术相关信息</h1>
            <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick" class="tab-left">
          <el-tab-pane label="相关实体   " name="first">
            <div class="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接机构</span><span class="title-output">{{enterpriseList.length}}</span><span class="title-output">所</span>
              <div class="output-list" v-for="(item, index) in enterpriseList" :key="item.id">
                <router-link :to="{path: './company', query:{entity:item.name}}">
                  <div class="order">{{ index+1 }}</div>
                  <span class="output-word">{{item}}</span>
                  <span class="tag" v-if="item.no">{{item.no}}</span>
                </router-link>
              </div>
            </div>
            <div class="company-link">
              <i class="el-icon-document"></i>
              <span class="title-output">链接技术</span><span class="title-output">{{technologyList.length}}</span><span class="title-output">个</span>
              <div class="output-list" v-for="(item, index) in technologyList" :key="item.id">
                <router-link :to="{path: './technology', query:{entity:item}}">
                  <div class="order">{{ index+1 }}</div>
                  <span class="output-word">{{item.name}}</span>
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
            <p class="output-detail">人工智能是计算机科学的一个分支，它企图了解智能的实质，并生产出一种新的能以人类智能相似的方式做出反应的智能机器，该领域的研究包括机器人、语言识别、图像识别、自然语言处理和专家系统等。人工智能从诞生以来，理论和技术日益成熟，应用领域也不断扩大，可以设想，未来人工智能带来的科技产品，将会是人类智慧的“容器”。人工智能可以对人的意识、思维的信息过程的模拟。人工智能不是人的智能，但能像人那样思考、也可能超过人的智能。</p>
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
        <el-row>
          <div class="draw-canvas-big">
            <h1>产业注册资金</h1>
            <div id="company-fund"></div>
            <div class="right-decription">
              <h1>注册资金列表</h1>
              <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
          </div>
        </el-row>
        <el-row style="display: flex; justify-content: space-between;width: 100%;">
          <div class="draw-canvas">
            <h1>技术产业链</h1>
            <div id="company-tree"></div>
          </div>
          <div class="draw-canvas">
            <h1>技术前景</h1>
            <div id="bar"></div>
          </div>
        </el-row>
        <el-row style="display: flex; justify-content: space-between;width: 100%;">
          <div class="draw-canvas">
            <h1>技术成果输出量</h1>
            <div id="line"></div>
          </div>
          <div class="draw-canvas">
            <h1>技术应用领域</h1>
            <div id="radar"></div>
          </div>
          <!-- <div class="draw-canvas" style="background-color: #eee;">
            <h1>技术热门程度趋势</h1>
            <div id="pie"></div>
          </div> -->
        </el-row>
      </el-row>
      <el-row v-show="show === 3">
        <el-col :span="16">
          <div class="news-card1">
            <h1 class="title">技术相关企业标签</h1>
            <div id='app' >
              <svg :width='width' :height='height' @mousemove='listener($event)'>
                <a :href="tag.href" v-for='tag in tags' :key="tag.id">
                  <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
                </a>
              </svg>
            </div>
          </div>
          
        </el-col>
        <el-col :span="8">
          <div class="news-card2">
            <h1 class="title">技术新闻详情</h1>
            <div class="newsList" v-for="(item, index) in newsList" :key="item.newsId">
              <div class="output-list news-list" @mouseover="changeShowNews(item.newsId)" @mouseout="displayNews()">
                <span class="order">{{index+1}}</span>
                <span class="output-word">{{item.title}}</span>
              </div>
              <div class="pop-out" v-show="showNews === item.newsId">{{item.abs}}</div>
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
  import forceGraph from "../components/forceGraph4.vue"
  import rightNav from "../components/rightNav.vue"
  import axios from 'axios'
  import * as common from '../common/common.js'
  import { Timeline, TimelineItem, TimelineTitle } from 'vue-cute-timeline'
  let qs = require("qs");
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
        comList: [],
        newsList: [],
        entity: '',
        absList: [],
        nodes: [],
        edges: [],
        treeData: {},
        width:700,
        height:350,
        tagsNum:20,
        RADIUS:100,
        speedX:Math.PI/360,
        speedY:Math.PI/360,
        tags: [],
        showNews: '',
        companyTree: {},
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },

    created(){//初始化标签位置
    console.log(common.url1)
        var self = this;
        let tags=[];
        axios.get(common.url1+"findComByTech",{
          params:{
            technologyName: this.$route.query.entity
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          // console.log(res.data);
          if(res.data){
            this.comList = res.data;
             for(let i = 0; i < this.comList.length; i++){
                let tag = {};
                let k = -1 + (2 * (i + 1) - 1) / this.tagsNum;
                let a = Math.acos(k);
                let b = a * Math.sqrt(this.tagsNum * Math.PI);
                tag.text = this.comList[i];
                tag.x = this.CX +  this.RADIUS * Math.sin(a) * Math.cos(b);
                tag.y = this.CY +  this.RADIUS * Math.sin(a) * Math.sin(b); 
                tag.z = this.RADIUS * Math.cos(a);
                tags.push(tag);
            }
            this.tags = tags;
            console.log(tags);
          }
        })
    },
    computed:{
        CX(){
            return this.width/2;
        },
        CY(){
            return this.height/2;
        }
    },
    watch: {
      '$route':'fetchData'
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
      changeShowNews(a){
        this.showNews = a;
      },
      displayNews(){
        this.showNews = '';
      },
      getTechnologies(e) {
         axios.get(common.url1+"findTechnologyChildrens",{
          params:{
            technology : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res) {
            this.technologyList = res.data;
          }
          else {
            console.log(err);
          }
        })
      },
      getCompanies(e) {
        axios.get(common.url1+"findComByTech",{
          params:{
            technologyName : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res) {
            this.enterpriseList = res.data;
          }
          else {
            console.log(err);
          }
        })

      },
      getNews(e){
        axios.get(common.url1+"findNewsByTechnology",{
          params:{
            technologyName : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res) {
            console.log(res.data);
            this.newsList = res.data;
          }
          else {
            console.log(err);
          }
        })
      },
      getTreeData(e) {
        this.treeData.name = this.entity;
        this.treeData.children = [];
        this.treeData.children.push({"name": "企业", "children": []});
        this.treeData.children.push({"name": "技术", "children":[]});
        this.treeData.children.push({"name": "新闻", "children":[]});

        axios.get(common.url1+"findComByTech",{
          params:{
            technologyName : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          
          if(res){
            // console.log(res.data)
            for(var item of res.data) {
              this.treeData.children[0].children.push({"name": item, "children": []});
            }
            axios.get(common.url1+"findTechnologyChildrens",{
              params:{
                technology : e
              },
              datatype:'jsonp',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            }).then((res, err) => {
              
              for(var technology of res.data){
                if(technology){
                  this.treeData.children[1].children.push({"name": technology.name, "children":[]});
                }else{
                }
              }
              axios.get(common.url1+"findNewsByTechnology",{
                params:{
                  technologyName: e
                },
                datatype:'jsonp',
                async: true,
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                }
              }).then((res, err) => {
                // console.log(res.data)
                for(var item of res.data) {
                  this.treeData.children[2].children.push({"name": item.title, "children": []});
                }
              // console.log(this.treeData);
              this.drawTree("main",this.treeData);
              })
            })
          }
          else{
            console.log(err);
          }
        })
      },
      drawForce(nodes, edges) {
        var that = this;
        var width = 770;
        var height = 680;
        var svg = d3
          .select("#company-fund")
          .append("svg")
          .attr("width", width)
          .attr("height", height);

        var force = d3.layout
          .force()
          .nodes(nodes) //指定节点数组
          .links(edges) //指定连线数组
          .size([width, height]) //指定范围
          .linkDistance(150) //指定连线长度
          .charge(-400); //相互之间的作用力

        force.start(); //开始作用

        //console.log(nodes);
        //console.log(edges);

        //添加连线
        var svg_edges = svg
          .selectAll("line")
          .data(edges)
          .enter()
          .append("line")
          .style("stroke", "#d0d0d0")
          .style("stroke-width", 3.4)
          .on("click", function(d, i) {
            // that.rfather = edges[i].source.name;
            // that.rfatherid = edges[i].source.id;
            // that.rson = edges[i].target.name;
            // that.rsonid = edges[i].target.id;
            // that.rlabel = edges[i].rel;
            // that.rname = edges[i].name;
            // that.activeName = "second";
            // document.getElementById("r_add").style.display = "none";
          });

        //var color = d3.scale.category20();

        //添加节点
        var svg_nodes = svg
          .selectAll("circle")
          .data(nodes)
          .enter()
          .append("circle")
          .attr("r", 20)
          .style("fill", function(d, i) {
            if (nodes[i].level == "0") {
              return "#E800E8";
            } else if (nodes[i].level == "1") {
              return "FF8000";
            } else if (nodes[i].level == "2") {
              return "#6EB0EA";
            } else if (nodes[i].level == "3") {
              return "8CEA00";
            } else if (nodes[i].level == "4") {
              return "#90E4EA";
            } else if (nodes[i].level == "5") {
              return "#7D7DFF";
            } else if (nodes[i].level == "6") {
              return "#80FFFF";
            } else if (nodes[i].level == "7") {
              return "#95CACA";
            } else if (nodes[i].level == "8") {
              return "#D2A2CC";
            } else if (nodes[i].level == "9") {
              return "#E8E8D0";
            } else {
              return "#ADADAD";
            }
          })
          // .style("stroke", "black")
          // .style("stroke-width", 1)
          .call(force.drag) ////使得节点能够拖动
          .on("click", function(d, i) {
            // that.name = nodes[i].name;
            // that.id = nodes[i].id;
            // that.label = nodes[i].type;
            // that.father = nodes[i].father;
            // that.activeName = "first";
            // document.getElementById("add").style.display = "none";
          });

        //添加描述节点的文字
        var svg_texts = svg
          .selectAll("text")
          .data(nodes)
          .enter()
          .append("text")
          .style("fill", "black")
          .attr("dx", -50)
          .attr("dy", 30)
          .text(function(d) {
            return d.name;
          });

        force.on("tick", function() {
          //对于每一个时间间隔

          //更新连线坐标
          svg_edges
            .attr("x1", function(d) {
              return d.source.x;
            })
            .attr("y1", function(d) {
              return d.source.y;
            })
            .attr("x2", function(d) {
              return d.target.x;
            })
            .attr("y2", function(d) {
              return d.target.y;
            });

          //更新节点坐标
          svg_nodes
            .attr("cx", function(d) {
              return d.x;
            })
            .attr("cy", function(d) {
              return d.y;
            });

          //更新文字坐标
          svg_texts
            .attr("x", function(d) {
              return d.x;
            })
            .attr("y", function(d) {
              return d.y;
            });
        });
      },
      getForceData(e) {
        // console.log(e);
        axios.post(common.url3+"search/"+e)
        .then(res => {
          console.log(res.data);
          this.drawForce(res.data[0], res.data[1]);
        });
      },
      getCompanyTreeData(e) {
        axios.get(common.url1+"findComByTechInTChain",{
          params:{
            technologyName : e
          },
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
          if(res) {
            // console.log(res.data)
              this.companyTree = res.data;
            this.drawTree2("company-tree",this.companyTree);
          }
          else {
            console.log(err);
          }
        })
      },
      drawTree(id, data){
        var echarts = require('echarts/lib/echarts');
        var myChart = echarts.init(document.getElementById(id));
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
                      animationDurationUpdate: 750,
                      expandAndCollapse: true,
                  }
              ]
          }
          myChart.setOption(option);
      },
      drawTree2(id, data){
        var echarts = require('echarts/lib/echarts');
        var myChart = echarts.init(document.getElementById(id));
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
                      initialTreeDepth: 2,
                      animationDurationUpdate: 750,
                      expandAndCollapse: true,
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
      drawLine() {
        var echarts = require('echarts/lib/echarts');
        var lineChart = echarts.init(document.getElementById('line'));
        var option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
                smooth: true
            }]
        };
        lineChart.setOption(option);
      },
      drawBar(){
        var echarts = require('echarts/lib/echarts');
        var barChart = echarts.init(document.getElementById('bar'));
        var posList = [
            'left', 'right', 'top', 'bottom',
            'inside',
            'insideTop', 'insideLeft', 'insideRight', 'insideBottom',
            'insideTopLeft', 'insideTopRight', 'insideBottomLeft', 'insideBottomRight'
        ];

        app.configParameters = {
            rotate: {
                min: -90,
                max: 90
            },
            align: {
                options: {
                    left: 'left',
                    center: 'center',
                    right: 'right'
                }
            },
            verticalAlign: {
                options: {
                    top: 'top',
                    middle: 'middle',
                    bottom: 'bottom'
                }
            },
            position: {
                options: echarts.util.reduce(posList, function (map, pos) {
                    map[pos] = pos;
                    return map;
                }, {})
            },
            distance: {
                min: 0,
                max: 100
            }
        };

        app.config = {
            rotate: 90,
            align: 'left',
            verticalAlign: 'middle',
            position: 'insideBottom',
            distance: 15,
            onChange: function () {
                var labelOption = {
                    normal: {
                        rotate: app.config.rotate,
                        align: app.config.align,
                        verticalAlign: app.config.verticalAlign,
                        position: app.config.position,
                        distance: app.config.distance
                    }
                };
                barChart.setOption({
                    series: [{
                        label: labelOption
                    }, {
                        label: labelOption
                    }]
                });
            }
        };


        var labelOption = {
            normal: {
                show: true,
                position: app.config.position,
                distance: app.config.distance,
                align: app.config.align,
                verticalAlign: app.config.verticalAlign,
                rotate: app.config.rotate,
                formatter: '{c}  {name|{a}}',
                fontSize: 16,
                rich: {
                    name: {
                        textBorderColor: '#fff'
                    }
                }
            }
        };

        var option = {
            color: ['#003366', '#006699'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
            },
            legend: {
                data: ['阿里巴巴', '腾讯']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {show: true},
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    axisTick: {show: false},
                    data: ['2012', '2013', '2014', '2015', '2016']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: '阿里巴巴',
                    type: 'bar',
                    barGap: 0,
                    label: labelOption,
                    data: [320, 332, 301, 334, 390]
                },
                {
                    name: '腾讯',
                    type: 'bar',
                    label: labelOption,
                    data: [220, 182, 191, 234, 290]
                }
            ]
        };
        barChart.setOption(option);
      },
      drawPie(){
        var echarts = require('echarts/lib/echarts');
        var pieChart = echarts.init(document.getElementById('pie'));
        var option = {
              tooltip : {
                  trigger: 'item',
                  formatter: "{a} <br/>{b} : {c} ({d}%)"
              },
              legend: {
                  orient: 'vertical',
                  left: 'left',
                  data: ['正面新闻','负面新闻']
              },
              series : [
                  {
                      name: '访问来源',
                      type: 'pie',
                      radius : '55%',
                      center: ['50%', '60%'],
                      data:[
                          {value:335, name:'正面新闻'},
                          {value:310, name:'负面新闻'}
                      ],
                      itemStyle: {
                          emphasis: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          };
        pieChart.setOption(option);
      },
      rotateX(angleX){
        var cos = Math.cos(angleX);
        var sin = Math.sin(angleX);
        for(let tag of this.tags){
            var y1 = (tag.y- this.CY) * cos - tag.z * sin  + this.CY;
            var z1 = tag.z * cos + (tag.y- this.CY) * sin;
            tag.y = y1;
            tag.z = z1;
        } 
      },
      rotateY(angleY){
          var cos = Math.cos(angleY);
          var sin = Math.sin(angleY);
          for(let tag of this.tags){
              var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX;
              var z1 = tag.z * cos + (tag.x-this.CX) * sin;
              tag.x = x1;
              tag.z = z1;
          } 
      },
      listener(event){//响应鼠标移动
          var x = event.clientX - this.CX;
          var y = event.clientY - this.CY;
          this.speedX = x*0.0001>0 ? Math.min(this.RADIUS*0.00002, x*0.0001) : Math.max(-this.RADIUS*0.00002, x*0.0001);
          this.speedY = y*0.0001>0 ? Math.min(this.RADIUS*0.00002, y*0.0001) : Math.max(-this.RADIUS*0.00002, y*0.0001); 
      },
      fetchData(){
        // console.log('路由发送变化doing...');
        location.reload();
      },
      handleNodeClick(data) {
        console.log(data);
      }
    },
    mounted(){
      this.entity = this.$route.query.entity;
      // console.log(this.$route.query.entity);
      this.getCompanies(this.entity);
      this.getNews(this.entity);
      // this.getCompanyDetail(this.entity);
      // this.getAbsImport(this.entity);
      this.getForceData(this.entity);
      this.getTechnologies(this.entity);
      this.getTreeData(this.entity);
      this.drawRadar();
      this.drawLine();
      this.drawBar();
      this.getCompanyTreeData(this.entity);
      // this.drawPie();
      setInterval(() => {
          this.rotateX(this.speedX);
          this.rotateY(this.speedY);
      }, 17)
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
    height: 800px;
    width: 45%;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
    overflow: hidden;
  }
  .draw-canvas-big {
    display: inline-block;
    height: 800px;
    width: 100%;
    background-color: #ffffff;
    border-radius: 5px;
    margin-top: 20px;
  }
  #radar, #bar, #line, #company-tree {
    width: 450px;
    height: 700px;
    padding-left: 50px;
  }
  #company-fund, #company-tree {
    width: 500px;
  }
  #company-fund {
    float: left;
  }
  .right-decription {
    width: 300px;
    height: 650px;
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 0 20px 20px 20px;
    box-sizing: border-box;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    text-align: left;
  }
  .inves-name {
    font-weight: bold;
    margin-right: 10px;
  }
  .inves-date {
    color: dodgerblue;
  }
  #radar div, #bar div, #line div, #company-tree div {
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
  /* ---nav3--- */
  .news-card1, .news-card2 {
    background-color: #ffffff;
    border-radius: 5px;
  }
  .news-card1 {
    width: 730px;
    height: 500px;
    margin: 10px 0;
    padding: 20px;
  }
  .news-card2 {
    width: 90%;
    height: 1040px;
    padding: 20px;
    margin-top: 10px;
    text-align: left;
  }
  #pie {
    width: 450px;
    height: 450px;
  }
  .newsList {
    border-bottom: 1px solid #eee;
    padding: 10px; 
    position: relative;
  }
  .pop-out {
    position: absolute;
    top: 0;
    left: -220px;
    width: 200px;
    border: 1px solid #999999;
    border-radius: 5px;
    padding: 10px;
    background-color: #ffffff;
    box-shadow: -5px 5px 5px #999999;
  }
</style>
