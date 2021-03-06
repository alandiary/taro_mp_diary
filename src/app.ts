import { createApp } from 'vue'
// import { Button, Toast, Swiper } from '@nutui/nutui-taro';
import NutUI from "@nutui/nutui-taro";
import '@nutui/nutui-taro/dist/style.css';

import './app.less'

const App = createApp({
  onShow () {

  },
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(NutUI)

export default App
