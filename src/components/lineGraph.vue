<template>
  <div id="container1" ref="myBox">
    <span class="title2">北京蓦然认知科技有限公司成果分布图</span>
    <div id="zoom">
      <span class="name"></span>
    </div>
    <div id="main4"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //property:''
      }
    },
    methods: {
      line(property) {
        var maxVal = 0;
        for (var i = 0; i < property.dataset.length; i++) {
          var currVal = d3.max(property.dataset[i].value, function (d) {
            return d[1];
          });

          if (currVal > maxVal) {
            maxVal = currVal;
          }
        }

        var svg = d3.select("#main4")
          .append("svg")
          .attr("class", "svg")
          .attr("width", property.width)
          .attr("height", property.height);

        var xScale = d3.scale.linear()
          .domain([2000, 2013])
          .range([0, property.width - property.padding.left - property.padding.right]);

        var yScale = d3.scale.linear()
          .domain([0, maxVal * 1.1])
          .range([property.height - property.padding.top - property.padding.bottom, 0]);

        var linePath = d3.svg.line()
          .x(function (d) {
            return xScale(d[0]);
          })
          .y(function (d) {
            return yScale(d[1]);
          });


        svg.selectAll('path')
          .data(property.dataset)
          .enter()
          .append("path")
          .attr("class", "path")
          .attr("transform", "translate(" + property.padding.left + "," + property.padding.top + ")")
          .attr("d", function (d) {
            return linePath(d.value);
          })
          .attr("fill", "none")
          .attr("stroke", function (d, i) {
            return property.color[i];
          })
          .attr("stroke-linecap", "round");

        var xAxis = d3.svg.axis()
          .scale(xScale)
          .ticks(5)
          .tickFormat(d3.format("d"))
          .orient("bottom");

        var yAxis = d3.svg.axis()
          .scale(yScale)
          .orient("left");


        var focusLine = svg.append("g")
          .attr("class", "focusLine")
          .style("display", "none");

        var vLine = focusLine.append("line");
        var hLine = focusLine.append("line");


        svg.append("g")
          .attr("class", "axis")
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("transform", "translate(" + property.padding.left + "," + (property.height - property.padding.bottom) + ")")
          .call(xAxis);

        svg.append("g")
          .attr("class", "axis")
          .attr("fill", "none")
          .attr("stroke", "#ccc")
          .attr("transform", "translate(" + property.padding.left + "," + property.padding.top + ")")
          .call(yAxis);


        //添加提示框
        var tooltip2 = d3.select("#main4")
          .append("div")
          .attr("class", "tooltip2")
          .attr("fill", "#fff")
          .style("opacity", 0.0);

        var title2 = tooltip2.append("div")
          .attr("class", "title2");

        var des = tooltip2.selectAll(".des")
          .data(property.dataset)
          .enter()
          .append("div");

        var desColor = des.append("div")
          .attr("class", "desColor");

        var desText = des.append("div")
          .attr("class", "desText");

        var vLine = svg.append("line")
          .attr("class", "focusLine")
          .style("display", "none");

        svg.append("rect")
          .attr("class", "overlay")
          .attr("x", property.padding.left)
          .attr("y", property.padding.top)
          .attr("width", property.width - property.padding.left - property.padding.right)
          .attr("height", property.height - property.padding.top - property.padding.bottom)
          .on("mouseover", function () {
            focusCircle.style("display", null);
            focusLine.style("display", null);
            tooltip2.style("left", (d3.event.pageX-20) + "px")
              .style("top", (d3.event.pageY) + "px")
              .style("opacity", 1.0);
            vLine.style("display", null);
          })
          .on("mouseout", function () {
            focusCircle.style("display", "none");
             focusLine.style("display", "none");
            tooltip2.style("opacity", 0.0);
            vLine.style("display", "none");
          })
          .on("mousemove", mousemove);

        function mousemove() {
          // console.log(tooltip2);
          var data = property.dataset[0].value;
          var mouseX = d3.mouse(this)[0] - property.padding.left;
          var mouseY = d3.mouse(this)[1] - property.padding.top;

          var x0 = xScale.invert(mouseX);
          var y0 = yScale.invert(mouseY);

          x0 = Math.round(x0);

          var bisect = d3.bisector(function (d) {
            return d[0];
          }).left;
          var index = bisect(data, x0);
          var x1 = data[index][0];
          var y1 = data[index][1];
          var focusX = xScale(x1) + property.padding.left;
          var focusY = yScale(y1) + property.padding.top;

           focusCircle.attr("transform", "translate("+focusX+","+focusY+")");

           focusCircle.select("text").text(x1+"年："+y1);


          vLine.attr("x1", focusX)
            .attr("y1", focusY)
            .attr("x2", focusX)
            .attr("y2", property.height - property.padding.bottom);

          hLine.attr("x1", focusX)
            .attr("y1", focusY)
            .attr("x2", property.padding.left)
            .attr("y2", focusY);
          var year = x0;
          var value = [];
          for (var k = 0; k < property.dataset.length; k++) {
            value[k] = {
              describe: property.dataset[k].describe,
              value: property.dataset[k].value[index][1]
            };
          }

          // title2.html("<strong>"+year+"年</strong>");

          desColor.style("background-color", function (d, i) {
            return property.color[i];
          });

          desText.html(function (d, i) {
            return value[i].describe + "\t" + "<strong><br/>" +
              value[i].value + "</strong>";
          });

          tooltip2.style("left", (d3.event.pageX-100) + "px")
            .style("top", (d3.event.pageY) + "px");

          var vlx = xScale(data[index][0]) + property.padding.left;

          vLine.attr("x1", vlx)
            .attr("y1", property.padding.top)
            .attr("x2", vlx)
            .attr("y2", property.height - property.padding.bottom);

        }

        var focusCircle = svg.append("g")
          .attr("class", "focusCircle")
          .style("display", "none")

        focusCircle.append("circle")
          .attr("r", 4.5)

        focusCircle.append("text")
          .attr("dx", 10)
          .attr("dy", "1em");

        var vLine = focusLine.append("line");
        var hLine = focusLine.append("line");

      }
    },
    mounted() {
      var dataset = [{
        describe: "china",
        value: [
          [2000, 11920],
          [2001, 13170],
          [2002, 14550],
          [2003, 16500],
          [2004, 19440],
          [2005, 22870],
          [2006, 27930],
          [2007, 35040],
          [2008, 45470],
          [2009, 51050],
          [2010, 59490],
          [2011, 73140],
          [2012, 83860],
          [2013, 103550]
        ]
      }];
      var padding = {
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      };
      var height = 200;
      var width = 200;


      var color = ["#4682B4", "#690504"];
      var title = "GDP走势图";
      var property = {
        dataset: dataset,
        height: height,
        width: width,
        title: title,
        padding: padding,
        color: color,
        xOrient: "bottom",
        yOrient: "left",

      }
      this.line(property);
     /* const self = this;
      console.log(this.$refs.mybox);*/
      /*var length = property.color.length;
      var txt = '';
      for (var i = 0; i < length; i++) {
        txt = txt + '<div class="box"></div><span class="name">' + property.dataset[i].describe + '</span><br/>';
      }
      console.log(document.getElementById("#zoom"))// = txt;
      for (i = 0; i < length; i++) {
        document.getElementsByClassName(".box")[i].style.backgroundColor = property.color[i];
      }*/

    }
  }
</script>

<style>
  #main4{
    margin: 0 auto;
    text-align: center;
    vertical-align: middle;
  }
  .overlay {
    fill: none;
    pointer-events: all;
  }

  .tooltip2 {
    position: absolute;
    border: 1px solid #cccccc;
    padding: 10px;
    border-radius: 5px;
  }

  .tooltip2 .title2 {
    border-bottom: 1px solid #000;
    test-align: center;
    color:#ccc;
  }

  .tooltip2 .desColor {
    width: 10px;
    height: 10px;
    float: left;
    margin: 9px 8px 1px 8px;
  }

  .tooltip2 .desText {
    color: #cccccc;
    display: inline-block;
  }

  .axis {
    fill: none;
    stroke: #ccc;
    /*shape-rendering: crispEdges;*/
  }

  .path {
    fill: none;
    stroke-width: 3;
  }
</style>





