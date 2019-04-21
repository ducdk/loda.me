<template>
  <div>
    <div class="row row-cards row-deck" ref="cards">
      <div
        v-for="(edge, i) in datas"
        :key="edge.node.id"
        :ref="'card' + i"
        class="col-lg-3 col-md-6 col-xl-3"
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
import axios from "axios";

export default {
  name: "ArticleList",
  props: {
    infinity: Boolean,
    perPage: {
      type: String,
      default: "10"
    },
    containsAny: Array
  },
  components: {
    ArticleCard
  },
  data() {
    return {
      datas: [],
      page: 1,
      busy: false,
      query:
        `query Article ($page: Int) {
  articles : allArticle (page: $page, perPage: ` +
        this.perPage +
        `, filter: { categories: { containsAny: ["` +
        this.containsAny.join('","') +
        `"] }}) {
    edges {
      node {
        id
        date (format: "D MMMM, YYYY")
        title
        description
        image (width: 400, height: 400, quality: 90)
        timeToRead
        path
      }
    }
  }
}`
    };
  },
  methods: {
    loadMore() {
      if (!this.busy) {
        axios
          .post("/___graphql", {
            query: this.query,
            variables: {
              page: this.page
            }
          })
          .then(res => {
            if (res.data.data.articles.edges.length > 0) {
              this.datas = [...this.datas, ...res.data.data.articles.edges];
            } else {
              this.busy = true;
            }
          });
        this.page++;
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
    this.loadMore();
    if (process.isClient && this.infinity) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (process.isClient && this.infinity) {
      window.removeEventListener("scroll", this.onScroll);
    }
  }
};
</script>
