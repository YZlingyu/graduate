<template>
  <div>
    <nav-header></nav-header>
    <el-tabs type="border-card" class="tab1"  v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="专家" name="first" style="height: 183px;">
        <div class="label-tab">
          <span class="label1">研究领域：</span>
          <span class="label1" v-for="item in labels11" @click="getTags1"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">所属机构：</span>
          <span class="label1" v-for="item in labels12" @click="getTags1"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">成果数目：</span>
          <span class="label1" v-for="item in labels13" @click="getTags1"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">专利数目：</span>
          <span class="label1" v-for="item in labels14" @click="getTags1"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1" style="margin-right: 20px;">已选：</span>
          <el-tag
            v-for="tag in tags1" :key="tag.name" closable :type="tag.type" class="label2">
            {{tag.name}}
          </el-tag>
        </div>
      </el-tab-pane>
      <el-tab-pane label="成果" name="second" style="height: 183px;">
        <div class="label-tab">
          <span class="label1">研究领域：</span>
          <span class="label1" v-for="item in labels21" @click="getTags2"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">所属机构：</span>
          <span class="label1" v-for="item in labels22" @click="getTags2"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">课题来源：</span>
          <span class="label1" v-for="item in labels23" @click="getTags2"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">成果完成人：</span>
          <span class="label1" v-for="item in labels24" @click="getTags2"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1" style="margin-right: 20px;">已选：</span>
          <el-tag
            v-for="tag in tags2" :key="tag.name" closable :type="tag.type" class="label2">
            {{tag.name}}
          </el-tag>
        </div>
      </el-tab-pane>
      <el-tab-pane label="专利" name="third" style="height: 183px;">
        <div class="label-tab">
          <span class="label1">研究领域：</span>
          <span class="label1" v-for="item in labels31" @click="getTags3"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">所属机构：</span>
          <span class="label1" v-for="item in labels32" @click="getTags3"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">课题来源：</span>
          <span class="label1" v-for="item in labels33" @click="getTags3"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">成果完成人：</span>
          <span class="label1" v-for="item in labels34" @click="getTags3"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1" style="margin-right: 20px;">已选：</span>
          <el-tag
            v-for="tag in tags3" :key="tag.name" closable :type="tag.type" class="label2">
            {{tag.name}}
          </el-tag>
        </div>
      </el-tab-pane>
      <el-tab-pane label="机构" name="fourth" style="height: 183px;">
        <div class="label-tab">
          <span class="label1">单位所属省市：</span>
          <span class="label1" v-for="item in labels41" @click="getTags4"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1">单位属性：</span>
          <span class="label1" v-for="item in labels42" @click="getTags4"><span>{{item.item}}</span><span>({{item.num}})</span></span>
        </div>
        <div class="label-tab">
          <span class="label1" style="margin-right: 20px;">已选：</span>
          <el-tag
            v-for="tag in tags4" :key="tag.name" closable :type="tag.type" class="label2">
            {{tag.name}}
          </el-tag>
        </div>
      </el-tab-pane>
    </el-tabs>

    <div style="width: 90%; margin:0 auto 20px auto;" id="block1" v-bind:class="{ifShow: show1}">
      <span class="search-outcome">共为您搜索到了符合要求的</span>
      <span class="search-outcome">5</span>
      <span class="search-outcome">位专家</span>
      <div class="special-list">
        <router-link to="../specialistDetail">
          <el-row class="special1">
            <el-col :span="3">
              <img src="../assets/person.jpg" class="spe-pic">
            </el-col>
            <el-col :span="21" class="spe-right">
              <h3 class="spe-name">李明学</h3>
              <span class="labe3">北京邮电大学</span>
              <span class="tag">人脸识别</span>
              <span class="tag">图像检测</span>
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
              <span class="labe3">北京邮电大学</span>
              <span class="tag">人脸识别</span>
              <span class="tag">图像检测</span>
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
              <span class="labe3">北京邮电大学</span>
              <span class="tag">人脸识别</span>
              <span class="tag">图像检测</span>
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
              <span class="labe3">北京邮电大学</span>
              <span class="tag">人脸识别</span>
              <span class="tag">图像检测</span>
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
              <span class="labe3">北京邮电大学</span>
              <span class="tag">人脸识别</span>
              <span class="tag">图像检测</span>
              <p class="spe-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
              </p>
            </el-col>
          </el-row>
        </router-link>

      </div>
    </div>
    <div style="width: 90%; margin:0 auto 20px auto;;" id="block2" v-bind:class="{ifShow: show2}">
      <span class="search-outcome">共为您搜索到了符合要求的</span>
      <span class="search-outcome">47</span>
      <span class="search-outcome">个成果</span>
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
    </div>
    <div style="width: 90%; margin:0 auto 20px auto;" id="block3" v-bind:class="{ifShow: show3}">
      <span class="search-outcome">共为您搜索到了符合要求的</span>
      <span class="search-outcome">47</span>
      <span class="search-outcome">个专利</span>
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
    </div>
    <div style="width: 90%; margin:0 auto 20px auto;;" id="block4" v-bind:class="{ifShow: show4}">
      <span class="search-outcome">共为您搜索到了符合要求的</span>
      <span class="search-outcome">3</span>
      <span class="search-outcome">家机构</span>
      <div class="special-list">
        <router-link to="../companyDetail">
          <el-row class="special1">
            <span class="patent-title">北京邮电大学</span>
            <span class="tag">图像检测</span>
            <span class="tag">通信原理</span>
            <span class="tag">计算机科学</span>
            <span class="tag">移动互联网</span>
            <span class="tag">人工智能</span>
            <span class="label3">发现3名名为"李明学"的专家</span>
            <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
            </p>
          </el-row>
        </router-link>
        <router-link to="../companyDetail">
          <el-row class="special1">
            <span class="patent-title">北京邮电大学</span>
            <span class="tag">图像检测</span>
            <span class="tag">通信原理</span>
            <span class="tag">计算机科学</span>
            <span class="tag">移动互联网</span>
            <span class="tag">人工智能</span>
            <span class="label3">发现3名名为"李明学"的专家</span>
            <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
            </p>
          </el-row>
        </router-link>
        <router-link to="../companyDetail">
          <el-row class="special1">
            <span class="patent-title">北京邮电大学</span>
            <span class="tag">图像检测</span>
            <span class="tag">通信原理</span>
            <span class="tag">计算机科学</span>
            <span class="tag">移动互联网</span>
            <span class="tag">人工智能</span>
            <span class="label3">发现3名名为"李明学"的专家</span>
            <p class="patent-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
            </p>
          </el-row>
        </router-link>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>

