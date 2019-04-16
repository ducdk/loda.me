<template>
  <List title="Others" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Others"
  }
};
</script>

<page-query>
query Article {
  articles : allArticle (perPage: 100000, filter: { categories: { contains: ["general"] }}) {
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