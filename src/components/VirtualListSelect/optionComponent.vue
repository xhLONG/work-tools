<template>
  <el-option :label="source[label]" :value="source[value]"></el-option>
</template>

<script>
import {Option} from 'element-ui';
import Vue from 'vue';
Vue.use(Option);

export default {
  name: 'optionComponent',
  props: {
    source: {
      type: Object,
      default () {
        return {};
      }
    },
    label: String,
    value: String
  },
}
</script>

<style>

</style>