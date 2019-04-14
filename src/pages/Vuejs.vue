<template>
  <List title="Vue.js" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Vue.js"
  }
};
</script>

<page-query>
query Article {
  articles : allArticle (perPage: 100000, filter: { categories: { contains: ["vue"] }}) {
    edges {
      node {
        id
        date (format: "D MMMM, YYYY")
        title
        description
        image
        timeToRead
        path
      }
    }
  }
}
</page-query>