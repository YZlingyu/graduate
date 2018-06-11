<template>
  <el-row>
    <el-col :span="16">
      <div class="admin-graph-background left">
        <div id="graph"></div>
      </div>
    </el-col>

    <el-col :span="8">
      <div class="admin-graph-background right">
        <el-tabs type="card" v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="节点设置" name="first">
            <el-row>
              <div class="title">基本信息</div>
            </el-row>
            <el-row>
              <el-col :span="8">
                <p>Label:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="label" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-col :span="8">
                <p>Name:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="name" placeholder="" v-bind:disabled="disabledInput"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-col :span="8">
                <p>ID:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="id" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-col :span="8">
                <p>Father:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="father" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-button type="primary" plain size="medium" class="size" @click="modify">修改
                </el-button/>
                <el-button type="primary" plain size="medium" class="size" @click="save">保存</el-button>
                <el-button type="danger" plain size="medium" class="size" @click="deletee">删除</el-button>&nbsp;&nbsp;&nbsp;
                <el-button type="warning" plain size="medium" class="size" @click="appear">添加子节点</el-button>
            </el-row>
            <div style="height:16px;"></div>
            <div id="add" style="display:none">
              <el-row>
                <div class="title">添加子节点</div>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <p>Label:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_label" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>Name:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_name" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>FatherID:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="id" placeholder="" :disabled="true"></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>R_Label:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_rlabel" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>R_Name:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_rname" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-button type="primary" plain size="medium" @click="addyes">确定</el-button>
              </el-row>
            </div>
          </el-tab-pane>

          <el-tab-pane label="关系设置" name="second">
            <el-row>
              <div class="title">基本信息</div>
            </el-row>
            <el-row>
              <el-col :span="8">
                <p>Father:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="rfather" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-col :span="8">
                <p>Son:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="rson" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-col :span="8">
                <p>R_Label:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="rlabel" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-col :span="8">
                <p>R_Name:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="rname" placeholder="" v-bind:disabled="disabledInput2"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <el-row>
              <el-button type="primary" plain size="medium" class="size" @click="r_modify">修改
                </el-button/>
                <el-button type="primary" plain size="medium" class="size" @click="r_save">保存</el-button>
                <el-button type="danger" plain size="medium" class="size" @click="r_deletee">删除</el-button>&nbsp;&nbsp;&nbsp;
                <el-button type="warning" plain size="medium" class="size" @click="r_appear">添加新关系</el-button>
            </el-row>
            <div style="height:30px;"></div>
            <div id="r_add" style="display:none">
              <el-row>
                <div class="title">添加新关系</div>
              </el-row>
              <el-row>
                <el-col :span="8">
                  <p>Father:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_rfather" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>Son:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_rson" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>R_Label:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_rrlabel" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-col :span="8">
                  <p>R_Name:</p>
                </el-col>
                <el-col :span="14">
                  <el-input v-model="a_rrname" placeholder=""></el-input>
                </el-col>
              </el-row>
              <div style="height:8px;"></div>
              <el-row>
                <el-button type="primary" plain size="medium" @click="r_addyes">确定</el-button>
              </el-row>
            </div>
          </el-tab-pane>
          <el-tab-pane label="公司选择" name="third">
            <el-row>
              <div class="title">填入要添加公司的节点ID</div>
            </el-row>
            <el-row>
              <el-col :span="8">
                <p>ID:</p>
              </el-col>
              <el-col :span="14">
                <el-input v-model="id" placeholder="" :disabled="true"></el-input>
              </el-col>
            </el-row>
            <div style="height:8px;"></div>
            <hr/>
            <div style="height:8px;"></div>
            <el-row>
              <div class="title">勾选要添加的公司:</div>
            </el-row>
            <el-row>
              <div style="height:420px;overflow:auto;overflow-x:hidden;">
                <el-table ref="multipleTable" :data="companies" tooltip-effect="dark" style="width: 100%;margin-left:40px;" @select="selectone">
                  <el-table-column type="selection" width="60">
                  </el-table-column>
                  <el-table-column label="可选公司" width="200">
                    <template slot-scope="scope">{{ scope.row.name }}</template>
                  </el-table-column>
                </el-table>
              </div>
            </el-row>
            <div style="height:20px;"></div>
            <el-row>
              <el-button type="primary" plain size="medium" @click="">确定</el-button>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      activeName: "first",
      label: "",
      name: "",
      id: "",
      father: "",
      disabledInput: true,
      disabledInput2: true,
      a_label: "",
      a_name: "",
      a_rlabel: "",
      a_rname: "",

      rfather: "",
      rson: "",
      rlabel: "",
      rname: "",
      a_rfather: "",
      a_rson: "",
      a_rrlabel: "",
      a_rrname: "",

      companies: [
        {
          date: "2016-05-03",
          name: "公司1",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "公司2",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "公司3",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司4",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司5",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司6",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司7",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司8",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司9",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司10",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司11",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司12",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "公司13",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    },
    handleClick(tab, event) {
      console.log(tab, event);
      document.getElementById("add").style.display = "none";
      document.getElementById("r_add").style.display = "none";
    },
    draw(nodes, edges) {
      var that = this;
      var width = 770;
      var height = 680;
      var svg = d3
        .select("#graph")
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
          that.rfather = edges[i].source.name;
          that.rson = edges[i].target.name;
          that.rlabel = edges[i].rel;
          that.rname = edges[i].name;
          that.activeName = "second";
          document.getElementById("r_add").style.display = "none";
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
          that.name = nodes[i].name;
          that.id = nodes[i].id;
          that.label = nodes[i].type;
          that.father = nodes[i].father;
          that.activeName = "first";
          document.getElementById("add").style.display = "none";
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

    appear() {
      //点击添加子节点
      document.getElementById("add").style.display = "";
    },

    modify() {
      //点击修改
      this.disabledInput = false;
    },

    save() {
      //点击保存
      var that = this;
      axios
        .get("http://10.108.211.136:5000/mod_node", {
          params: {
            id: this.id,
            name: this.name
          }
        })
        .then(function(response) {
          console.log(response);
          that.disabledInput = true;
          alert("修改成功！");
        })
        .catch(function(error) {
          console.log(error);
          alert("error!");
        });
    },

    addyes() {
      //点击确定
      alert("添加成功！");
      document.getElementById("add").style.display = "none";
      this.a_rlabel = "";
      this.a_rname = "";
      this.a_label = "";
      this.a_name = "";
    },

    deletee() {
      //点击删除
      this.$confirm("此操作将删除该节点, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    r_appear() {
      //点击添加新关系
      document.getElementById("r_add").style.display = "";
    },
    r_modify() {
      //点击修改
      this.disabledInput2 = false;
    },
    r_save() {
      //点击保存
      this.disabledInput2 = true;
      alert("修改成功！");
    },

    r_addyes() {
      //点击确定
      alert("添加成功！");
      document.getElementById("r_add").style.display = "none";
      this.a_rfather = "";
      this.a_rson = "";
      this.a_rrlabel = "";
      this.a_rrname = "";
    },

    r_deletee() {
      //点击删除
      this.$confirm("此操作将删除该关系, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },

    selectone(selection, row) {
      //每勾选一个触发一次
      //alert(row.name);
    }
  },
  created() {
    this.draw();
  },
  mounted() {
    axios
      .get("http://10.108.211.136:5000/graph/100", {
        datatype: "jsonp",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
      .then(res => {
        console.log(res.data);
        this.draw(res.data.nodes, res.data.links);
      });
  }
};
</script>

<style>
.admin-graph-background {
  background-color: #ffffff;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 10px;
}
.right {
  width: 95%;
  height: 700px;
}
.left {
  height: 700px;
  margin-right: 10px;
}
p {
  margin-top: 10px;
}
.size {
  padding-left: 10px;
  padding-right: 10px;
}
.title {
  float: left;
  margin-left: 20px;
  margin-bottom: 10px;
}
.el-input.is-disabled .el-input__inner {
  color: #717275;
}
</style>
