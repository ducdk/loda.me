<template>
  <List title="JPA Hibernate" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Hibernate"
  }
};
</script>

<page-query>
query Article {
  articles : allArticle (perPage: 100000, filter: { categories: { contains: ["jpa", "hibernate"] }}) {
    edges {
      node {
        id
        date (format: "D MMMM, YYYY")
        title
        description
        image (width: 400, quality: 90)
        timeToRead
        path
      }
    }
  }
}
</page-query>