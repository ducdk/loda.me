<template>
  <div>
    <div v-if="title" class="page-header">
      <h1 class="page-title font-weight-bold">
        <g-link :to="to">{{ title }}</g-link>
      </h1>
    </div>

    <div class="row">
      <div class="col-lg-11 col-md-11">
        <div class="row row-cards row-deck">
          <div
            v-for="(edge, i) in articles.edges"
            :key="edge.node.id"
            class="col-lg-3 col-md-6"
          >
            <InlineCard :article="edge.node"/>
          </div>
        </div>
      </div>
      <div class="col-lg-1 col-md-1">
        <div class="box h-100 d-flex justify-content-center flex-column text-center">
          <g-link :to="to" style="color: #dddde2">
            <i class="fas fa-angle-right fa-4x"></i>
            <h4>More</h4>
          </g-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InlineCard from "~/components/cards/InlineCard.vue";

export default {
  name: "InlineList.vue",
  components: {
    InlineCard
  },
  props: {
    articles: Object,
    title: String,
    to: String
  }
};
</script>
