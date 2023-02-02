# Vue 3 + Vite

## vue3 相关使用

## 公共组件相关使用

### 路径 @/lib

## vite 相关配置

### 获取文件

`import.meta.glob('./*/index.vue')`

## 动态 rem 值修正 tailwind

- `useREM 方法`
- `tailwind.config.js 重置 fongsize 配置`

## JS 使用相关

### for of 相关

- Object.entries(object)//将对象 object 拆出 key 和 value 放入数组

```
const components= {
  ./p0/index.vue: () => import("/src/lib/p0/index.vue"),
  ./p1/index.vue: () => import("/src/lib/p1/index.vue"),

  }
console.log(Object.entries(components))
<!-- 结果 -->
[
  ['./p0/index.vue',' import("/src/lib/p0/index.vue")'],
  ['./p1/index.vue',' import("/src/lib/p1/index.vue")']
]

```

### String 方法

- replace 方法
- split 方法

## 接口说明

## 项目启动

- `npm install`
- `npm run dev`
