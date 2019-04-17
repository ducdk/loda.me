<template>
  <div class="card" :class="{'card-borderless': borderless}">
    <!-- status -->
    <div class="card-status" :class="color"></div>

    <div class="card-header" :class="{'d-none': hideTitle}">
      <!-- title -->
      <h3 class="card-title">{{title}}</h3>

      <!-- option, close button, etc -->
      <div class="card-options" v-if="option">
        <a href="#" class="card-options-collapse" data-toggle="card-collapse">
          <i class="fe fe-chevron-up"></i>
        </a>
        <a href="#" class="card-options-remove" data-toggle="card-remove">
          <i class="fe fe-x"></i>
        </a>
      </div>
    </div>

    <!-- content -->
    <div class="card-body" :class="bodyClass">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    hideTitle: Boolean,
    borderless: Boolean,
    color: String,
    bodyClass: Object,
    option: Boolean
  }
};
</script>
