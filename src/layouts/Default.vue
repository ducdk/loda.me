<template>
  <Base>
    <div class="flex-fill">
      <!-- header -->
      <Header/>

      <FbPlugin/>
      <!-- title -->
      <div v-if="title" class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">{{ title }}</h1>
          </div>
        </div>
      </div>

      <!-- content -->
      <div class="container">
        <slot/>
      </div>
      <!-- end content -->
    </div>

    <!-- footer -->
    <Footer/>
  </Base>
</template>

<script>
import Base from "~/layouts/Base.vue";
import Header from "~/components/base/Header.vue";
import Footer from "~/components/base/Footer.vue";
import FbPlugin from "~/components/plugin/FbPlugin.vue";

export default {
  props: {
    title: String
  },
  components: {
    Base,
    Header,
    Footer,
    FbPlugin
  }
};
</script>
