import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import DF from './assets/DF.png'

const favicon = document.querySelector('link#favicon') || document.createElement('link')
favicon.id = 'favicon'
favicon.rel = 'icon'
favicon.href = DF
document.head.appendChild(favicon)

createApp(App).mount('#app')
