<template>
  <div class="row row-cards row-deck" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy">
    <div v-for="edge in datas" :key="edge.node.id" class="col-sm-6 col-xl-3">
      <!-- <div v-for="edge in articles.edges" :key="edge.node.id" class="col-lg-6"> -->
      <ArticleCard type="image" :article="edge.node"/>
    </div>
  </div>
</template>

<script>
import ArticleCard from "~/components/article/ArticleCard.vue";

export default {
  name: "ArticleList",
  props: {
    articles: Object
  },
  components: {
    ArticleCard
  },
  data() {
    return {
      datas: [],
      page: 0,
      busy: false
    };
  },
  methods: {
    loadMore() {
      if (this.articles.edges.length > this.page * 10) {
        setTimeout(() => {
          this.datas = [
            ...this.datas,
            ...this.articles.edges.slice(this.page * 10, this.page * 10 + 10)
          ];
          this.page += 1;
        }, 200);
      }else{
        this.busy = true;
      }
    }
  },
  created() {
    this.datas = this.articles.edges.slice(0, 10);
    this.page += 1;
  }
};
</script>
