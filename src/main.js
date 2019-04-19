// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Global css for highligh markdown
import "prismjs/themes/prism.css";
import "~/assets/css/loda.css";

import Default from "~/layouts/Default.vue";
import List from "~/layouts/List.vue";
// import $ from 'jquery'
// import 'bootstrap'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Default", Default);
  Vue.component("List", List);


  head.link.push(
    {
      rel: "stylesheet",
      href: "https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext"
    },
    {
      rel: "stylesheet",
      href: "/assets/css/dashboard.css"
    }
  );
  head.script.push({ innerHTML: "var require = { baseUrl:  '.'};" });
  head.script.push(
    { src: "/assets/js/require.min.js" },
    { src: "/assets/js/dashboard.js" },
    // {
    //   src: "https://code.jquery.com/jquery-3.4.0.slim.js",
    //   integrity: "sha256-milezx5lakrZu0OP9b2QWFy1ft/UEUK6NH1Jqz8hUhQ=",
    //   crossorigin: "anonymous"
    // },
    // {
    //   src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js",
    //   integrity: "sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl",
    //   crossorigin: "anonymous"
    // }
    // { src: "/assets/js/fb-sdk.js" , async: true, defer: true,},
    // { src: "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.2&appId=2157004821059773&autoLogAppEvents=1", async: true, defer: true, crossorigin: "anonymous" }
    // { src: "/assets/plugins/charts-c3/plugin.js" },
    // { src: "/assets/plugins/maps-google/plugin.js" },
    // { src: "/assets/plugins/input-mask/plugin.js" },
    // { src: "/assets/plugins/datatables/plugin.js" }
  );
}
