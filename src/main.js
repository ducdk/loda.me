// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// Global css for highligh markdown
import "prismjs/themes/prism.css";
import "~/assets/css/loda.css";

import Default from "~/layouts/Default.vue";
import List from "~/layouts/List.vue";
import VueInstantSearch from 'vue-instantsearch'


export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Default", Default);
  Vue.component("List", List);

  Vue.use(VueInstantSearch);


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
  // head.script.push({ innerHTML: "var require = { baseUrl:  '/'};" });
  // head.script.push(
  //   { src: "/assets/js/require.min.js" },
  //   // { src: "/assets/js/dashboard.js" },
  //   // { src: "/assets/plugins/charts-c3/plugin.js" },
  //   // { src: "/assets/plugins/maps-google/plugin.js" },
  //   // { src: "/assets/plugins/input-mask/plugin.js" },
  //   // { src: "/assets/plugins/datatables/plugin.js" }
  // );
}
