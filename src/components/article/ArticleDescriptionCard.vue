<template>
  <div class="card" ref="card">
    <div class="card-header">
      <h3 class="card-title">{{ title }}</h3>
      <div class="card-options"></div>
    </div>
    <div class="card-map-placeholder">
      <g-image :src="article.image"/>
    </div>
    <div class="card-body">
      <div class="media mb-5">
        <g-image
          class="d-flex mr-5 rounded"
          src="~/assets/images/loda.jpg"
          alt="Generic placeholder image"
          width="64"
          height="64"
        />
        <div class="media-body">
          <h5>Loda</h5>
          <address
            class="text-muted small"
          >yêu màu tím , thích màu hồng, sống nội tâm, hay khóc thầm</address>
        </div>
      </div>

      <div class="row">
        <div class="col-6">
          <div class="h6">Ngày viết</div>
          <p>{{article.date}}</p>
        </div>
        <div class="col-6">
          <div class="h6">Thời gian đọc</div>
          <p>{{article.timeToRead}} min</p>
        </div>
        <div class="col-12">
          <div class="h6">Categories</div>
          <p>Java</p>
        </div>
      </div>

      <div class="h6">Mô tả</div>
      <p>{{ article.description }}</p>

      <div class="sticky-top" ref="share">
        <SocialShare :href="article.path" :title="article.title"/>
      </div>
    </div>
  </div>
</template>

<script>
import SocialShare from "~/components/plugin/SocialShare.vue";

export default {
  name: "DescriptionCard",
  components: {
    SocialShare
  },
  props: {
    sticky: Boolean,
    title: String,
    article: Object
  },
  methods: {
    onScroll() {
      var offset = this.$refs.card.scrollHeight + this.$refs.card.offsetTop;

      var marginTop = document.getElementById("menu-bar").scrollHeight;

      offset -= marginTop;

      if (document.documentElement.scrollTop > offset) {
        this.$refs.share.style.position = "fixed";
        this.$refs.share.style.marginTop = marginTop + 10 + "px";
      } else {
        this.$refs.share.style.position = "relative";
        this.$refs.share.style.marginTop = "0px";
      }
    }
  },
  created() {
    if (process.isClient) {
      window.addEventListener("scroll", this.onScroll);
    }
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener("scroll", this.onScroll);
    }
  }
};
</script>



