<template>
  <div class="card">
    <div class="card-status" :class="color"></div>
    <div class="card-body d-flex flex-column">
      <a target="_blank" :href="url">
        <h4>
          <i class="fab fa-github"></i>
          {{repo}}
        </h4>
      </a>

      <p>
        <slot/>
      </p>
      <div class="d-flex align-items-center mt-auto">
        <div>
          <a target="_blank" class="btn btn-outline-primary btn-sm" :href="url">
            <i class="fa fa-star"></i> Star
          </a>
          <a target="_blank" class="btn btn-outline-default btn-sm" :href="downloadUrl">
            <i class="fe fe-eye"></i> Watch
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GithubCard",
  props: {
    user: String,
    repo: String,
    color: String
  },
  computed: {
    url() {
      return "https://github.com/" + this.user + "/" + this.repo;
    },
    downloadUrl() {
      return this.url + "/subscription";
    }
  }
};
</script>
