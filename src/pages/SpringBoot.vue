<template>
  <List title="Spring Boot" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Spring Boot"
  }
};
</script>

<page-query>
query Article {
  articles : allArticle (perPage: 100000, filter: { categories: { contains: ["spring", "spring boot"] }}) {
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