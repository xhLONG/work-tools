<template>
  <div>
    <VirtualListSelect v-model="virtualListSelectVal" :dataSources="virtualListSelectData" :filterable="true"></VirtualListSelect>
  </div>
</template>

<script>
import VirtualListSelect from '../components/VirtualListSelect/index.vue'

export default {
  components: {
    VirtualListSelect
  },
  data() {
    return {
      virtualListSelectVal: 6,
      virtualListSelectData: [],
    }
  },
  created () {
    var arr = new Array(50).fill(1);
    arr.forEach((v, index) => {
      this.virtualListSelectData.push({
        value: index,
        label: `test_${index}`,
        id: Math.random()
      });
    });
    arr.forEach((v, index) => {
      this.virtualListSelectData.push({
        value: index+50,
        label: `a_test_${index}`,
        id: Math.random()
      });
    });
  }
}
</script>

<style>

</style>