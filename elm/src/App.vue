<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" type="text/css">
*{
  padding: 0;
  margin: 0;
}
html,body,#app {
 width: 100%;
 height: 100%;
}
// #app{
//   display: flex;
// }
</style>
