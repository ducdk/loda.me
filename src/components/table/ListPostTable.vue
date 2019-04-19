<template>
  <div class="table-responsive">
    <table class="table card-table table-vcenter">
      <!-- <thead>
                  <tr>
                    <th>Title</th>
                    <th>Date</th>
                  </tr>
      </thead>-->
      <tbody>
        <tr v-for="edge in articles.edges.slice(0,7)" :key="edge.node.id">
          <td>
            <g-link :to="edge.node.path">{{edge.node.title}}</g-link>
          </td>
          <td v-if="showDate" class="text-nowrap w-1">May 6, 2018</td>
          <!-- <td class="w-1">
                      <a href="#" class="icon">
                        <i class="fe fe-trash"></i>
                      </a>
          </td>-->
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
export default {
    name: 'ListPostTable',
    props: {
        articles: Object,
        showDate: {
            type: Boolean,
            default: true
        }
    }
}
</script>
