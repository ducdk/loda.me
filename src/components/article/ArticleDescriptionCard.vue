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
        <div class="h6 sticky-top">Share</div>

        <button type="button" class="sticky-top btn btn-icon btn-facebook mr-1">
          <i class="fab fa-facebook-f"></i>
        </button>
        <button type="button" class="sticky-top btn btn-icon btn-twitter mr-1">
          <i class="fab fa-twitter"></i>
        </button>
        <button type="button" class="sticky-top btn btn-icon btn-google mr-1">
          <i class="fab fa-google"></i>
        </button>
        <button type="button" class="sticky-top btn btn-icon btn-github mr-1">
          <i class="fab fa-github"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DescriptionCard",
  props: {
    sticky: Boolean,
    title: String,
    article: Object
  },
  methods: {
    onScroll() {
      var offset =
        this.$refs.card.scrollHeight +
        this.$refs.card.getBoundingClientRect().top +
        document.documentElement.scrollTop;
      if (window.scrollY > offset) {
        this.$refs.share.style.position = "fixed";
        this.$refs.share.style.marginTop = "10px";
      } else {
        this.$refs.share.style.position = "relative";
      }
    }
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  }
};
</script>



