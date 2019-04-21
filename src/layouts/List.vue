<template>
  <Default :title="title">
    <ArticleList :containsAny="containsAny" :infinity="infinity"/>
  </Default>
</template>

<script>
import ArticleList from "~/components/article/ArticleList.vue";

export default {
  props: {
    title: String,
    containsAny: Array,
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
