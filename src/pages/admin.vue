<template>
  <el-container style="height:100%;">
    <el-header>
      <admin-header></admin-header>
    </el-header>
    <el-container style="height:100%">
      <el-aside width="200px" height="100%">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" style="height: 100%">
          <el-menu-item index="1" @click="show=1">
            <i class="el-icon-setting"></i>
            <span slot="title">新建图谱</span>
          </el-menu-item>
          <el-menu-item index="2" @click="show=2">
            <i class="el-icon-menu"></i>
            <span slot="title">我的图谱</span>
          </el-menu-item>
          <el-menu-item index="3" @click="show=3">
            <i class="el-icon-edit"></i>
            <span slot="title">图谱编辑器</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <el-row v-show="show === 1" style="text-align:left;">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的图谱</el-breadcrumb-item>
            <el-breadcrumb-item>新建图谱</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="admin-background">
            <div class="admin-row">
              <span class="admin-label">图谱名称</span><br/>
              <el-input v-model="graphName" placeholder="请输入图谱名称" class="admin-input"></el-input><br/>
              <span class="admin-label">图谱说明</span><br/>
              <el-input v-model="graphDes" placeholder="请输入图谱说明" class="admin-input"></el-input><br/>
              <span class="admin-label">图谱节点（最多可输入三级节点）</span>
              <div class="node" v-for="(v,i) in list1" :key="v.index">
                <!-- <el-input v-model="list1[i].name" placeholder="请输入节点名称" class="admin-input"></el-input>
                <i class="el-icon-circle-plus" @click="addRow2(i)"></i>
                <i class="el-icon-delete" @click="deleteRow1(i)"></i>
                <div v-for="(v,j) in list2" :key="v.index">
                  <el-input v-model="list2[j].name" placeholder="请输入节点名称" class="admin-input admin-input2"></el-input>
                  <i class="el-icon-circle-plus" @click="addRow3(j)"></i>
                  <i class="el-icon-delete" @click="deleteRow2(j)"></i>
                  <div v-for="(v,k) in list3" :key="v.index">
                    <el-input v-model="list3[k].name" placeholder="请输入节点名称" class="admin-input admin-input3"></el-input>
                    <i class="el-icon-delete" @click="deleteRow3(j)"></i>
                  </div>
                </div> -->
                <el-input v-model="list1[i].name" placeholder="请输入节点名称" class="admin-input"></el-input>
                <i class="el-icon-circle-plus" @click="addRow2(i)"></i>
                <i class="el-icon-delete" @click="deleteRow1(i)"></i>
                <div v-for="(v,j) in list1[i].children" :key="v.index">
                  <el-input v-model="list1[i].children[j].name" placeholder="请输入节点名称" class="admin-input admin-input2"></el-input>
                  <i class="el-icon-circle-plus" @click="addRow3(i,j)"></i>
                  <i class="el-icon-delete" @click="deleteRow2(j)"></i>
                  <div v-for="(v,k) in list1[i].children[j].children" :key="v.index">
                    <el-input v-model="list1[i].children[j].children[k].name" placeholder="请输入节点名称" class="admin-input admin-input3"></el-input>
                    <i class="el-icon-circle-plus" @click="addRow3(i,j)"></i>
                    <i class="el-icon-delete" @click="deleteRow3(j)"></i>
                  </div>
                </div>
              </div>
              <el-row style="text-align: center;">
                <i class="el-icon-circle-plus add" @click="addRow1()"></i>
              </el-row>
            </div>
            <el-row style="width: 100%; text-align: center;">
              <el-button size="small" type="primary" class="save" @click="save1">保存</el-button>
            </el-row>
          </div>
        </el-row>
        <el-row v-show="show === 2">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的图谱</el-breadcrumb-item>
            <el-breadcrumb-item>新建图谱</el-breadcrumb-item>
          </el-breadcrumb>
          <el-row>
            <el-col :span="16">
              <div class="admin-graph-background" style="margin-right: 10px;">
                <h1 class="title1">技术图谱</h1>
                <div id="newGraph1"></div>
              </div>
            </el-col>

            <el-col :span="8">
              <div class="admin-graph-background upload-file-wrapper">
                <h1 class="title1">请上传企业目录</h1>
                <el-upload class="upload-demo" action="https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" :on-exceed="handleExceed" :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传csv文件，且不超过500kb</div>
                </el-upload>
                <el-row style="width: 100%; text-align: center;">
                  <el-button size="small" type="primary" class="save" @click="save2">保存</el-button>
                </el-row>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row v-show="show === 3">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>我的图谱</el-breadcrumb-item>
            <el-breadcrumb-item>图谱编辑器</el-breadcrumb-item>
          </el-breadcrumb>
          <graph-editor></graph-editor>
          <!-- <div class="admin-background" style="text-align: left;">
          <div class="companyListWrapper" v-for="item in companyList" :key="item.index">
            <div class="companyList">
              <span class="company">{{item}}</span>
              <el-tree
                :data="props1"
                show-checkbox
                :default-expanded-keys="[2, 3]"
                :default-checked-keys="[5]"
                :props="defaultProps">
              </el-tree>
            </div>
          </div>
           <el-row style="width: 100%; text-align: center;">
            <el-button size="small" type="primary" class="save" @click="save3">保存</el-button>
          </el-row>
        </div> -->
        </el-row>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import adminHeader from "../components/adminHeader.vue";
