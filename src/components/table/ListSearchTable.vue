<template>
  <div class="card">
    <div class="card-body p-0">
      <div class="table-responsive">
        <table class="table card-table table-vcenter">
          <tbody>
            <tr v-for="(item,index) in items" :key="index">
              <td>
                <g-link :to="item.path">{{item.title}}</g-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "ListSearchTable",
  props: {
    items: Array
  }
};
</script>
