import Message from '@/components/App.vue';

<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/Contact">Contact</router-link>
    <router-link to="/Project">Project</router-link>
  </nav>
  <router-view />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  
}

nav {
  background: gray;
  margin: 0;
  position: relative;
  text-align: center;
  top:0;
  width: 100%;
  z-index: 100;
  padding: 10px 20px;
  justify-content: center;

  a {
    text-decoration: none;
    color: #fff;
    width: 100px;
    padding: 25px 20px;
    margin: 0 15px;
    font-size: 18px;
    text-transform: uppercase;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    display: inline-block;
    transition: color 0.5s ease-in-out;

    &:hover {
      color: #052c7a; /* Optional: Add hover effect */
      transition: 0.5s ease-in-out;
      text-decoration: underline;
    }
  }

  .router-link-exact-active {
    color: white;
  }
  
}
</style>

