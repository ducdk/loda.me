<template>
  <div
    class="fb-like"
    :data-href="href"
    data-layout="standard"
    data-action="like"
    data-size="small"
    data-show-faces="true"
    data-share="true"
  ></div>
</template>


<script>
export default {
  name: "FbLike.vue",
  props: {
    href: String
  }
};
</script>
