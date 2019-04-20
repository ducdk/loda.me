<template>
  <div id="fbCommentWrapper">
    <div
      id="fbComment"
      class="fb-comments mb-3"
      data-width="100%"
      :data-href="href"
      data-numposts="5"
    ></div>
  </div>
</template>

<script>
export default {
  name: "FbComment.vue",
  props: {
    href: String
  }
};
</script>
