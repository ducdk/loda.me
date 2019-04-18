<template>
  <Default title="Home">
    <div class="mb-6">
      <!-- top -->
      <div class="row row-cards row-deck">
        <div class="col-lg-4 col-md-6">
          <Card :hideTitle="true" :bodyClass="{'p-0': true}">
            <!-- <g-image :src="$page.articles.edges[0].node.image"/> -->
            <Carousel :edges="$page.articles.edges.slice(0,4)"/>
          </Card>
        </div>

        <div class="col-lg-8 col-md-6">
          <Card borderless color="bg-green" title="Mới cập nhật">
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

      <!-- middle -->
      <div class="row row-cards row-deck">
        <!-- hot news -->
        <div class="col-lg-4">
          <Card borderless color="bg-orange" title="Xem nhiều">
            <div
              v-for="(edge, i) in $page.articles.edges.slice(0,7)"
              :key="edge.node.id"
              :ref="'card' + i"
            >
              <p>{{edge.node.title}}</p>
            </div>
          </Card>
        </div>
        <div class="col-lg-8">
          <div>
            <div class="btn-list">
              <a href="#" class="btn btn-blue">Blue</a>
              <a href="#" class="btn btn-azure">Azure</a>
              <a href="#" class="btn btn-indigo">Indigo</a>
              <a href="#" class="btn btn-purple">Purple</a>

              <a href="#" class="btn btn-orange">Orange</a>
              <a href="#" class="btn btn-yellow">Yellow</a>
              <a href="#" class="btn btn-lime">Lime</a>
              <a href="#" class="btn btn-green">Green</a>
              <a href="#" class="btn btn-teal">Teal</a>
            </div>
          </div>
          <div class="mt-6">
            <EmailCard/>
          </div>
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
import Carousel from "~/components/cards/Carousel.vue";
import InlineList from "~/components/cards/InlineList.vue";
import EmailCard from "~/components/cards/EmailCard.vue";

export default {
  metaInfo: {
    title: "Loda.me!"
  },
  components: {
    Card,
    Carousel,
    InlineList,
    EmailCard
  }
};
</script>

<page-query>
query Article {
  articles : allArticle(perPage: 100){
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