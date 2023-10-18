<template>
  <RouterView name="preloader"></RouterView>
  <div class="wrapper">
    <RouterView name="login"></RouterView>
    <RouterView name="exception"></RouterView>
    <RouterView name="header"></RouterView>
    <RouterView name="postsFilterBar"></RouterView>
    <RouterView name="newsTicker"></RouterView>
    <RouterView name="container"></RouterView>
    <RouterView name="footer"></RouterView>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>