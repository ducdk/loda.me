<template>
  <div class="card">
    <div class="card-body">
      <div class="text-wrap p-lg-6">
        <div class="row">
          <h2 class="mt-2">{{ article.title }}</h2>
        </div>
        <hr>
        <div class="row">
          <ol class="px-4 mx-3 mb-0">
            <li v-for="item in internalPageAnchorQuery" :key="item.id">
              <a :href="'#'+item.id" class="h6">{{ item.title }}</a>
            </li>
          </ol>
        </div>
        <hr>
        <div class="article-body" v-html="cleanedContent"/>
        <FbLike :href="article.path" />
      </div>
    </div>
  </div>
</template>


<script>
import FbLike from "~/components/plugin/FbLike.vue";

export default {
  name: "ArticleContentCard",
  components: {
    FbLike
  },
  props: {
    article: Object
  },
  computed: {
    cleanedContent() {
      return this.article.content.replace(/{:class="center-image"}/g, "", "g");
    },
    internalPageAnchorQuery() {
      let parse = new DOMParser();
      let html = parse.parseFromString(this.article.content, "text/html");
      return Array.from(html.documentElement.querySelectorAll("h3")).map(element => ({
          id: element.id,
          title: element.textContent
        })
      );
    }
  }
};
</script>


<style>
.article-body {
}

div.article-body > p > img {
  margin: 0 auto;
  display: block;
}
</style>