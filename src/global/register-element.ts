import 'element-plus/lib/theme-chalk/base.css'
// import 'element-plus/lib/theme-chalk/index.css'
import { ElButton, ElForm } from 'element-plus'
import type { App } from 'vue'
const components = [ElForm, ElButton]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
