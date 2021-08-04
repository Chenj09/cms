import 'element-plus/lib/theme-chalk/base.css'
// import 'element-plus/lib/theme-chalk/index.css'
import {
  ElButton,
  ElForm,
  ElTabs,
  ElTabPane,
  ElFormItem,
  ElInput,
  ElLink,
  ElCheckbox
} from 'element-plus'
import type { App } from 'vue'
const components = [
  ElForm,
  ElButton,
  ElTabs,
  ElTabPane,
  ElFormItem,
  ElInput,
  ElLink,
  ElCheckbox
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
