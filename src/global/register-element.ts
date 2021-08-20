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
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn
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
  ElCheckbox,
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
