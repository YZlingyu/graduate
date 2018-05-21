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
          <span slot="title">导入数据</span>
        </el-menu-item>
        <el-menu-item index="2" @click="show=2">
          <i class="el-icon-menu"></i>
          <span slot="title">历史数据</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <el-row v-show="show === 1" style="text-align:left;">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的数据库</el-breadcrumb-item>
          <el-breadcrumb-item>导入数据</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="admin-background">
          <el-row class="admin-row">
            <span class="admin-label">领域名称</span>
            <el-input v-model="rangeName" placeholder="请输入领域名" class="admin-input"></el-input>
          </el-row>
          <el-row class="admin-row">
            <span class="admin-label" style="line-height: 20px;vertical-align: top;">上传数据文件</span>
            <el-upload
              class="upload"
              action="https://jsonplaceholder.typicode.com/posts/"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :before-remove="beforeRemove"
              multiple
              :limit="3"
              :on-exceed="handleExceed">
              <el-button size="small" type="primary">点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传sql/csv文件，且不超过500kb</div>
            </el-upload>
          </el-row>
          <el-button size="small" type="primary" class="save">保存</el-button>
        </div>
      </el-row>
      <el-row v-show="show === 2">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的数据库</el-breadcrumb-item>
          <el-breadcrumb-item>历史数据</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="admin-background admin-background2">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="日期"
              width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="领域名称"
              width="180">
              <template slot-scope="scope">
                <el-popover trigger="hover" placement="top">
                  <p>领域简介: {{ scope.row.des }}</p>
                  <div slot="reference" class="name-wrapper">
                    <el-tag size="medium">{{ scope.row.name }}</el-tag>
                  </div>
                </el-popover>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-row>
      <el-row v-show="show === 3">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>我的数据库</el-breadcrumb-item>
          <el-breadcrumb-item>历史数据</el-breadcrumb-item>
          <el-breadcrumb-item>编辑数据</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="admin-background" style="text-align: left;">
          <span class="admin-label">数据库名称:</span>
          <span class="admin-label" style="color: #999999;">人工智能</span><br/>
          <span class="admin-label">数据库表</span><br/>
          <el-table
            :data="databaseData"
            style="width: 100%">
            <el-table-column
              label="表名称"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="创建时间"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column
              label="行数"
              width="180">
              <template slot-scope="scope">
                <span style="margin-left: 10px">{{ scope.row.num }}</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete2(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
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
        show: 1,
        rangeName: '',
        fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
        tableData: [{
          date: '2016-05-02',
          name: '人工智能',
          des: '人工智能（Artificial Intelligence），英文缩写为AI。它是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。'
        }, {
          date: '2016-05-04',
          name: '新材料能源',
          des: '新材料技术则是按照人的意志，通过物理研究、 材料设计、材料加工、试验评价等一系列研究过程，创造出能满足各种需要的新型材料的技术。'
        }],
        databaseData: [{
          date: '2016-05-02',
          name: 'abs_import',
          num: 6,
        }, {
          date: '2016-05-04',
          name: 'abs_original',
          num: 4,
        },
        {
          date: '2016-05-04',
          name: 'enterprise_base_import',
          num: 5,
        },
        {
          date: '2016-05-04',
          name: 'enterprise_base_original',
          num: 3,
        },
        {
          date: '2016-05-04',
          name: 'enterprise_enterprise_import',
          num: 50,
        },
        {
          date: '2016-05-04',
          name: 'enterprise_enterprise_original',
          num: 25,
        },
        {
          date: '2016-05-04',
          name: 'enterprise_technology_import',
          num: 25,
        },
        {
          date: '2016-05-04',
          name: 'enterprise_technology_original',
          num: 13,
        },
        {
          date: '2016-05-04',
          name: 'news_base_original',
          num: 12,
        }]
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      handleEdit(index, row) {
        console.log(index, row);
        this.show=3;
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.tableData.splice(index,1);
      },
      handleDelete2(index, row) {
        console.log(index, row);
        this.databaseData.splice(index,1);
      }
    },
    mounted(){
      
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
  /* admin */
  .admin-background {
    background-color: #ffffff;
    border-radius: 5px;
    width: 95%;
    height: 700px;
    margin-top: 20px;
    padding: 20px;
  }
  .upload {
    width: 80%;
    display: inline-block;
  }
  .admin-row {
    margin-bottom: 20px;
  }
  .admin-label {
    height: 60px;
    line-height: 30px;
    vertical-align: middle;
    margin-right: 20px;
  }
  .admin-input {
    width: 80%;
  }
  .save {
    margin: 50px auto 0 500px;
  }
  .el-row::before {
    display: inline-block;
  }
  .el-table tr {
    text-align: left;
  }
</style>
