<template>
    <div>
        <ScrollBar></ScrollBar>
        <Checkbox v-model="checkList"></Checkbox>
        <el-button size="mini" type="primary">btn</el-button>
        <GoogleMap></GoogleMap>
    </div>
</template>

<script>
import ScrollBar from '../components/ScrollBar.vue'
import GoogleMap from '../components/GoogleMap.vue'
import Checkbox from '@/formComponents/Checkbox.vue';
export default {
  components: {
    ScrollBar,
    Checkbox,
    GoogleMap
  },
  data() {
    return {
      checkList: ['选中且禁用','复选框 A']
    }
  }
}
</script>