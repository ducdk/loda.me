<template>
  <div id="fb-root"></div>
</template>

<script>
export default {
  name: "FbPlugin",
  metaInfo: {
    script: [
      {
        src:
          "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=2157004821059773&autoLogAppEvents=1",
        async: true,
        defer: true,
        crossorigin: "anonymous"
      }
    ]
  },
  mounted() {
    // window.fbAsyncInit = function() {
    //   //   FB.init({
    //   //     appId: "2157004821059773",
    //   //     autoLogAppEvents: true,
    //   //     xfbml: true,
    //   //     version: "v3.2"
    //   //   });
    //   console.log("parsing");
    //   FB.XFBML.parse();
    //   console.log("parsing done");
    // };
   
  }
};
</script>