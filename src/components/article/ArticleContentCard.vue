<template>
  <div class="card">
    <div class="card-body">
      <div class="text-wrap p-lg-6">
        <div class="row">
          <h2 class="mt-2">{{ article.title }}</h2>
        </div>
        <hr>
        <div class="article-body" v-html="cleanedContent"/>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ArticleContentCard",
  props: {
    article: Object
  },
  computed:{
      cleanedContent(){
          return this.article.content.replace(/{:class="center-image"}/g, '', 'g');
      }
  }
};
</script>


<style>
.article-body {
  
}

div.article-body >p > img {
  margin: 0 auto;
  display: block;
}
</style>