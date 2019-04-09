<template>
  <div id="app">
    <Toolbar/>
    <NavigationDrawers/>
    <Footer/>
  </div>
</template>

<script>
import NavigationDrawers from "./components/NavigationDrawers.vue";
import Footer from "./components/Footer.vue";
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "My Profile",
  components: {
    NavigationDrawers,
    Footer,
    Toolbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
