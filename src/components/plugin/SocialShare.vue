<template>
  <div :class="{'sticky-top' : sticky}">
    <div class="h6">Share</div>
    <a
      class="btn btn-icon btn-facebook mr-1"
      target="_blank"
      :href="facebook"
      onclick="window.open(this.href, 'facebook-share', 'width=550,height=435');return false;"
    >
      <i class="fab fa-facebook-f"></i>
    </a>
    <a
      class="btn btn-icon btn-twitter mr-1"
      target="_blank"
      :href="twitter"
      onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
    >
      <i class="fab fa-twitter"></i>
    </a>
    <a
      class="btn btn-icon btn-google mr-1"
      target="_blank"
      :href="google"
      onclick="window.open(this.href, 'facebook-google', 'width=550,height=435');return false;"
    >
      <i class="fab fa-google"></i>
    </a>
    <button type="button" class="btn btn-icon btn-github mr-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "SocialShare",
  props: {
    sticky: Boolean,
    title: String,
    href: String
  },
  computed: {
    facebook() {
      return (
        "https://facebook.com/sharer.php?u=" +
        this.$static.metaData.siteUrl +
        this.href
      );
    },
    twitter() {
      return (
        "https://twitter.com/intent/tweet?text=" +
        this.title +
        "&url=" +
        this.$static.metaData.siteUrl +
        this.href
      );
    },
    google() {
      return (
        "https://plus.google.com/share?url=" +
        this.$static.metaData.siteUrl +
        this.href
      );
    }
  }
};
</script>

<static-query>
query {
  metaData {
    siteUrl
  }
}
</static-query>
