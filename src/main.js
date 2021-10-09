import { createApp } from 'vue'
import App from './App.vue'
import Ads from 'vue-google-adsense'
Vue.use(require('vue-script2'))
Vue.use(Ads.Adsense)
createApp(App).mount('#app')
