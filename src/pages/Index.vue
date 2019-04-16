<template>
  <Default>
    <div>
    <Card title="HAHA">Hello</Card>
    </div>
  </Default>
</template>

<script>
import Card from "~/components/cards/Card.vue";

export default {
  metaInfo: {
    title: "Loda.me!"
  },
  components: {
    Card
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