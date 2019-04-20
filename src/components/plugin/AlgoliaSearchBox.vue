<template>
  <ClientOnly>
    <ais-instant-search :search-client="searchClient" index-name="Blogs">
      <ais-search-box>
        <div class="input-icon my-3 my-lg-0" slot-scope="{ refine }">
          <input
            type="search"
            v-model="input"
            @input="refine($event.currentTarget.value)"
            class="form-control header-search"
            placeholder="Tìm kiếm"
            tabindex="1"
          >
          <div class="input-icon-addon">
            <i class="fe fe-search"></i>
          </div>
        </div>
      </ais-search-box>

      <ais-hits>
        <div
          class="position-fixed"
          style="z-index: 3000;"
          v-show="input.length > 0"
          slot-scope="{ items }"
          v-if="items.length> 0"
        >
          <ListSearchTable :items="items"/>
        </div>
      </ais-hits>
    </ais-instant-search>
  </ClientOnly>
</template>

<script>
import algoliasearch from "algoliasearch/lite";
import ListSearchTable from "~/components/table/ListSearchTable.vue";

export default {
  name: "AlgoliaSearchBox",
  components: {
    ListSearchTable
  },
  data() {
    return {
      searchClient: algoliasearch(
        "ANI5UMTIYW",
        "d22e77660256b66a843c0c314cee00e0"
      ),
      input: ""
    };
  }
};
</script>