import axios from "axios";
import * as common from "../common/common.js";
import graphEditor from "../components/graphEditor.vue";
export default {
  data() {
    return {
      show: 1,
      graphName: "",
      graphDes: "",
      graphNode: "",
      list1: [{ name: "", children: [] }],
      props1: [
        {
          name: "人工智能",
          children: [
            {
              name: "人工智能技术",
              children: [{ name: "人脸识别", children: [] }]
            }
          ]
        }
      ],
      props2: {},
      list2: {},
      companyList: [],
      fileList: [],
      count: 1,
      thidTech: []
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    addRow1() {
      this.list1.push({ name: "", children: [] });
      // this.props1.push({"id":1,"label":"", "children": []});
    },
    deleteRow1(i) {
      this.list1.splice(i, 1);
      // this.props1.splice(i,1);
    },
    addRow2(i) {
      this.list1[i].children.push({ name: "", children: [] });
      // this.props1[i].children.push({"id":1,"label":"", "children":[]});
    },
    deleteRow2(i) {
      this.list1[i].children.splice(i, 1);
      // this.props1[i].children.splice(i,1);
    },
    addRow3(i, j) {
      this.list1[i].children[j].children.push({ name: "", children: [] });
      // this.props1[i].children[j].children.push({"id":1,"label":"", "children":[]});
    },
    deleteRow3(i) {
      this.list1[i].children[j].children.splice(j, 1);
      // this.props1[i].children[j].children.splice(j,1);
    },
    getCompanyData() {
      axios
        .get("../../static/company.csv", {
          datatype: "jsonp",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then((res, err) => {
          if (res) {
            // console.log(res)
            this.companyList = res.data.split(",");
            this.list1 = this.list1;
            console.log(this.list1);
          } else {
            console.log(err);
          }
        });
    },
    save1() {
      this.list2.name = this.graphName;
      this.list2.children = this.list1;
      // this.props2.label = this.graphName;
      // this.props2.children = this.props1;
      this.show = 2;
      // console.log(this.list2);
      this.drawTree("newGraph1", this.list2);
    },
    save2() {
      this.getCompanyData();
      this.show = 3;
    },
    save3() {
      // this.getThirdTech();
      console.log(this.props2);
      this.show = 3;
    },
    drawTree(id, data) {
      var echarts = require("echarts/lib/echarts");
      var myChart = echarts.init(document.getElementById(id));
      myChart.showLoading();
      myChart.hideLoading();

      var option = {
        tooltip: {
          trigger: "item",
          triggerOn: "mousemove"
        },
        series: [
          {
            type: "tree",
            legend: {
              width: 700,
              height: 300,
              orient: "horizontal"
            },
            data: [data],
            top: "18%",
            bottom: "14%",
            layout: "radial",
            symbol: "emptyCircle",
            symbolSize: 7,
            initialTreeDepth: 2,
            animationDurationUpdate: 750,
            expandAndCollapse: true
          }
        ]
      };
      myChart.setOption(option);
    },
    handleRemove(file, fileList) {
      console.log(file, fileList, "handleRemove");
    },
    handlePreview(file) {
      console.log(file, "handlePreview");
    },
    handleExceed(files, fileList) {
      console.log(files, fileList, "handleExceed");
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region1" }, { name: "region2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              name: "zone" + this.count++
            },
            {
              name: "zone" + this.count++
            }
          ];
        } else {
          data = [];
        }

        resolve(data);
      }, 500);
    },
    getThirdTech() {
      console.log(this.list1);
      for (var i in this.list1.children) {
        for (var j in this.list1.children[i].children) {
          for (var k in this.list1.children[i].children[j]) {
            this.thidTech.push(k.name);
            console.log(k.name);
          }
        }
      }
      // console.log(this.thidTech);
    },
    defaultProps: {
      children: "children",
      label: "name"
    }
  },
  mounted() {
    // this.getCompanyData();
    console.log(this.props1);
  },
  components: {
    adminHeader,
    graphEditor
  }
};
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
  background-color: #e9eef3;
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
  overflow-y: scroll;
}
.admin-row {
  width: 80%;
  margin: 0 auto;
}
.admin-label {
  height: 60px;
  line-height: 30px;
  vertical-align: middle;
  margin-right: 20px;
}
.admin-input {
  width: 80%;
  margin-bottom: 10px;
}
.admin-input2 {
  margin-left: 20px;
}
.admin-input3 {
  margin-left: 40px;
}
.add {
  margin: 10px auto;
}
.save {
  margin-top: 100px;
}
/* graph1 */
#newGraph1 {
  width: 500px;
  height: 500px;
}
.upload-file-wrapper {
  width: 95%;
  height: 500px;
}
.admin-graph-background {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
.title1 {
  font-size: 18px;
}
/* company */
.companyList {
  border-bottom: 1px dashed #ccc;
  padding: 10px;
  box-sizing: border-box;
}
.company {
  line-height: 40px;
  height: 40px;
  color: #999999;
}
.el-tree {
  display: inline-block;
}
</style>
