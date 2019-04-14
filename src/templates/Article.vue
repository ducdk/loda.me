<template>
  <Default title="Document">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <ArticleContentCard :article="$page.article"/>
        </div>
        <div class="col-lg-3 mb-4">
          <ArticleDescriptionCard sticky title="Phụ lục" :article="$page.article"/>
        </div>
      </div>
    </div>
  </Default>
</template>

<script>
import ArticleDescriptionCard from "~/components/article/ArticleDescriptionCard.vue";
import ArticleContentCard from "~/components/article/ArticleContentCard.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.article.title
    };
  },
  components: {
    ArticleContentCard,
    ArticleDescriptionCard
  }
};
</script>

<page-query>
  query Article ($path: String!) {
    article (path: $path) {
      title
      description
      date (format: "D MMMM, YYYY")
      content
      image
      timeToRead
    }
  }
</page-query>
