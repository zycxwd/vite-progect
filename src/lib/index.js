import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    //vite拿到文件名称{./popup/index.vue: () => import("/src/lib/popup/index.vue")}
    const components = import.meta.glob('./*/index.vue')
    console.log(Object.entries(components))
    for (const [key, value] of Object.entries(components)) {
      // key:./popup/index.vue // value:() => import("/src/lib/popup/index.vue")
      const componentsName = `m-${key.replace('./', '').split('/')[0]}`
      // defineAsyncComponent异步导入接受一个函数,value是一个箭头函数
      app.component(componentsName, defineAsyncComponent(value))
    }
  }
}
