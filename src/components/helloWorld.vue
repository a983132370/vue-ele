<template>
  <div class="helloWorld">
    <navheader :activeIndex="activeIndex"></navheader>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  import navheader from './../components/nav'

  export default {
    name: 'helloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        activeIndex: '/helloWorld'
      }
    },
    components: {
      "navheader": navheader

    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
