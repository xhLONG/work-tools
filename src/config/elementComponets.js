import 'element-ui/lib/theme-chalk/index.css';
// import { Button, Switch } from 'element-ui'
import ElementUI from 'element-ui'

const install = function (Vue) {
  // Vue.use(Button)
  // Vue.use(Switch)
  Vue.use(ElementUI)
}

// 暴露一个插件，让vue以安装插件的形式引入element组件
export default install