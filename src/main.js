import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { createAxiosByinterceptors } from './js/request'
import installElementPlugin from './config/elementComponets.js'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

const request = createAxiosByinterceptors({
    // baseURL: 'https://api.ixiaowai.cn',
    loading: false,
});
// Vue.prototype.$request = request;
Vue.use((Vue) => {
    Vue.mixin({
        beforeCreate() {
            const options = this.$options;
            if (options.$request) {
                const request = options.$request;
                if (!this.$request) {
                    this.$request = request;
                }
            }else if (!this.$request && options.parent && options.parent.$request) {
                this.$request = options.parent.$request;
            }
        },
    })
})

Vue.use(installElementPlugin)

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAjIpt5oXhnhwDYxU0RicstS6GaZXf-Fpg',
    libraries: 'places'
  }
})

new Vue({
    router,
    store,
    $request: request,
    render: h => h(App)
}).$mount('#app')
