<template>
  <div id="navheader">
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          v-bind:router = "true"
          active-text-color="#ffd04b" >
          <el-menu-item index="/home">LOGO</el-menu-item>
          <!--<el-menu-item index="/helloWorld">helloWorld</el-menu-item>-->
          <el-menu-item style="" index="/login">login</el-menu-item>
        </el-menu>
      </el-header>
    </el-container>
    <!--<div>-->
      <!--<router-view/>-->
    <!--</div>-->
  </div>
</template>

<script>
    export default {
      name: "navheader",
      props: ["activeIndex"],
      data(){
        return {
        }
      }
    }
</script>

<style scoped>
  #navheader {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: right;
    margin-top: 0px;
  }
</style>
