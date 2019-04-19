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
  },
  mounted() {
    if (process.isClient) {
      window.$ = require("jquery");
      $(document).ready(function() {
        // $("#fbComment").remove();
        FB.XFBML.parse(document.getElementById("fbCommentWrapper"), function() {
          $("#fbComment")
            .find("span")
            .addClass("fcking_bug_plugin");
          $("#fbComment")
            .find("iframe")
            .addClass("fcking_bug_plugin");
          $("#fbComment").css({ overflow: "auto", height: "190px" });
          $("#fbComment")
            .find("iframe")
            .attr("scrolling", "yes");
        });
      });
    }
  }
};
</script>

<style>
.fcking_bug_plugin {
  width: 100% !important;
  height: 2000px !important;
}
</style>
