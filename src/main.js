import { createApp } from 'vue'
import App from './App.vue'
import VueAdsense from 'vue-adsense'
Vue.component('adsense', VueAdsense)

createApp(App).mount('#app')
