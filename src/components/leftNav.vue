<template>
  <div>
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" class="tab-left">
      <el-tab-pane label="相关实体   " name="first">
        <i class="el-icon-document"></i>
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
        </div>
        <div id="company-link">
          <i class="el-icon-document"></i>
          <span class="title-output">链接机构</span><span class="title-output">3</span><span class="title-output">所</span>
          <div class="output-list">
            <div class="order">1</div>
            <span class="output-word">北京邮电大学</span>
            <span class="tag">图像检测</span>
            <span class="tag">人脸识别</span>
            <span class="tag">…</span>
            <p class="output-des">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
            </p>
          </div>
        </div>

      </el-tab-pane>
      <el-tab-pane label="基本信息" name="second">
        <i class="el-icon-document"></i>
        <span class="title-output">人脸识别</span>
        <p class="output-detail">Maecenas pretium justo at nunc imperdiet, id bibendum ipsum feugiat. Nunc vel nisi at risus rutrum venenatis eu a est. Nam suscipit pretium placerat. Quisque aliquet dictum sagittis. Mauris felis neque, imperdiet consectetur iaculis eu, dignissim at orci. Nullam pretium orci elit, quis elementum arcu pharetra id. Donec pretium velit a ipsum ullamcorper sodales. Pellentesque ut neque pulvinar, congue ipsum id, euismod ex. Donec lacinia orci id risus tempor fermentum.
        </p>
      </el-tab-pane>
    </el-tabs>
    <div class="pop-trigger">
      <i class="el-icon-caret-top"></i>
      <span @click="popOut">数据过多，尝试筛选功能？</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName2: 'first'
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      popOut(){

      }
    }
  }
</script>

<style>
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
    background-color: #CCEEFF;
    height: 70px;
    line-height: 70px;
    text-align: center;
  }
</style>
