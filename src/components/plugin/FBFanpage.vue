<template>
  <div id="fb-page-wrapper">
    <div
      id="fb-page"
      class="fb-page"
      data-href="https://www.facebook.com/loda.mee/"
      data-small-header="true"
      data-adapt-container-width="true"
      data-hide-cover="false"
      data-show-facepile="true"
    >
      <blockquote cite="https://www.facebook.com/loda.mee/" class="fb-xfbml-parse-ignore">
        <a href="https://www.facebook.com/loda.mee/">Loda</a>
      </blockquote>
    </div>
  </div>
</template>

<script>
export default {
  name: "FBFanpage",
  mounted() {
    if (process.isClient) {
      window.$ = require("jquery");
      $(document).ready(function() {
        // $("#fbComment").remove();
        FB.XFBML.parse(document.getElementById("fb-page-wrapper"), function() {
          $("#fb-page")
            .find("span")
            .addClass("fb-fanpage-bug");
          $("#fb-page")
            .find("iframe")
            .addClass("fb-fanpage-bug");
        });
      });
    }
  }
};
</script>


<style>
.fb-fanpage-bug {
  width: 180px !important;
  height: 170px !important;
}
</style>
