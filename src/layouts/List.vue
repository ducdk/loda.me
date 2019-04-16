<template>
  <Default :title="title">
      <ArticleList :articles="articles" :infinity="infinity"/>
  </Default>
</template>

<script>
import ArticleList from "~/components/article/ArticleList.vue";

export default {
  props: {
      title: String,
      articles: Object,
      infinity: {
        type: Boolean,
        default: true
      }
  },
  components: {
    ArticleList
  }
};
</script>
