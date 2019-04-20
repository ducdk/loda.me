<template>
  <Default title="Document">
    <div class="container">
      <div class="row">
        <div class="col-lg-9">
          <ArticleContentCard :article="$page.hotArticle"/>
        </div>
        <div class="col-lg-3 mb-4">
          <ArticleDescriptionCard title="Phụ lục" :article="$page.hotArticle"/>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-9">
          <FbComment :href="this.$page.hotArticle.path"/>
        </div>
      </div>
    </div>
  </Default>
</template>

<script>
import ArticleDescriptionCard from "~/components/article/ArticleDescriptionCard.vue";
import ArticleContentCard from "~/components/article/ArticleContentCard.vue";
import FbComment from "~/components/plugin/FbComment.vue";

export default {
  metaInfo() {
    return {
      title: this.$page.hotArticle.title
    };
  },
  components: {
    ArticleContentCard,
    ArticleDescriptionCard,
    FbComment,
  }
};
</script>

<page-query>
  query HotArticle ($path: String!) {
    hotArticle (path: $path) {
      title
      description
      date (format: "D MMMM, YYYY")
      content
      image (width: 350, quality: 90)
      timeToRead 
      path
    }
  }
</page-query>
