// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

// CSS
import "~/assets/css/dashboard.css";

import Default from "~/layouts/Default.vue";

export default function(Vue, { router, head, isClient }) {
  head.link.push(
    {
      rel: "stylesheet",
      href: "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,400,400i,500,500i,600,600i,700,700i&amp;subset=latin-ext"
    },
    {
      rel: "stylesheet",
      href: "/assets/css/dashboard.css"
    },
    {
      rel: "stylesheet",
      href: "/assets/plugins/charts-c3/plugin.css"
    },
    {
      rel: "stylesheet",
      href: "/assets/plugins/maps-google/plugin.css"
    }
  );
  head.script.push({ src: "/assets/js/require.min.js" }, { innerHTML: "requirejs.config({baseUrl: '.'})", type: "text/javascript" });
  head.script.push(
    { src: "/assets/js/dashboard.js" },
    { src: "/assets/plugins/charts-c3/plugin.js" },
    { src: "/assets/plugins/maps-google/plugin.js" },
    { src: "/assets/plugins/input-mask/plugin.js" },
    { src: "/assets/plugins/datatables/plugin.js" }
  );

  // Set default layout as a global component
  Vue.component("Default", Default);
}
