
<template>
  <!-- eslint-disable vue/require-component-is -->
  <div>
    <component v-if="!meta.microApp" v-bind="linkProps(to)">
      <slot />
    </component>
  </div>
</template>

<script>
import { isExternal } from '@/utils/validate'

export default {
  props: {
    to: {
      type: String,
      required: true
    },
    meta: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    linkProps(url) {
      if (isExternal(url)) {
        return {
          is: 'a',
          href: url,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        is: 'router-link',
        to: url
      }
    },
  }
}
</script>
