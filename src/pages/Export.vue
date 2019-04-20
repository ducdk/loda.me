<template>
  <div>
    <button @click="download">get</button>
  </div>
</template>

<script>
export default {
  name: "export",
  methods: {
    download() {
      if (process.env.GRIDSOME_LODA) {
        const data = JSON.stringify(this.data);
        const blob = new Blob([data], { type: "text/plain" });
        const a = document.createElement("a");
        a.download = "data.json";
        a.href = window.URL.createObjectURL(blob);
        a.dataset.downloadurl = ["text/json", a.download, a.href].join(":");
        a.click();
      } else {
        console.log("none!");
      }
    }
  },
  computed: {
    data() {
      var data = [];
      if (process.env.GRIDSOME_LODA) {
        this.$page.articles.edges.forEach(function(edge) {
          var temp = edge.node;
          temp.content = edge.node.content.replace(/<(?:.|\n)*?>/gm, "");
          data.push(temp);
        });
      }
      return data;
    }
  }
};
</script>


<page-query>
query Article {
  articles : allArticle(perPage: 100000) {
    edges {
      node {
        id
        date (format: "D MMMM, YYYY")
        title
        description
        timeToRead
        content
        path
      }
    }
  }
}
</page-query>