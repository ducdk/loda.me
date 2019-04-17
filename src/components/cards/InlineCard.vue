<template>
  <div class>
    <g-link :to="article.path">
      <g-image class="card-img-top" :src="article.image" :alt="article.title"/>
    </g-link>

    <div class="mt-3 d-flex flex-column pr-1">
      <div>
        <h4>
          <g-link :to="article.path">{{article.title}}</g-link>
        </h4>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "InlineCard",
  props: {
    article: Object
  }
};
</script>