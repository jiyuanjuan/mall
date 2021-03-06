import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { Swipe, SwipeItem } from 'vant'
import Fastclick from 'fastclick'


import 'assets/css/base.css';
import 'assets/css/normalize.css';
import 'vant/lib/index.css';

createApp(App)
.use(Swipe).use(SwipeItem)
.use(store).use(router)
.mount('#app')

Fastclick.attach(document.body)