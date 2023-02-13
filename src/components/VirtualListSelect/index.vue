<template>
  <el-select
    v-model="selectedValue"
    :placeholder="placeholder"
    :clearable="clearable"
    :filterable="filterable"
    :disabled="disabled"
    :size="size"
    :filter-method="filterMethod"
    @visible-change="handleVisibleChange"
    ref="select"
  >
    <virtual-list
      :data-key="'id'"
      :data-sources="dataSourcesRes"
      :data-component="optionComponent"
      :keeps="keeps"
      :extra-props="extraProps"
      :style="virtualListStyle"
      ref="virtualList"
    >
    </virtual-list>
  </el-select>
</template>

<script>
import virtualList from 'vue-virtual-scroll-list';
import optionComponent from './optionComponent';
import { Select } from 'element-ui';
import Vue from 'vue';
Vue.use(Select)

export default {
  name: 'virtualListSelect',
  components: {
    virtualList
  },
  props: {
    value: [String, Number],
    /* virtual-list 参数 start */
    dataSources: {
      type: Array,
      default() {
        return []
      }
    },
    extraProps: {
      type: Object,
      default() {
        return {
          label: 'label',
          value: 'value'
        }
      }
    },
    placeholder: {
      type: String,
      default: 'please select'
    },
    maxHeight: {
      type: String,
      default: '245px'
    },
    keeps: {
      type: Number,
      default: 30
    },
    /* virtual-list 参数 end */
    /* el-select 参数 start */
    clearable: {
      type: Boolean,
      default: true
    },
    filterable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'small'
    }
    /* el-select 参数 end */
  },
  data () {
    return {
      optionComponent,
      filterVal: '',
    };
  },
  computed: {
    selectedValue: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val)
      }
    },
    virtualListStyle() {
      return {
        maxHeight: this.maxHeight,
        overflowY: 'auto'
      }
    },
    dataSourcesRes() {
      if (this.filterVal) {
        return this.dataSources.filter(item => {
          return item[this.extraProps.label].toLowerCase().includes(this.filterVal.toLowerCase())
        })
      }
      return this.dataSources
    }
  },
  methods: {
    handleVisibleChange(isVisible) {
      if (!isVisible) {
        this.filterVal = '';
        this.$nextTick(() => {
          this.$refs.virtualList.reset();
        })
      }
    },
    filterMethod(val) {
      this.filterVal = val.trim()
      this.$nextTick(() => {
        this.$refs.virtualList.reset();
      })
    },
  },
};
</script>

<style>

</style>