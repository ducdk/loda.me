<template>
  <div id="carousel-indicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li
        v-for="(edge,i) in this.edges"
        :key="i"
        data-target="#carousel-indicators"
        :data-slide-to="i"
        :class="{active : i==0}"
        class
      ></li>
    </ol>
    <div class="carousel-inner">
      <div v-for="(edge,i) in this.edges" :key="i" class="carousel-item" :class="{active : i==0}">
        <g-image class="d-block w-100" alt :src="edge.node.image" data-holder-rendered="true"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    edges: Array
  },
  mounted() {
    window.$ = require("jquery");

    $(document).ready(function() {
      $(".carousel").carousel({
        interval: 2000
      });
    });
  }
};
</script>

