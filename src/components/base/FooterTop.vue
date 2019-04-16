<template>
  <div id="top-footer" class="footer">
    <div class="container">
      <div class="row row-cards row-deck">
        <div class="col-lg-3 ">
          <GithubCard
            color="bg-green"
            user="loda-kun"
            repo="java-all"
          >Toàn bộ code về java từ cơ bản đến nâng cao bằng tiếng việt</GithubCard>
        </div>
        <div class="col-lg-3">
          <GithubCard
            color="bg-teal"
            user="loda-kun"
            repo="vue-all"
          >Toàn bộ code về Vue bằng tiếng việt</GithubCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GithubCard from "~/components/cards/GithubCard.vue";

export default {
  name: "FooterTop",
  components: {
    GithubCard
  }
};
</script>

