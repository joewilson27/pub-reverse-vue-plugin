import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import reverse from '../lib/reverse'

createApp(App).use(reverse).mount('#app')
