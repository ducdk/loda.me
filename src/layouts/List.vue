<template>
  <Default title="Blog">
    <div class="container">
      <ArticleList :articles="articles"/>
    </div>
  </Default>
</template>

<script>
import ArticleList from "~/components/article/ArticleList.vue";

export default {
  props: {
      title: String,
      articles: Object
  },
  components: {
    ArticleList
  }
};
</script>
