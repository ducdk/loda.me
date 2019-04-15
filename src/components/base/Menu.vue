<template>
  <ul class="nav nav-tabs border-0 flex-column flex-lg-row">
    <li v-for="(data, i) in menu" :key="i" class="nav-item" :class="{ dropdown: data.childs !== undefined }">
      <g-link
        v-if="data.url !== undefined"
        :to="data.url"
        class="nav-link"
        :data-toggle="data.childs !== undefined ? 'dropdown' : undefined"
      >
        <i v-if="data.icon" :class="data.icon" class="mr-1" ></i>
        {{data.name}}
      </g-link>
      <a
        v-else
        href="javascript:void(0)"
        class="nav-link"
        :data-toggle="data.childs !== undefined ? 'dropdown' : undefined"
      >
        <i v-if="data.icon" :class="data.icon"></i>
        {{data.name}}
      </a>

      <div v-if="data.childs" class="dropdown-menu dropdown-menu-arrow">
        <g-link
          v-for="(child, j) in data.childs"
          :key="j"
          :to="child.url"
          class="dropdown-item"
        >{{ child.name }}</g-link>
      </div>
    </li>
  </ul>
</template>


<script>
export default {
  name: "Menu",
  data() {
    return {
      menu: [
        {
          name: "Home",
          icon: "fas fa-home",
          url: "/"
        },
        {
          name: "Java",
          icon: "fab fa-java",
          url: "/java",
          // childs: [
          //   {
          //     name: "Java cơ bản",
          //     icon: "fe fe-box",
          //     url: "/java#basic"
          //   },
          //   {
          //     name: "Java nâng cao",
          //     icon: "fe fe-pie-chart",
          //     url: "/java#advanced"
          //   }
          // ]
        },
        {
          name: "Spring Boot",
          icon: "fas fa-leaf",
          url: "/spring-boot",
        },
        {
          name: "Hibernate",
          icon: "fas fa-database",
          url: "/hibernate",
        },
        {
          name: "Vue.js",
          icon: "fab fa-vuejs",
          url: "/vuejs",
        },
        {
          name: "Frontend",
          icon: "fab fa-internet-explorer",
          url: "/frontend",
        },
        {
          name: "Others",
          icon: "fas fa-dice-d6",
          url: "/others",
        },
      ]
    };
  }
};
</script>