</template>

<script>
  import navHeader from "../components/header.vue"
  import navFooter from "../components/footer.vue"
  import axios from 'axios'
  export default {
    data() {
      return {
        labels11:[
          {item: '人脸识别', num:'1'},
          {item: '图像检测', num:'1'},
          {item: '文本提取', num:'1'},
          {item: '关系识别', num:'1'},
          {item: '水力发电', num:'1'},
          {item: '石油提炼', num:'1'},
          {item: '智能硬件', num:'1'}
        ],
        labels12:[
          {item: '北京邮电大学', num:'3'},
          {item: '清华大学', num:'1'},
          {item: '中国石油研究院', num:'1'}
        ],
        labels13:[
          {item: '20项以上(a)', num:'2'},
          {item: '10~20项(a)', num:'2'},
          {item: '5~10项(a)', num:'1'},
          {item: '1~5项(a)', num:'1'},
          {item: '0(a)', num:'0'}
        ],
        labels14:[
          {item: '20项以上(b)', num:'2'},
          {item: '10~20项(b)', num:'2'},
          {item: '5~10项(b)', num:'1'},
          {item: '1~5项(b)', num:'1'},
          {item: '0(b)', num:'0'}
        ],
        labels21:[
          {item: '人脸识别', num:'1'},
          {item: '图像检测', num:'1'},
          {item: '文本提取', num:'1'},
          {item: '关系识别', num:'1'},
          {item: '水力发电', num:'1'},
          {item: '石油提炼', num:'1'},
          {item: '智能硬件', num:'1'}
        ],
        labels22:[
          {item: '北京邮电大学', num:'3'},
          {item: '清华大学', num:'1'},
          {item: '中国石油研究院', num:'1'}
        ],
        labels23:[
          {item: '国家科技计划', num:'20'},
          {item: '自选课题', num:'10'},
          {item: '民间基金', num:'5'},
          {item: '横向委托', num:'5'},
          {item: '国际合作', num:'3'},
          {item: '地方基金', num:'2'},
          {item: '部门基金', num:'1'},
        ],
        labels24:[
          {item: '李明学', num:'47'}
        ],
        labels31:[
          {item: '人脸识别', num:'1'},
          {item: '图像检测', num:'1'},
          {item: '文本提取', num:'1'},
          {item: '关系识别', num:'1'},
          {item: '水力发电', num:'1'},
          {item: '石油提炼', num:'1'},
          {item: '智能硬件', num:'1'}
        ],
        labels32:[
          {item: '北京邮电大学', num:'3'},
          {item: '清华大学', num:'1'},
          {item: '中国石油研究院', num:'1'}
        ],
        labels33:[
          {item: '国家科技计划', num:'20'},
          {item: '自选课题', num:'10'},
          {item: '民间基金', num:'5'},
          {item: '横向委托', num:'5'},
          {item: '国际合作', num:'3'},
          {item: '地方基金', num:'2'},
          {item: '部门基金', num:'1'},
        ],
        labels34:[
          {item: '李明学', num:'47'}
        ],
        labels41:[
          {item: '北京市', num:'3'}
        ],
        labels42:[
          {item: '独立科研机构', num:'1'},
          {item: '大专院校', num:'2'}
        ],
        tags1: [],
        tags2: [],
        tags3: [],
        tags4: [],
        activeName:'first',
        show1: false,
        show2: true,
        show3: true,
        show4: true
      }
    },
    methods: {
      handleClick(tab, event) {
        switch(event.path[0].innerHTML){
          case "专家":
            this.show1=false;
            this.show2=true;
            this.show3=true;
            this.show4=true;
            break;
          case "成果":
            this.show1=true;
            this.show2=false;
            this.show3=true;
            this.show4=true;
            break;
          case "专利":
            this.show1=true;
            this.show2=true;
            this.show3=false;
            this.show4=true;
            break;
          case "机构":
            this.show1=true;
            this.show2=true;
            this.show3=true;
            this.show4=false;
            break;
        }
      },
      getTags1(){
        this.tags1.push({name:event.path[0].innerHTML});
      },
      getTags2(){
        this.tags2.push({name:event.path[0].innerHTML});
      },
      getTags3(){
        this.tags3.push({name:event.path[0].innerHTML});
      },
      getTags4(){
        this.tags4.push({name:event.path[0].innerHTML});
      }
    },
    created(){
    },
    mounted(){
     // var value = this.getUrlParam('value');
      //console.log(value);
      // axios.get("http://127.0.0.1:3000/professors/",{
      //   /*params:{
      //     name : value
      //   },*/
      //   datatype:'jsonp',
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded',
      //   }
      // }).then(function (res) {
      //   //成功获取数据
      //   console.log(res.data);
      //   var txt="";
      //   if(res.status==200){
      //     for(var i=0; i<res.data.length; i++){
      //       var tag=res.data[i].technology.split(",");
      //       var tagLabel = '';
      //       for(var j=0;j<tag.length;j++){
      //         tagLabel+='<span class="tag">'+tag[j]+'</span>';
      //       }

      //       txt+='<a href="#/specialistDetail?name='+res.data[i].name+'">'+
      //         '<div class="special1 el-row"><div class="el-col el-col-3">' +
      //         '<img src="" class="spe-pic"></div>' +
      //         '<div class="spe-right el-col el-col-21"><h3 class="spe-name">' +res.data[i].name+
      //       '</h3><span class="label5">'+ res.data[i].company +'</span>' +tagLabel+
      //       '<p class="spe-des">'+res.data[i].describe+'</p></div></div></a>';

      //       document.getElementsByClassName("special-list")[0].innerHTML=txt;
      //     }
      //   }else{

      //   }
      // }).catch(function (err) {
      //   //请求错误
      //   console.log(err);
      // });
    },
    watch: {

    },
    components:{
      navHeader, navFooter
    }
  }
</script>

<style>
  *{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color: #000 !important;
  }
  .tab1{
    width: 90%;
    margin: 20px auto;
  }
  .label1{
    margin-left: 15px;
    height: 30px;
    line-height: 30px;
  }
  .label2{
    margin-left: 25px;
  }
  .search-outcome{
    color: dodgerblue;
  }
  .ifShow{
    display:none;
  }
  /*------专家-----*/
  .special-list{
    margin-top: 20px;
  }
  .special1{
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .spe-pic{
    width: 100px;
    height: 100px;
  }
  .spe-name{
    font-size: 18px;
    display: inline-block;
    margin-right: 5px;
  }
  .label5{
    margin-right: 5px;
  }
  .spe-des{
    margin-top: 10px;
  }
  .spe-des, .patent-des{
    font-size: 16px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
  .tag{
    background-color: #CCEEFF;
    padding: 3px;
    margin-right: 3px;
  }
  .spe-right{
    padding-top: 12px;
    font-weight: normal;
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
  /*.el-tab-pane{
    height: 183px !important;
  }*/
</style>
