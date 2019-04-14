<template>
  <List title="Blog" :articles="$page.articles"/>
</template>

<script>

export default {
  metaInfo: {
    title: "Loda.me!"
  }
};
</script>

<page-query>
query Article {
  articles : allArticle(perPage: 100000){
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