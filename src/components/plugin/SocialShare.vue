<template>
  <div :class="{'sticky-top' : sticky}">
    <div class="h6">Share</div>
    <button type="button" class="btn btn-icon btn-facebook mr-1">
      <i class="fab fa-facebook-f"></i>
    </button>
    <button type="button" class="btn btn-icon btn-twitter mr-1">
      <i class="fab fa-twitter"></i>
    </button>
    <button type="button" class="btn btn-icon btn-google mr-1">
      <i class="fab fa-google"></i>
    </button>
    <button type="button" class="btn btn-icon btn-github mr-1">
      <i class="fab fa-github"></i>
    </button>
  </div>
</template>

<script>
export default {
    name: 'SocialShare',
    props:{
        sticky: Boolean
    }
}
</script>

