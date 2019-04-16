<template>
  <List title="Blog" :articles="$page.articles" :infinity="false"/>
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
        image (width: 400, quality: 90)
        timeToRead
        path
      }
    }
  }
}
</page-query>