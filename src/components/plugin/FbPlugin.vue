<template>
  <div id="fb-root"></div>
</template>

<script>
export default {
  name: "FbPlugin",
  mounted() {
    if (process.isClient) {
      window.$ = require("jquery");
      $(document).ready(function() {
        let fbScript = document.createElement("script");
        fbScript.setAttribute(
          "src",
          "https://connect.facebook.net/en_US/sdk.js"
        );
        document.head.appendChild(fbScript);
        window.FB = null;
        window.fbAsyncInit = function() {
          FB.init({
            appId: "2157004821059773",
            autoLogAppEvents: true,
            xfbml: false,
            version: "v3.2"
          });
          FB.XFBML.parse();
        };
      });
    }
  }
};
</script>