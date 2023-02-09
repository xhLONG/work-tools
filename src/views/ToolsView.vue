<template>
    <div>
        <ScrollBar></ScrollBar>
        <Checkbox v-model="checkList"></Checkbox>
        <el-button size="mini" type="primary">btn</el-button>
        <VirtualScrollList></VirtualScrollList>
        <GoogleMap></GoogleMap>
    </div>
</template>

<script>
import ScrollBar from '../components/ScrollBar.vue'
import GoogleMap from '../components/GoogleMap.vue'
import VirtualScrollList from '../components/VirtualScrollList/index.vue'
import Checkbox from '@/formComponents/Checkbox.vue';
export default {
  components: {
    ScrollBar,
    Checkbox,
    GoogleMap,
    VirtualScrollList
  },
  data() {
    return {
      checkList: ['选中且禁用','复选框 A']
    }
  }
}
</script>