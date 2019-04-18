<template>
  <List title="Frontend" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Frontend"
  }
};
</script>

<page-query>
query Article {
  articles : allArticle (perPage: 100000, filter: { categories: { containsAny: ["web", "frontend"] }}) {
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