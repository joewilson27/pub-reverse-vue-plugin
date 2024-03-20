import { App, Plugin } from 'vue'

const reverse: Plugin = {
  install(app: App) {
    app.config.globalProperties.$reverse = (s: string): string => {
      return s.split("").reverse().join("")
    }
  }
}

export default reverse
