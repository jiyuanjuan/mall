import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant'
import toast from './components/common/toast/toast'


import 'assets/css/base.css';
import 'assets/css/normalize.css';
import 'vant/lib/index.css';

createApp(App)
.use(Swipe).use(SwipeItem).use(toast)
.use(store).use(router)
.mount('#app')
