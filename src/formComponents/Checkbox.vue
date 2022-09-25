<template>
  <el-checkbox-group v-model="checklist" @change="handlerChange">
    <el-checkbox label="复选框 A"></el-checkbox>
    <el-checkbox label="复选框 B"></el-checkbox>
    <el-checkbox label="复选框 C"></el-checkbox>
    <el-checkbox label="禁用" disabled></el-checkbox>
    <el-checkbox label="选中且禁用" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
import Vue from 'vue';
import {CheckboxGroup, Checkbox} from 'element-ui';
Vue.use(CheckboxGroup)
Vue.use(Checkbox)

export default {
  name: 'Checkbox',
  props: {
    value: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data () {
    return {
      checklist: this.value
    };
  },
  methods: {
    handlerChange(val) {
      this.$emit('input', val)
    }
  }
}
</script>
