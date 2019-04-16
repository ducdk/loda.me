<template>
  <div>
    <div class="header py-4">
      <div class="container">
        <div class="d-flex">
          <g-link class="header-brand" to="/">
            <g-image src="~/assets/images/logo.png" class="header-brand-img" alt="loda logo"/>
            <!-- <span style="color: #4c4c4c; font-size: 1.1em; font-family: 'Open Sans', sans-serif;">Loda</span> -->
            <!-- <g-image src="~/assets/images/loda.png" class="header-brand-img" alt="loda logo"/> -->
          </g-link>
          <!-- <a class="header-brand" href="/index.html">
            <img src="/demo/brand/tabler.svg" class="header-brand-img" alt="tabler logo">
          </a>-->

          <div class="d-flex order-lg-2 ml-auto">
            <div class="nav-item d-none d-md-flex">
              <a
                :href="$static.metaData.githubUrl"
                class="btn btn-sm btn-outline-primary"
                target="_blank"
              >Source code</a>
            </div>
          </div>

          <a
            href="#"
            class="header-toggler d-lg-none ml-3 ml-lg-0"
            data-toggle="collapse"
            data-target="#headerMenuCollapse"
          >
            <span class="header-toggler-icon"></span>
          </a>
        </div>
      </div>
    </div>

    <div id="menu-bar" ref="menu" class="sticky-menu">
      <div class="header collapse d-lg-flex p-0" id="headerMenuCollapse">
        <div class="container">
          <div class="row align-items-center">
            <!-- <div class="col-lg-3 ml-auto">
            <form class="input-icon my-3 my-lg-0">
              <input
                type="search"
                class="form-control header-search"
                placeholder="Search&hellip;"
                tabindex="1"
              >
              <div class="input-icon-addon">
                <i class="fe fe-search"></i>
              </div>
            </form>
            </div>-->
            <div class="col-lg order-lg-first">
              <Menu/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    githubUrl
  }
}
</static-query>


<script>
import Menu from "~/components/base/Menu.vue";
export default {
  name: "Header",
  components: {
    Menu
  },
  methods: {
    onMenuScroll() {
      if (document.documentElement.scrollTop > this.$refs.menu.offsetTop) {
        this.$refs.menu.style.position = "fixed";
      } else {
        this.$refs.menu.style.position = "relative";
      }
    }
  },
  created() {
    if (process.isClient) {
      window.addEventListener("scroll", this.onMenuScroll);
    }
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener("scroll", this.onMenuScroll);
    }
  }
};
</script>

<style scoped>
.sticky-menu {
  width: 100%;
  top: 0px;
  z-index: 2000;
}
</style>
