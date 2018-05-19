<template>
  <div>
    <nav-header></nav-header>
    <el-row>
      <el-col :span="8">
        <el-breadcrumb separator-class="el-icon-arrow-right" class="bread">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>技术链</el-breadcrumb-item>
          <el-breadcrumb-item>人工智能</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
     <el-col :span="16">
       <!--<el-input class="select1" size="mini" placeholder="请输入要查找的专家、机构、成果、专利" suffix-icon="el-icon-search" v-model="input1">
       </el-input>-->
     </el-col>
    </el-row>

    <div class="block">
      <!--<el-slider v-model="value1" :format-tooltip="formatTooltip"></el-slider>-->
    </div>
    <!-- <tree-map></tree-map> -->
    <div id="main" style="width: 850px; height: 500px"></div>
    <div id="ss"></div>

    <!-- <div id="orgManagement" style="height: 500px; width:500px;"></div> -->

    <!------领域专家------>
    <div style="width: 90%; margin: 0 auto;">
      <!-- <el-row class="bar1">
        <i class="el-icon-service pic-tiny"></i>
        <h2 class="sub-title">领域专家</h2>
        <h2 class="sub-title">（134）</h2>
        <span class="more">加载更多</span>
      </el-row>
      <div class="special-list">
        <router-link to="../specialistDetail">
          <el-row class="special1">
            <el-col :span="3">
              <img src="../assets/person.jpg" class="spe-pic">
            </el-col>
            <el-col :span="21" class="spe-right">
              <h3 class="spe-name">李明学</h3>
              <span class="labe3">中国石油研究院</span>
              <span class="tag">石油提炼</span>
              <p class="spe-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-col>
          </el-row>
        </router-link>
        <router-link to="../specialistDetail">
          <el-row class="special1">
            <el-col :span="3">
              <img src="../assets/person.jpg" class="spe-pic">
            </el-col>
            <el-col :span="21" class="spe-right">
              <h3 class="spe-name">李明学</h3>
              <span class="labe3">中国石油研究院</span>
              <span class="tag">石油提炼</span>
              <p class="spe-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-col>
          </el-row>
        </router-link>
        <router-link to="../specialistDetail">
          <el-row class="special1">
            <el-col :span="3">
              <img src="../assets/person.jpg" class="spe-pic">
            </el-col>
            <el-col :span="21" class="spe-right">
              <h3 class="spe-name">李明学</h3>
              <span class="labe3">中国石油研究院</span>
              <span class="tag">石油提炼</span>
              <p class="spe-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-col>
          </el-row>
        </router-link>
        <router-link to="../specialistDetail">
          <el-row class="special1">
            <el-col :span="3">
              <img src="../assets/person.jpg" class="spe-pic">
            </el-col>
            <el-col :span="21" class="spe-right">
              <h3 class="spe-name">李明学</h3>
              <span class="labe3">中国石油研究院</span>
              <span class="tag">石油提炼</span>
              <p class="spe-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-col>
          </el-row>
        </router-link>
      </div> -->

      <!------领域成果------>
      <!-- <el-row class="bar1">
        <i class="el-icon-tickets pic-tiny"></i>
        <h2 class="sub-title">领域成果</h2>
        <h2 class="sub-title">（2100）</h2>
        <span class="more">加载更多</span>
        <div class="special-list">
          <router-link to="../outputDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../outputDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../outputDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../outputDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
        </div>
      </el-row> -->

      <!------领域专利------>
      <!-- <el-row class="bar1">
        <i class="el-icon-star-off pic-tiny"></i>
        <h2 class="sub-title">领域专利</h2>
        <h2 class="sub-title">（3400）</h2>
        <span class="more">加载更多</span>
        <div class="special-list">
          <router-link to="../patentDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../patentDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../patentDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../patentDetail">
            <el-row class="special1">
              <span class="patent-title">基于深度学习的图像检测系统的设计与实现</span>
              <span class="patent-author">李明学</span>
              <span class="patent-company">北京邮电大学</span>
              <span class="tag">图像检测</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
        </div>
      </el-row> -->

      <!------领域机构------>
      <el-row class="bar1">
        <i class="el-icon-view pic-tiny"></i>
        <h2 class="sub-title">领域机构</h2>
        <h2 class="sub-title">{{enterpriseList.length}}</h2>
        <span class="more">加载更多</span>
        <div class="special-list">
          <el-row class="special1" v-for="item in enterpriseList" :key="item.id">
            <router-link :to="{ name: 'companyDetail', query: { entity: item.comName }}">
                <span class="patent-title">{{item.comName}}</span>
                <span class="tag" v-for="tec in item.technologys.split(',')" :key="tec.id">{{tec}}</span>
                <!-- <span class="tag">图像检测</span>
                <span class="tag">通信原理</span>
                <span class="tag">计算机科学</span>
                <span class="tag">移动互联网</span>
                <span class="tag">人工智能</span>
                <span class="label3">发现3名名为"李明学"的专家</span>
                <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
                </p> -->
            </router-link>
          </el-row>
          <!-- <router-link to="../companyDetail">
            <el-row class="special1">
              <span class="patent-title">清华大学</span>
              <span class="tag">图像检测</span>
              <span class="tag">通信原理</span>
              <span class="tag">计算机科学</span>
              <span class="tag">移动互联网</span>
              <span class="tag">人工智能</span>
              <span class="label3">发现1名名为"李明学"的专家</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link>
          <router-link to="../companyDetail">
            <el-row class="special1">
              <span class="patent-title">中国石油研究院</span>
              <span class="tag">石油开采</span>
              <span class="tag">石油提炼</span>
              <span class="label3">发现1名名为"李明学"的专家</span>
              <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-row>
          </router-link> -->
        </div>
      </el-row>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import navHeader from "../components/header.vue"
  import navFooter from "../components/footer.vue"
  import treeMap from "../components/treeMap.vue"
  import axios from "axios"
  import echarts from 'echarts'
  // require.config({
  //           paths : {
  //               echarts : 'echarts/dist'
  //           }
  //       });
  // var ecConfig = require('echarts/build/config');

  export default {
    data() {
      return {
        input1: '',
        value1: 0,
        charts: '',
        enterpriseList: [],
        technologyList: [],
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100;
      },
      getEnterprise(e){
        axios.get("http://127.0.0.1:8088/enterpriseTechnologyImport/all/1/1",{
          datatype:'jsonp',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }).then((res, err) => {
           this.enterpriseList = res.data;
          //  this.technologyList = res.data.technologys.split("，");
            // console.log( res.data);
            // console.log(err);
        })
      },
    },
    created(){
      
    },
    mounted(){
      // console.log(this.readFile("../assets/technology"))
      // this.drawTecGraph();

      this.getEnterprise();
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
    watch: {

    },
    components:{
      navHeader, navFooter, treeMap
    }
  }
</script>

<style>
  a{
    text-decoration: none;
    color:#000;
  }
  .bread{
    display: inline-block;
    margin: 25px 20px 20px 20px;
  }
  .select1{
    display: inline-block;
    margin: 20px;
    margin-left: 500px;
    width: 300px;
  }
  .block{
    width: 90%;
    margin: 10px auto;
  }
/*----list----*/
  .pic-tiny, .sub-title, .more{
    display: inline-block;
  }
  .more{
    color: dodgerblue;
    float: right;
    margin-right: 20px;
    margin-top: 20px;
   }
  .special1{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }
  .spe-pic{
    width: 100px;
    height: 100px;
  }
  .spe-name{
    font-size: 18px;
    display: inline-block;
    margin: 5px 0;
  }
  .spe-des, .patent-des{
    font-size: 16px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    margin: 5px;
  }
  .tag{
    background-color: #CCEEFF;
    padding: 3px;
    margin-right: 20px;
  }
  /*------成果、专利--------*/
  .patent-title{
    font-weight: bold;
    color: darkblue;
  }
  .patent-author{
    color: dodgerblue;
  }
  .patent-title, .patent-author, .patent-company{
    margin: 10px 20px 20px 0;
  }
  .patent-des{
    margin-top: 10px;
  }
  /*------company-----*/
  .label3{
    color: dodgerblue;
    float:right;
  }
  #main{
    width: 100%;
    height: 500px;
    margin: auto;
  }
  /* -----graph----- */
  .node circle {
        stroke: steelblue;
        stroke-width: 1px;
        cursor:pointer;
    }
    .node {
        font: 12px sans-serif;
        display:block;
    }
    .hidenode {
        font: 12px sans-serif;
        display:none;
    }
    .link {
        fill: none;
        stroke: #ccc;
        stroke-width: 1px;
    }
</style>
