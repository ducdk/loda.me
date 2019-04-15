<template>
  <div class="fb-comments" data-width="100%" :data-href="href" data-numposts="5"></div>
</template>

<script>
export default {
  name: "FbComment.vue",
  props: {
    href: String
  }
};
</script>

