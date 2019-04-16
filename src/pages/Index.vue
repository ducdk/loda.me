<template>
  <Default>
    <div class="mt-7">
      <div class="row row-cards row-deck">
        <div class="col-lg-4 col-md-6">
          <Card :hideTitle="true" :bodyClass="{'p-0': true}">
            <!-- <g-image :src="$page.articles.edges[0].node.image"/> -->
            <Carousel :edges="$page.articles.edges.slice(0,4)"/>
          </Card>
        </div>

        <div class="col-lg-8 col-md-6">
          <Card color="bg-green" title="Mới cập nhật">
            <div
              v-for="(edge, i) in $page.articles.edges.slice(0,7)"
              :key="edge.node.id"
              :ref="'card' + i"
            >
              <p>{{edge.node.title}}</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  </Default>
</template>

<script>
import Card from "~/components/cards/Card.vue";
import Carousel from "~/components/cards/Carousel.vue";

export default {
  metaInfo: {
    title: "Loda.me!"
  },
  components: {
    Card,
    Carousel
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