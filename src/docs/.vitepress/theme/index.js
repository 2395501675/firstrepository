// .vitepress/theme/index.js

// You can directly import Vue files in the theme entry
// VitePress is pre-configured with @vitejs/plugin-vue.
import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import ElementPlus from 'element-plus';
export default {
  ...DefaultTheme,
  // override the Layout with a wrapper component that
  // injects the slots
  Layout: MyLayout,
  enhanceApp({app}){
    app.use(ElementPlus)
  }
}
