<template>
  <el-select
    v-model="selectedValue"
    :placeholder="placeholder"
    :clearable="clearable"
    :filterable="filterable"
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
    >
    </virtual-list>
  </el-select>
</template>

<script>
import virtualList from 'vue-virtual-scroll-list';
import optionComponent from './optionComponent';
import { Form, FormItem, Select } from 'element-ui';
import Vue from 'vue';
Vue.use(Form)
Vue.use(FormItem)
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
      default: 10
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
          return item[this.extraProps.label].includes(this.filterVal)
        })
      }
      return this.dataSources
    }
  },
  methods: {
    handleVisibleChange() {
      this.filterVal = '';
      const select = this.$refs.select;
      const child = select.$children;
      const [, selectDrop] = child;
      const [cchild] = selectDrop.$children;
      const [a] = cchild.$children;
      const [group] = a.$el.children;
      group.style.paddingTop = '0px';
    },
    filterMethod(val) {
      this.filterVal = val.trim()
    }
  },
};
</script>

<style>

</style>