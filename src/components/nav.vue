<template>
  <div id="navheader">
    <!--<el-container>-->
      <!--<el-header>-->
        <!--<el-menu-->
          <!--:default-active="activeIndex"-->
          <!--class="el-menu-demo"-->
          <!--mode="horizontal"-->
          <!--background-color="#545c64"-->
          <!--text-color="#fff"-->
          <!--v-bind:router = "true"-->
          <!--active-text-color="#ffd04b" >-->
          <!--<el-menu-item index="/home">LOGO</el-menu-item>-->
          <!--&lt;!&ndash;<el-menu-item index="/helloWorld">helloWorld</el-menu-item>&ndash;&gt;-->
          <!--<el-menu-item style="" index="/login">login</el-menu-item>-->
        <!--</el-menu>-->
      <!--</el-header>-->
    <!--</el-container>-->
    <div id="navs">
      <div>
        <img class="nav-logo" src="https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=1224579036,3430335986&fm=58&s=37F76832DD66EE1149549AF40300D0B5&bpow=121&bpoh=75"/>
      </div>
      <div></div>
    </div>
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
  #navs {
    height: 50px;
    background-color: rgba(128, 128, 128, 0.03);
  }
  .nav-logo {
    height: 50px;
  }
  #navheader {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 0px;
  }
</style>
