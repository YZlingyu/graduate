<template>
  <div class="graph-container">
    <i class="el-icon-close" @click="controlShow"></i>
    <img src="../assets/导航器.png" class="navigator1" v-bind:class="{ show: isShow }" >
    <div id="main2"></div>
    <div class="toolBar"></div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShow: false,
      }
    },
    methods: {
      controlShow(){
        this.isShow=true;
      }
    },
    created(){
    },
    mounted(){
      // console.log(this.dataset1);

      var nodes = [
        { "name": "李明学"   , "type" : "1" },
        { "name": "一种基于人脸识别的系统设计与实现（成果）"   , "type" : "2" },
        { "name": ""   , "type" : "2" },
        { "name": ""   , "type" : "2" },
        { "name": ""   , "type" : "2" },
        { "name": "一种基于人脸识别的系统设计与实现（专利）"   , "type" : "3" },
        { "name": ""   , "type" : "3" },
        { "name": ""   , "type" : "3" },
        { "name": ""   , "type" : "3" },
        { "name": "北京邮电大学"   , "type" : "4" },
        { "name": ""   , "type" : "4" },
        { "name": ""   , "type" : "4" },
        { "name": "图像识别"   , "type" : "5" },
        { "name": ""   , "type" : "5" },
        { "name": ""   , "type" : "5" },
      ];

      var edges = [
        { "source": 1 , "target": 0 , "relation":"" },
        { "source": 2 , "target": 0 , "relation":"" },
        { "source": 3 , "target": 0 , "relation":"" },
        { "source": 4 , "target": 0 , "relation":"" },
        { "source": 5 , "target": 0 , "relation":"" },
        { "source": 6 , "target": 0 , "relation":"" },
        { "source": 7 , "target": 0 , "relation":"" },
        { "source": 8 , "target": 0 , "relation":"" },
        { "source": 9 , "target": 0 , "relation":"" },
        { "source": 10 , "target": 0 , "relation":"" },
        { "source": 11 , "target": 0 , "relation":"" },
        { "source": 12 , "target": 0 , "relation":"" },
        { "source": 13 , "target": 0 , "relation":"" },
        { "source": 14 , "target": 0 , "relation":"" }
      ];

      var width = 800;
      var height = 550;

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
        {color:"#7C5053",label:"专家"},
        {color:"#6B1901",label:"成果"},
        {color:"#B42A01",label:"专利"},
        {color:"#B45A2D",label:"机构"},
        {color:"#D9B318",label:"技术链"}
      ];

//添加节点
      var svg_nodes = svg.selectAll("circle")
        .data(nodes)
        .enter()
        .append("circle")
        .attr("r",20)
        .style("fill",
          (d)=>{
            if(d.type==1){
              return color[0].color;
            }else if(d.type==2){
              return color[1].color;
            }else if(d.type==3){
              return color[2].color;
            }else if(d.type==4){
              return color[3].color;
            }else if(d.type==5){
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
    },
    watch: {

    },
    components:{
    }
  }
</script>

<style>
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
    display: inline-block;
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
