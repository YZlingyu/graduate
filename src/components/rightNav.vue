<template>
  <div class="rightNav">
    <pie-graph></pie-graph>
    <line-graph></line-graph>
  </div>
</template>

<script>
  import pieGraph from "../components/pieGraph.vue"
  import lineGraph from "../components/lineGraph.vue"
  export default {
    data() {
      return {}
    },
    methods: {

    },
    created(){
    },
    mounted(){

    },
    watch: {

    },
    components:{
      pieGraph, lineGraph
    }
  }
</script>

<style>
  .rightNav{
    border: 1px solid #ccc;
    width: 250px;
    padding: 10px 5px;
    box-sizing: border-box;
    position: absolute;
    background-color: #fff;
    right: 0;
    top:0;
    z-index: 10;
  }
</style>
