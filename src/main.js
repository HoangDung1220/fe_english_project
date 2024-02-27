import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'



library.add(faUserSecret)

const app = createApp(App)
 for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
   app.component(key, component)
 }
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(store).use(ElementPlus).use(router,axios).mount("#app");
