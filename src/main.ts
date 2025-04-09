import { createApp } from 'vue'
import { registerMicroApps, start } from 'qiankun'
import App from './App.vue'
import router from './router'
import microApps from './micro/apps'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 导入全局样式
import './assets/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(ElementPlus)
app.mount('#app')

registerMicroApps(microApps, {
  beforeLoad: [
    (app) => {
      // console.log("before load", app.name);
      return Promise.resolve()
    },
  ],
  beforeMount: [
    (app) => {
      // console.log("before mount", app.name);
      return Promise.resolve()
    },
  ],
  afterUnmount: [
    (app) => {
      // console.log("after unmount", app.name);
      return Promise.resolve()
    },
  ],
})

// 启动 qiankun
start({
  prefetch: true, // 预加载资源
})
