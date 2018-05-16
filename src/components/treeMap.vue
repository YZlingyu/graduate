<template>
  <div class="container">
    <div id="main"></div>
  </div>
</template>

<script>
  //import jquery from 'jquery'
  export default {
    data() {
      return {

      }
    },
    mounted() {

      var json = [
        {
          "name": "人工智能",
          "children": [
            {
              "name": "算法",
              "children": [
                {"name": "机器学习"},
                {"name": "监督学习"},
                {"name": "统计分类"},
                {"name": "回归分析"},
                {"name": "概率分类"},
                {"name": "二进制分类器"},
                {"name": "线性分类器"},
                {"name": "Platt缩放"},
                {"name": "核心技巧"},
                {"name": "无监督学习"},
                {"name": "数据集群"},
                {"name": "进化算法"},
                {"name": "集群智能"},
                {"name": "模式识别"},
                {"name": "无监督学习"},
                {"name": "半监督学习"},
                {"name": "弱监督学习"},
                {"name": "强化学习"},
                {"name": "决策理论"},
                {"name": "计算机理论"}
              ]
            },
            {
              "name": "神经网络",
              "children": [
                {"name": "感知机"},
                {"name": "线性回归"},
                {"name": "前馈神经网络"},
                {"name": "递归神经网络"},
                {"name": "多层感知器"},
                {"name": "径向基础网络"},
                {"name": "智能控制"},
                {"name": "反向传播"},
                {"name": "自动分化"},
                {"name": "分层时态记忆"},
                {"name": "卷积神经网络"},
                {"name": "强化学习"},
                {"name": "循环神经网络"},
                {"name": "长短期记忆网络"},
                {"name": "对抗网络"},
                {"name": "自回归网络"},
                {"name": "信念网络"},
                {"name": "收缩神经网络"},
                {"name": "逆卷积网络"},
                {"name": "深度信念网络"},
                {"name": "深度卷积生成对抗网络"},
                {"name": "深度神经网络"},
                {"name": "深度 Q 网络"},
                {"name": "判别器网络"},
                {"name": "回声状态网络"},
                {"name": "专家网络"},
                {"name": "门控循环网络"},
                {"name": "生成对抗网络"},
                {"name": "生成矩匹配网络"},
                {"name": "异质信息网络"},
                {"name": "混合密度网络"},
                {"name": "多层前馈神经网络"},
                {"name": "即插即用生成网络"},
                {"name": "量子化神经网络"},
                {"name": "残差网络"},
                {"name": "孪生网络"},
                {"name": "脉冲神经网络"},
                {"name": "堆叠解卷积网络"},
                {"name": "时延神经网络"},
                {"name": "Wasserstein生成对抗网络"},
                {"name": "贝叶斯网络"}
              ]
            },
            {
              "name": "优化算法",
              "children": [
                {"name": "Subgradient方法"},
                {"name": "凸函数"},
                {"name": "渐变下降"},
                {"name": "随机梯度下降"},
                {"name": "次导数"},
                {"name": "渐变下降"},
                {"name": "随机梯度下降"},
                {"name": "次导数"},
                {"name": "贝叶斯优化"},
                {"name": "凸优化"},
                {"name": "非凸优化"}
              ]
            },
            {
              "name": "自然语言",
              "children": [
                {"name": "自然语言理解"},
                {"name": "自然语言处理"},
                {"name": "自然语言用户界面"},
                {"name": "信息检索"},
                {"name": "文本挖掘"},
                {"name": "问题回答"},
                {"name": "机器翻译"},
                {"name": "潜在语义分析"},
                {
                  "name": "语义",
                  "children": [
                    {"name": "描述逻辑"},
                    {"name": "Web本体语言"},
                    {"name": "Upper本体"},
                    {"name": "Ontology"},
                    {"name": "语义wenb规则语言"},
                  ]
                }
              ]
            },
            {
              "name": "逻辑",
              "children": [
                {"name": "归纳逻辑编程"},
                {"name": "命题逻辑"},
                {"name": "句子逻辑"},
                {"name": "一阶逻辑"},
                {"name": "量词"},
                {"name": "谓词"},
                {"name": "模糊逻辑"},
                {"name": "模糊系统"},
                {"name": "模式识别"},
                {"name": "主管逻辑"}
              ]
            },
            {
              "name": "统计学习方法",
              "children": [
                {"name": "多层感知机"},
                {"name": "模式识别"},
                {"name": "分类器"},
                {"name": "模式匹配"},
                {"name": "机器学习"},
                {"name": "人工神经网络"},
                {"name": "核方法"},
                {
                  "name": "支持向量机	",
                  "children": [
                    {
                      "name": "线性SVM",
                      "children": [
                        {"name": "超平面"},
                        {"name": "线性可分"}
                      ]
                    },
                    {
                      "name": "非线性分类",
                      "children": [
                        {"name": "Kernel"},
                        {"name": "特征空间"}
                      ]
                    },
                  ]
                },
                {"name": "K最近邻算法"},
                {"name": "高斯混合模型"},
                {"name": "朴素贝叶斯分类器"},
                {"name": "决策树模型"},
                {"name": "数学优化"},
                {"name": "统计"},
                {"name": "在线机器学习"},
                {"name": "凸函数"},
                {"name": "激活函数"},
                {"name": "强化学习"},
                {"name": "L2规范"},
                {"name": "L1规范"},
                {
                  "name": "概率方法	",
                  "children": [
                    {
                      "name": "贝叶斯推理	",
                      "name": "机器学习",
                      "name": "期望最大化算法",
                      "name": "自动计划",
                      "name": "决策网络",
                      "name": "机器感知",
                      "name": "动态贝叶斯网络",
                      "name": "隐马尔可夫模型",
                      "name": "卡尔曼滤波器",
                      "name": "决策分析",
                      "name": "马尔可夫决策过程",
                      "name": "博弈论"
                    }
                  ]
                }
              ]
            },
            {
              "name": "计算机视觉",
              "children": [
                {"name": "机器感知"},
                {"name": "触觉传感器"},
                {"name": "面部识别系统"},
                {"name": "对象识别"},
                {"name": "图像处理"},
                {"name": "计算几何"}
              ]
            },
            {
              "name": "平台",
              "children": [
                {"name": "平台（计算)"},
                {"name": "计算平台"},
                {"name": "专家系统"},
                {"name": "软件库"},
                {"name": "人工神经网络"},
                {"name": "Deeplearning4h"},
                {"name": "Tensorflow"},
                {"name": "Theano"},
                {"name": "Soundhound"},
                {"name": "Bina48"},
                {"name": "Keras"},
                {"name": "Pytorch"},
                {"name": "mxnet"},
                {"name": "caffe"}
              ]
            },
            {
              "name": "逻辑",
              "children": [
                {"name": "命题逻辑"},
                {"name": "Decidabilty逻辑"},
                {"name": "Fragment逻辑"},
                {"name": "一阶逻辑"},
                {"name": "双变量逻辑"},
                {"name": "守卫的逻辑"},
                {"name": "模糊描述逻辑"},
                {"name": "模态逻辑"},
                {"name": "时态描述逻辑"},
                {"name": "动态逻辑"},
                {"name": "线性时态逻辑"},
                {
                  "name": "形式逻辑",
                  "children": [
                    {"name": "逻辑联结"},
                    {"name": "析取"},
                    {"name": "否定"},
                    {"name": "子集"},
                    {"name": "空集"},
                    {"name": "量化逻辑"},
                    {"name": "变量"},
                    {"name": "一元函数"},
                    {"name": "谓词"},
                  ]
                }
              ]
            },
            {
              "name": "计算理论",
              "children": [
                {"name": "P与NP问题"},
                {"name": "可计算理论"},
                {"name": "计算模型"},
                {"name": "计算复杂性莅临"}
              ]
            },
            {
              "name": "信息化和编码理论",
              "children": [
                {"name": "信号处理"},
                {"name": "代码"},
                {"name": "数据压缩"},
                {"name": "密码"},
                {"name": "错误检测和纠正"},
                {"name": "线性网络编码"},
                {"name": "数据传输"}
              ]
            },
            {
              "name": "程序",
              "children": [
                {"name": "编程语言"},
                {"name": "数学"},
                {"name": "语言学"},
                {"name": "数学"},
                {"name": "形式规范"},
                {"name": "计算机硬件"},
                {"name": "计算机安全"},
                {"name": "正式的语言"},
                {"name": "程序语义"},
                {"name": "自动机理论"},
                {"name": "程序语义"}
              ]
            },
            {
              "name": "计算机性能分析",
              "children": [
                {"name": "吞吐量"},
                {"name": "响应时间"},
                {"name": "Bottleneck"},
                {"name": "Petri网"},
                {"name": "进程微积分"},
                {"name": "并行随机访问"}
              ]
            },
            {
              "name": "数据库",
              "children": [
                {"name": "数据库模型"},
                {"name": "查询语言"}
              ]
            },
            {
              "name": "大数",
              "children": [
                {"name": "启发式"},
                {"name": "剪枝算法"},
                {"name": "搜索树"},
                {"name": "模拟退火"},
                {"name": "Beam搜索"},
                {"name": "随机优化"},
                {"name": "进化计算"},
                {"name": "自然选择"},
                {"name": "群集智能"},
                {"name": "蚁群优化"},
                {"name": "粒子群优化"},
                {"name": "进化算法"},
                {"name": "遗传算法"}
              ]
            },
            {
              "name": "应用",
              "children": [
                {"name": "无人机"},
                {"name": "自动驾驶"},
                {"name": "智能搜索"},
                {"name": "智能推荐"},
                {"name": "机器人"},
                {"name": "智能代理"},
                {"name": "光学字符识别"}
              ]
            },
            {
              "name": "方法",
              "children": [
                {"name": "牛顿法"},
                {"name": "序列最小优化"},
                {"name": "Logistic回归"},
                {"name": "随机梯度下降"},
                {"name": "协调下降"},
                {"name": "汇聚率"},
                {"name": "LIBSVM"},
                {"name": "MATLAB"},
                {"name": "Scikit学习"},
                {"name": "OpenCV"},
                {"name": "Sigmoid函数"},
                {"name": "Soft Max功能"},
                {"name": "RELU"}
              ]
            },
            {
              "name": "规范化和稳定",
              "children": [
                {"name": "Normed矢量空间"},
                {"name": "Tikhonov正则化"},
                {"name": "规则最小二乘"},
                {"name": "Logistic回归"},
                {"name": "最小二乘支持向量机"},
                {"name": "贝叶斯SVM"},
                {"name": "贝叶斯概率"},
                {"name": "数据增强"},
                {"name": "图形模型"},
                {"name": "后验预测分布"}
              ]
            },
            {
              "name": "知识表示",
              "children": [
                {"name": "知识表示"},
                {"name": "知识工程"},
                {"name": "专家系统"}
              ]
            },
            {
              "name": "社交智能",
              "children": [
                {"name": "情感"},
                {"name": "计算机科学"},
                {"name": "心理学"},
                {"name": "认知科学"},
                {"name": "博弈论"},
                {"name": "决策理论"}
              ]
            },
            {
              "name": "计算机科学",
              "children": [
                {"name": "科学计算"},
                {"name": "计算科学"},
                {"name": "数值分析"},
                {"name": "计算机模拟"}
              ]
            },
            {
              "name": "人工智能技术",
              "children": [
                {"name": "绝对值整流"},
                {"name": "激活函数"},
                {"name": "累积误差反向传播"},
                {"name": "声学建模"},
                {"name": "采集函数"},
                {"name": "行为-评判方法"},
                {"name": "自适应比特率算法"},
                {"name": "自适应谐振理论"},
                {"name": "加性模型"},
                {"name": "对抗样本"},
                {"name": "仿射层"},
                {"name": "亲和矩阵"},
                {"name": "智能体"},
                {"name": "算法"},
                {"name": "α-β剪枝"},
                {"name": "选择性剪接数据集"},
                {"name": "解析梯度"},
                {"name": "原始采样"},
                {"name": "退火重要采样"},
                {"name": "异常检测"},
                {"name": "专用集成电路"},
                {"name": "近似贝叶斯计算"},
                {"name": "近似推断"},
                {"name": "近似"},
                {"name": "架构"},
                {"name": "Roc 曲线下面积"},
                {"name": "通用人工智能"},
                {"name": "人工智能"},
                {"name": "关联分析"},
                {"name": "渐近无偏"},
                {"name": "异步随机梯度下降"},
                {"name": "注意力机制"},
                {"name": "属性条件独立性假设"},
                {"name": "属性空间"},
                {"name": "属性值"},
                {"name": "增广拉格朗日法"},
                {"name": "自编码器"},
                {"name": "自动微分"},
                {"name": "自动语音识别"},
                {"name": "自动摘要"},
                {"name": "平均梯度"},
                {"name": "平均池化"},
                {"name": "反向传播"},
                {"name": "通过时间的反向传播"},
                {"name": "逆向归纳"},
                {"name": "词袋"},
                {"name": "基学习器"},
                {"name": "基学习算法"},
                {"name": "批量"},
                {"name": "批量归一化"},
                {"name": "贝叶斯判定准则"},
                {"name": "贝叶斯误差"},
                {"name": "贝叶斯模型平均"},
                {"name": "贝叶斯最优分类器"},
                {"name": "贝叶斯决策论"},
                {"name": "束搜索"},
                {"name": "基准"},
                {"name": "贝尔曼方程"},
                {"name": "类间散度矩阵"},
                {"name": "偏置 / 偏差"},
                {"name": "有偏"},
                {"name": "有偏重要采样"},
                {"name": "偏差-方差分解"},
                {"name": "偏差 - 方差困境"},
                {"name": "双向长短期记忆"},
                {"name": "二分类"},
                {"name": "二元关系"},
                {"name": "二值稀疏编码"},
                {"name": "二项分布"},
                {"name": "二项检验"},
                {"name": "二分法"},
                {"name": "块坐标下降"},
                {"name": "块吉布斯采样"},
                {"name": "样板代码"},
                {"name": "玻尔兹曼分布"},
                {"name": "玻尔兹曼机"},
                {"name": "自助采样法／可重复采样／有放回采样"},
                {"name": "自助法"},
                {"name": "瓶颈层"},
                {"name": "边界框"},
                {"name": "平衡点"},
                {"name": "桥式采样"},
                {"name": "广播"},
                {"name": "磨合"},
                {"name": "变分法"},
                {"name": "校准"},
                {"name": "级联"},
                {"name": "级联相关"},
                {"name": "离散属性"},
                {"name": "范畴分布"},
                {"name": "因果因子"},
                {"name": "因果模型"},
                {"name": "中心差分"},
                {"name": "中心极限定理"},
                {"name": "链式法则"},
                {"name": "弦图"},
                {"name": "类条件概率"},
                {"name": "分类与回归树"},
                {"name": "分类器"},
                {"name": "类别不平衡"},
                {"name": "梯度截断"},
                {"name": "计算复杂团势能性莅临"}
              ]
            },
          ]
        }
      ]


      var margin = {top: 20, right: 120, bottom: 20, left: 100},
        width = 1000 - margin.right - margin.left,
        height = 1560 - margin.top - margin.bottom;

      var i = 0,
        duration = 750,
        root;

      var tree = d3.layout.tree()
        .size([height, width]);

      var diagonal = d3.svg.diagonal()
        .projection(function(d) { return [d.y, d.x]; });

      var svg = d3.select("#main").append("svg")
        .attr("width", width + margin.right + margin.left)
        .attr("height", height + margin.top + margin.bottom);
      //.append("g")

      var g = svg.append("g")
        .attr("class", "gg")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .attr("stroke-width", 1.5)
        .attr("transform", "translate(" + 150 + "," + margin.top + ")");


      root = json[0];
      root.x0 = width / 2;
      root.y0 = 100;

      function collapse(d) {
        if (d.children) {
          d._children = d.children;
          d._children.forEach(collapse);
          d.children = null;
        }
      }

      root.children.forEach(collapse);
      update(root);


      d3.select(self.frameElement).style("height", "1550px");

      function update(source) {

        // Compute the new tree layout.
        var nodes = tree.nodes(root).reverse(),
          links = tree.links(nodes);

        // Normalize for fixed-depth.
        nodes.forEach(function(d) { d.y = d.depth * 180; });

        // Update the nodes…
        var node = svg.selectAll("g.node")
          .data(nodes, function(d) { return d.id || (d.id = ++i); });


        // Enter any new nodes at the parent's previous position.
        var nodeEnter = node.enter().append("g")
          .attr("class", "node")
          .attr("cursor", "pointer")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
          .on("click", click);

        nodeEnter.append("circle")
          .attr("r", 1e-6)
          .attr("fill", "#fff")
          .attr("stroke", "steelblue")
          .attr("stroke-width", 1.5)
          .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeEnter.append("text")
          .attr("x", function(d) { return d.children || d._children ? -10 : 10; })
          .attr("dy", ".35em")
          .attr("font", "10px sans-serif")
          .attr("text-anchor", function(d) { return d.children || d._children ? "end" : "start"; })
          .text(function(d) { return d.name; })
          .style("fill-opacity", 1e-6);

        // Transition nodes to their new position.
        var nodeUpdate = node.transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

        nodeUpdate.select("circle")
          .attr("r", 4.5)
          .style("fill", function(d) { return d._children ? "lightsteelblue" : "#fff"; });

        nodeUpdate.select("text")
          .style("fill-opacity", 1);

        // Transition exiting nodes to the parent's new position.
        var nodeExit = node.exit().transition()
          .duration(duration)
          .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
          .remove();

        nodeExit.select("circle")
          .attr("r", 1e-6);

        nodeExit.select("text")
          .attr("font", "10px sans-serif")
          .style("fill-opacity", 1e-6);

        // Update the links…
        var link = svg.selectAll("path.link")
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1.5)
          .data(links, function(d) { return d.target.id; });


        // Enter any new links at the parent's previous position.
        link.enter().insert("path", "g")
          .attr("class", "link")
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("stroke-width", 1.5)
          .attr("d", function(d) {
            var o = {x: source.x0, y: source.y0};
            //console.log(diagonal({source: o, target: o}));
            return diagonal({source: o, target: o});
          });

        // Transition links to their new position.
        link.transition()
          .duration(duration)
          .attr("d", diagonal);

        // Transition exiting nodes to the parent's new position.
        link.exit().transition()
          .duration(duration)
          .attr("d", function(d) {
            var o = {x: source.x, y: source.y};
            return diagonal({source: o, target: o});
          })
          .remove();

        // Stash the old positions for transition.
        nodes.forEach(function(d) {
          d.x0 = d.x;
          d.y0 = d.y;
        });
      }

      // Toggle children on click.
      function click(d) {
        if (d.children) {
          d._children = d.children;
          d.children = null;
        } else {
          d.children = d._children;
          d._children = null;
        }
        update(d);
      }

    }
  }
</script>

<style>
  #main{
    margin: 30px auto;
    text-align: center;
    vertical-align: middle;
    height: 100%;
    width:100%;
  }
</style>



