<template>
  <Default :title="title">
    <div class="container">
      <ArticleList :articles="articles" :busy="busy"/>
    </div>
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
  },
  computed: {
    busy(){
      return !this.infinity;
    }
  }
};
</script>
