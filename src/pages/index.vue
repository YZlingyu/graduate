2<template>
  <div id="container">
    <div id="slide1" v-bind:style="{height:height1+'px',width:width1+'px'}">
      <el-row style="background-color: #fff;">
        <router-link to="../">
          <img src="../assets/logo.png" class="logo">
        </router-link>
        <router-link to="/question"><span class="find1">问一问</span></router-link>
      </el-row>

      <!-----search------>
      <el-row style="text-align: center;">
        <div class="search-bar">
          <span :class="['search-label', {'active':(searchType === 0)}]" @click="changeType(0)">全部</span>
          <span :class="['search-label', {'active':(searchType === 1)}]" @click="changeType(1)">企业</span>
          <span :class="['search-label', {'active':(searchType === 2)}]" @click="changeType(2)">专家</span>
          <span :class="['search-label', {'active':(searchType === 3)}]" @click="changeType(3)">技术</span>
          <span :class="['search-label', {'active':(searchType === 4)}]" @click="changeType(4)">成果</span>
          <span :class="['search-label', {'active':(searchType === 5)}]" @click="changeType(5)">专利</span>
        </div>
        <el-input placeholder="请输入专家名称、成果名称、技术等，以空格隔开"  v-model="entity" class="input-with-select-index">
          <el-button slot="append" style="background-color: #AE99E5; color:#fff;" @click="searchEntity">搜一下</el-button>
        </el-input>
        <div class="tip">
          <span class="tip-content">热搜：</span>
          <span class="tip-content">人工智能</span>
          <span class="tip-content">人脸识别</span>
          <span class="tip-content">货架商品识别</span>
          <i class="el-icon-refresh tip-content"></i>
          <span class="tip-content">换一批</span>
        </div>
      </el-row>

      <router-link to="/techniqueChain"><el-button round class="tech-button">查看技术链</el-button></router-link>

      <!------pic------>
      <!--<div class="pic-group">
        <router-link to="/techniqueChain"><img class="pic" src="../assets/人工智能产业链.png"></router-link>
        <img class="pic" src="../assets/新能源产业链.png">
        <img class="pic" src="../assets/科技金融产业链.png">
        <img class="pic" src="../assets/智慧医疗产业链.png">
        <img class="pic" src="../assets/大数据产业链.png">
      </div>-->

    </div>
    <div id="slide2" v-bind:style="{width:width1+'px'}">
      <div style="padding: 20px 50px; box-sizing: border-box; margin: 20px auto; width: 90%;">
        <h2 class="light">新闻信息</h2>
        <span class="more">查看更多</span>
        <el-row style="margin-bottom: 20px;">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="热门新闻" name="first">
              <el-row class="news_row" v-for="item in newsList" :key="item.newsId">
               <el-col :span="4">
                  <img src="../assets/404.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">{{item.title}}</h4>
                  <span class="news_date">{{item.time}}</span>
                  <p class="news_content">{{item.abs}}</p>
                </el-col>
              </el-row>
              <!-- <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">5000万用户数据被盗！它能解决让Facebook头疼的问题？</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">5000万用户数据被盗！它能解决让Facebook头疼的问题？</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">5000万用户数据被盗！它能解决让Facebook头疼的问题？</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">据纽约时报、CNBC等多家外媒报道，英国大数据公司“剑桥分析公司（Cambridge Analytica）” 在 2016 年与特朗普竞选团队合作时，竟然私自窃取 5000 万 Facebook 用户的数据！</p>
                </el-col>
              </el-row> -->
            </el-tab-pane>
            <el-tab-pane label="重点事件" name="second">
              <!-- <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic2.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">第三方影像中心进入跑马圈地时代，B轮融资后「一脉阳光」要怎么走</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">随着医改的推动，独立影像中心政策限制的放开，第三方独立医学影像中心成为一个备受关注的领域。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic2.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">第三方影像中心进入跑马圈地时代，B轮融资后「一脉阳光」要怎么走</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">随着医改的推动，独立影像中心政策限制的放开，第三方独立医学影像中心成为一个备受关注的领域。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic2.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">第三方影像中心进入跑马圈地时代，B轮融资后「一脉阳光」要怎么走</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">随着医改的推动，独立影像中心政策限制的放开，第三方独立医学影像中心成为一个备受关注的领域。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic2.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">第三方影像中心进入跑马圈地时代，B轮融资后「一脉阳光」要怎么走</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">随着医改的推动，独立影像中心政策限制的放开，第三方独立医学影像中心成为一个备受关注的领域。</p>
                </el-col>
              </el-row> -->
              <el-row class="news_row" v-for="item in newsList" :key="item.newsId">
                <el-col :span="4">
                  <img src="../assets/404.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">{{item.title}}</h4>
                  <span class="news_date">{{item.time}}</span>
                  <p class="news_content">{{item.abs}}</p>
                </el-col>
              </el-row>
            </el-tab-pane>
            <el-tab-pane label="企业动态" name="third">
              <el-row class="news_row" v-for="item in newsList" :key="item.newsId">
                <el-col :span="4">
                  <img src="../assets/404.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">{{item.title}}</h4>
                  <span class="news_date">{{item.time}}</span>
                  <p class="news_content">{{item.abs}}</p>
                </el-col>
              </el-row>
              <!-- <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic3.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">特斯拉的荣光时刻：Autopilot大更新、Model 3起量、CEO绩效激励获批</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">在Space X把一辆特斯拉Roadster送上天的喧嚣后，特斯拉陷入了短暂的沉寂。不过近期的各种动作表明，特斯拉正在回到正轨。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic3.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">特斯拉的荣光时刻：Autopilot大更新、Model 3起量、CEO绩效激励获批</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">在Space X把一辆特斯拉Roadster送上天的喧嚣后，特斯拉陷入了短暂的沉寂。不过近期的各种动作表明，特斯拉正在回到正轨。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic3.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">特斯拉的荣光时刻：Autopilot大更新、Model 3起量、CEO绩效激励获批</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">在Space X把一辆特斯拉Roadster送上天的喧嚣后，特斯拉陷入了短暂的沉寂。不过近期的各种动作表明，特斯拉正在回到正轨。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic3.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">特斯拉的荣光时刻：Autopilot大更新、Model 3起量、CEO绩效激励获批</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">在Space X把一辆特斯拉Roadster送上天的喧嚣后，特斯拉陷入了短暂的沉寂。不过近期的各种动作表明，特斯拉正在回到正轨。</p>
                </el-col>
              </el-row> -->
            </el-tab-pane>
            <el-tab-pane label="负面新闻" name="fourth">
              <el-row class="news_row" v-for="item in newsList" :key="item.newsId">
                <el-col :span="4">
                  <img src="../assets/404.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">{{item.title}}</h4>
                  <span class="news_date">{{item.time}}</span>
                  <p class="news_content">{{item.abs}}</p>
                </el-col>
              </el-row>
              <!-- <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic4.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">还有这种操作？曝亚马逊被国外不法分子利用，成洗钱途径</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">我不相信亚马逊对此并不知情，他们不愿意介入阻止。我相信亚马逊没有审查他们的新账户，纵容他们盗取身份进行税务欺诈</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic4.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">还有这种操作？曝亚马逊被国外不法分子利用，成洗钱途径</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">我不相信亚马逊对此并不知情，他们不愿意介入阻止。我相信亚马逊没有审查他们的新账户，纵容他们盗取身份进行税务欺诈</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic4.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">还有这种操作？曝亚马逊被国外不法分子利用，成洗钱途径</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">我不相信亚马逊对此并不知情，他们不愿意介入阻止。我相信亚马逊没有审查他们的新账户，纵容他们盗取身份进行税务欺诈</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic4.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">还有这种操作？曝亚马逊被国外不法分子利用，成洗钱途径</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">我不相信亚马逊对此并不知情，他们不愿意介入阻止。我相信亚马逊没有审查他们的新账户，纵容他们盗取身份进行税务欺诈</p>
                </el-col>
              </el-row> -->
            </el-tab-pane>
            <el-tab-pane label="研究报告" name="fifth">
              <el-row class="news_row" v-for="item in newsList" :key="item.newsId">
                <el-col :span="4">
                  <img src="../assets/404.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">{{item.title}}</h4>
                  <span class="news_date">{{item.time}}</span>
                  <p class="news_content">{{item.abs}}</p>
                </el-col>
              </el-row>
              <!-- <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic5.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">网络时代，5步告诉你如何保护个人隐私</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">网络时代的个人信息安全已经成为一个人们愈发关心的话题。那么我们应该如何保护个人隐私呢？来看看国外达人们给出的5个tips吧。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic5.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">网络时代，5步告诉你如何保护个人隐私</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">网络时代的个人信息安全已经成为一个人们愈发关心的话题。那么我们应该如何保护个人隐私呢？来看看国外达人们给出的5个tips吧。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic5.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">网络时代，5步告诉你如何保护个人隐私</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">网络时代的个人信息安全已经成为一个人们愈发关心的话题。那么我们应该如何保护个人隐私呢？来看看国外达人们给出的5个tips吧。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic5.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">网络时代，5步告诉你如何保护个人隐私</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">网络时代的个人信息安全已经成为一个人们愈发关心的话题。那么我们应该如何保护个人隐私呢？来看看国外达人们给出的5个tips吧。</p>
                </el-col>
              </el-row> -->
            </el-tab-pane>
            <el-tab-pane label="行业动态" name="sixth">
              <el-row class="news_row" v-for="item in newsList" :key="item.newsId">
                <el-col :span="4">
                  <img src="../assets/404.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">{{item.title}}</h4>
                  <span class="news_date">{{item.time}}</span>
                  <p class="news_content">{{item.abs}}</p>
                </el-col>
              </el-row>
              <!-- <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic6.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">从人工智能看区块链 ，一再重复的历史 | 正本清源谈区块链</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">对比人工智能和区块链，或许能够帮我们更好地理解区块链会给我们带来什么。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic6.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">从人工智能看区块链 ，一再重复的历史 | 正本清源谈区块链</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">对比人工智能和区块链，或许能够帮我们更好地理解区块链会给我们带来什么。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic6.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">从人工智能看区块链 ，一再重复的历史 | 正本清源谈区块链</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">对比人工智能和区块链，或许能够帮我们更好地理解区块链会给我们带来什么。</p>
                </el-col>
              </el-row>
              <el-row class="news_row">
                <el-col :span="4">
                  <img src="../assets/news_pic6.png" class="news_pic">
                </el-col>
                <el-col :span="20" class="news_right">
                  <h4 class="news_title">从人工智能看区块链 ，一再重复的历史 | 正本清源谈区块链</h4>
                  <span class="news_date">2018-3-22 16:00</span>
                  <p class="news_content">对比人工智能和区块链，或许能够帮我们更好地理解区块链会给我们带来什么。</p>
                </el-col>
              </el-row> -->
            </el-tab-pane>
          </el-tabs>
        </el-row>
      </div>

    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
  import navFooter from "../components/footer.vue"
  import axios from 'axios'
  var screenWidth = document.body.clientWidth;
  var screenHeight = document.body.clientHeight;
  //console.log(screenHeight);
  export default {
    //name: 'app',
    data() {
      return {
        width1: screenWidth,
        height1: screenHeight,
        searchType: 0,
        entity: '',
        activeName: 'first',
        newsList: []
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
        console.log(this.newsList)
      },
      getNews(){
        axios.get("http://127.0.0.1:8088/news/all/1/1",{
        datatype:'jsonp',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        }
        }).then(res => {
            this.newsList = res.data;
        })
      },
      searchEntity(){
        var entity = this.entity;
        if(entity){
          switch(this.searchType)
          {
            case 0:
            window.location.href = "http://127.0.0.1:8080/#/companyDetail?entity="+entity;
            break;
            case 1:
            window.location.href = "http://127.0.0.1:8080/#/companyDetail?entity="+entity;
            break;
            case 2:
            window.location.href = "http://127.0.0.1:8080/#/specialistDetail?entity="+entity;
            break;
            case 3:
            window.location.href = "http://127.0.0.1:8080/#/technologyDetail?entity="+entity;
            break;
            case 4:
            window.location.href = "http://127.0.0.1:8080/#/outputDetail?entity="+entity;
            break;
            case 5:
            window.location.href = "http://127.0.0.1:8080/#/patentDetail?entity="+entity;
            break;
          }
        }
      },
      changeType(x){
        this.searchType = x;
      }
    },
    created(){
      this.getNews();
    },
    mounted(){
      const that = this
      window.onresize = () => {
        return (() => {
          window.width1 = document.body.clientWidth
          window.height1 = document.body.clientHeight
          that.width1 = window.width1
          that.height1 = window.height1
        })()
      };
    },
    watch: {
      width1 (val) {
        if (!this.timer) {
          this.width1 = val;
          this.timer = true;
          let that = this;
          setTimeout(function () {
            that.timer = false;
          }, 400)
        }
      },
      height1 (val) {
        if (!this.timer) {
          this.height1 = val;
          this.timer = true;
          let that = this;
          setTimeout(function () {
            that.timer = false;
          }, 400)
        }
      }
    },
    components:{
      navFooter
    }
  }
