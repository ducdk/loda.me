<template>
  <div class="card" :class="{'card-aside' : type === 'aside'}">
    <g-link v-if="type === 'image'" :to="article.path">
      <g-image class="card-img-top" :src="article.image" :alt="article.title"/>
    </g-link>
    <g-link
      v-if="type === 'aside'"
      :to="article.path"
      class="card-aside-column"
      :style="{ backgroundImage: 'url(' + article.image.src + ')' }"
    ></g-link>

    <div class="card-body d-flex flex-column pb-0">
      <h4>
        <g-link :to="article.path">{{article.title}}</g-link>
      </h4>

      <div class="text-muted">{{article.description}}</div>
      <div class="d-flex align-items-center pt-5 mb-0 mt-auto">
        <!-- <div
          class="avatar avatar-md mr-3"
          style="background-image: url(/demo/photos/adrian-infernus-281832-500.jpg)"
        ></div>-->
        <div>
          <!-- <a href="/profile.html" class="text-default">Author Name</a> -->
          <small class="d-block text-muted">
            <p>{{articleDate}}</p>
          </small>
        </div>
        <!-- <div class="ml-auto text-red">
          <a href="javascript:void(0)" class="icon d-none d-md-inline-block ml-3">
            <i class="fe fe-heart mr-1"></i>
          </a>
        </div>-->
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ArticleCard",
  props: {
    type: String,
    article: Object
  },
  computed: {
    articleDate() {
      var oneday = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      var now = new Date().getTime();
      var date = new Date(this.article.date).getTime();

      var diff = Math.round(Math.abs((now - date) / oneday));

      if (diff < 7) {
        return diff + " days ago";
      }
      return this.article.date;
    }
  }
};
</script>