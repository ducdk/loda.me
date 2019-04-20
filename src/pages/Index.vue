<template>
  <Default title="Home">
    <div class="mb-6">
      <!-- top -->
      <div class="row row-cards">
        <div class="col-lg-4 col-md-6">
          <!-- Carousel -->
          <Card borderless :hideTitle="true" :bodyClass="{'p-0': true}">
            <Carousel :edges="$page.articles.edges.slice(0,7)"/>
          </Card>

          <!-- HOT TOPIC -->
          <Card borderless color="bg-orange" title="Xem nhiều" :bodyClass="{'p-0': true}">
            <ListPostTable :showDate="false" :articles="$page.hots"/>
          </Card>
        </div>

        <div class="col-lg-8 col-md-6">
          <!-- NEWS -->
          <Card borderless color="bg-green" title="Mới cập nhật" :bodyClass="{'p-0': true}">
            <ListPostTable :articles="$page.articles"/>
          </Card>

          <!-- EMAIL GIFTCARD -->
          <EmailCard/>
        </div>
      </div>

      <!-- bottom -->
      <div class="container">
        <div class="row">
          <InlineList title="Spring Boot" to="/spring-boot" :articles="$page.spring"/>
        </div>

        <div class="row">
          <InlineList title="Java" to="/java" :articles="$page.java"/>
        </div>
        <div class="row">
          <InlineList title="Others" to="/others" :articles="$page.other"/>
        </div>
      </div>
    </div>
  </Default>
</template>

<script>
import Card from "~/components/cards/Card.vue";
import ListPostTable from "~/components/table/ListPostTable.vue";
import Carousel from "~/components/cards/Carousel.vue";
import InlineList from "~/components/cards/InlineList.vue";
import EmailCard from "~/components/cards/EmailCard.vue";
import InlineTagList from "~/components/cards/InlineTagList.vue";

export default {
  metaInfo: {
    title: "Loda.me!"
  },
  components: {
    Card,
    ListPostTable,
    Carousel,
    InlineList,
    EmailCard,
    InlineTagList
  }
};
</script>

<page-query>
query Article {
  articles : allArticle(perPage: 7){
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
  hots : allHotArticle(perPage: 7){
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
  java : allArticle(perPage: 4, filter: { categories: { containsAny: ["java"] }}){
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
  spring : allArticle (perPage: 4, filter: { categories: { containsAny: ["spring", "spring boot"] }}) {
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
  other : allArticle (perPage: 4, filter: { categories: { containsAny: ["general", "web"] }}) {
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