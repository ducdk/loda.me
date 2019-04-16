<template>
  <div>
    <div class="row row-cards row-deck" ref="cards">
      <div
        v-for="(edge, i) in datas"
        :key="edge.node.id"
        :ref="'card' + i"
        class="col-sm-6 col-xl-3"
      >
        <!-- <div v-for="edge in articles.edges" :key="edge.node.id" class="col-lg-6"> -->
        <ArticleCard type="image" :article="edge.node"/>
      </div>
    </div>
    <div ref="bottomCard"></div>
  </div>
</template>

<script>
import ArticleCard from "~/components/article/ArticleCard.vue";

export default {
  name: "ArticleList",
  props: {
    articles: Object,
    infinity: Boolean
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
      if (!this.busy && this.articles.edges.length > this.page * 10) {
        setTimeout(() => {
          this.datas = [
            ...this.datas,
            ...this.articles.edges.slice(this.page * 10, this.page * 10 + 10)
          ];
          this.page += 1;
        }, 200);
      } else {
        this.busy = true;
      }
    },
    onScroll() {
      var offset = document.getElementById("top-footer").offsetTop;
      var marginTop = document.getElementById("menu-bar").scrollHeight;
      offset -= marginTop;
      if (document.documentElement.scrollTop + window.innerHeight > offset) {
        this.loadMore();
      }
    }
  },
  created() {
    this.datas = this.articles.edges.slice(0, 10);
    this.page += 1;
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>
