<template>

<div><p>这是个人中心</p>

<p>
    <!-- 使用 router-link 组件来导航. -->
    <!-- 通过传入 `to` 属性指定链接. -->
    <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
    <router-link to="/register"><mt-button type="primary" class="logon">登录</mt-button></router-link>
    <router-link to="'/enroll"><mt-button type="danger" class="logon">注册</mt-button></router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</div>

</template>


<script>
export default {};
</script>

<style lang="less">

// .logon {
//     width: 80%;
//     margin:10px;
// }

</style>