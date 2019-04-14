<template>
  <Base>
    <div class="flex-fill">
      <!-- header -->
      <Header/>

      <!-- title -->
      <div v-if="title" class="my-3 my-md-5">
        <div class="container">
          <div class="page-header">
            <h1 class="page-title">{{ title }}</h1>
          </div>
        </div>
      </div>

      <!-- content -->
      <slot/>
      <!-- end content -->
    </div>

    <!-- footer -->
    <Footer/>
  </Base>
</template>

<script>
import Base from "~/layouts/Base.vue";
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

export default {
  props: {
    title: String
  },
  components: {
    Base,
    Header,
    Footer
  }
};
</script>