</script>

<style>
  #slide1{
    height: 100%;
    width: 100%;
    background: -webkit-linear-gradient(#172A7F, #006699); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(#172A7F,#006699); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(#172A7F,#006699); /* Firefox 3.6 - 15 */
    background: linear-gradient(#172A7F,#006699); /* 标准 */
    text-align: center;
  }
  #slide2{
    width: 100%;
    background-color: #ffffff;
  }
  a{
    text-decoration: none;
    color: #000000;
  }
  /*----top-nav-----*/
  .logo{
    width: 60px;
    height: 60px;
    margin: 10px 80px 10px 30px;
    float: left;
  }
  .find1{
    float:right;
    color: #000;
    line-height: 80px;
    margin-right: 100px;
  }
  .middle{
    width: 300px;
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    float: left;
  }
  .right{
    width: 300px;
    height: 80px;
    line-height: 80px;
    margin-right: 60px;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    float:right;
  }

  /*-----search----*/
  .search-bar{
    width: 100%;
    padding: 0 25%;
    box-sizing: border-box;
    text-align: center;
    margin-top: 200px;
    display: flex;
    justify-content: space-between;
  }
  .search-label{
    width: 100px;
    color: #ffffff;
    font-weight: bolder;
    font-size: 16px;
    padding: 10px 0 30px 0;
  }
  .input-with-select-index{
    width: 60%;
    margin: 0 auto 30px auto;
  }
  .tip-content{
    color: #fff;
    margin-right: 10px;
  }
  .el-input-group__append{
    background-color: #AE99E5;
    color: #fff;
  }
  .active{
    background-color: #fff;
    color: #006699;
  }

  /*------pic------*/
  .pic-group{
    width: 100%;
    margin: 182px auto;
  }
  .pic{
    width: 20%;
    height: 200px;
    display: inline;
    margin-right: -4px;
    padding: 0;
    border: none;
  }

  .tech-button{
    width:200px;
    margin: 100px auto;
  }
  /*-----slide2----*/
  .light{
    display: inline-block;
  }
  .more{
    color: dodgerblue;
    display: inline-block;
    float: right;
    margin-top: 20px;
  }
  .pic-container{
    width: 230px;
    margin: 0 auto;
  }
  .case{
    padding: 0 50px;
    box-sizing: border-box;
  }
  .case-des{
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  /*----news----*/
  .news_row{
    border-bottom: 1px solid #ccc;
    padding-bottom: 5px;
    padding-top:5px;
  }
  .news_title{
    margin: 0;
  }
  .news_date{
    color:#409EFF;
    font-size: 12px;
  }
  .news_content{
    margin: 0;
  }
  .news_pic{
    width: 100%;
  }
  .news_right{
    padding-left:15px;
  }
</style>
