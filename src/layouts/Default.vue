<template>
  <Base>
    <div class="flex-fill">
      <Header/>
      <div class="my-3 my-md-5">
        <!-- {% if page.page-title %}
      <div class="container">
        <div class="page-header">
          <h1 class="page-title">{{ page.page-title }}</h1>
        </div>
      </div>
        {% endif %}-->
        <slot/>
      </div>
    </div>
  </Base>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Base from '~/layouts/Base.vue';
import Header from "~/components/Header.vue";

export default {
  components: {
    Base,
    Header
  }
};
</script>
