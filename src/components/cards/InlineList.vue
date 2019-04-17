<template>
  <div>
    <div v-if="title" class="page-header mt-0">
      <h1 class="page-title">{{ title }}</h1>
    </div>

    <div class="row row-cards row-deck">
      <div
        v-for="(edge, i) in articles.edges"
        :key="edge.node.id"
        :ref="'card' + i"
        class="col-lg-6"
      >
        <InlineCard :article="edge.node"/>
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
    title: String
  }
};
</script>
