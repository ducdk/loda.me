<template>
  <List title="Vue.js" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Vue.js",
    meta: [
      { property: "og:url", content: "/" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Vue.js" },
      {
        property: "og:description",
        content: "Chia sẻ, hướng dẫn lập trình miễn phí và chất lượng nhất."
      },
      { property: "og:image", content: "" }
    ]
  }
};
</script>

<page-query>
query Article {
  articles : allArticle (perPage: 100000, filter: { categories: { containsAny: ["vue"] }}) {
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
}
</page-query>