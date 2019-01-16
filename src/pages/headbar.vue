<template>
  <div id="main">
    <div class="navBox">
      <div class="nav">
        <div class="navList">
          <router-link to="/" class="item cur">首页</router-link>
        </div>
        <div class="login" v-if="!isLogin ">
          <router-link to="/login" class="item">登录</router-link>
          <router-link to="/register" class="item">注册</router-link>
        </div>
        <div class="login" v-if="isLogin ">
          <a href="#" class="item" @click="toRecord">观看记录</a>
          <div class="item">已登录</div>
          <a href="#" class="item" @click="logout">注销</a>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'headbar',
    data() {
      return {
      }
    },
    computed:{
      isLogin:function () {
        return this.$store.getters.getIsLogin ;
      },
  },
    created() {
    },
    mounted() {
    },
    methods: {
      toRecord(){
        this.$router.push("/record");
      },
      logout(){
        this.axios.post('/api/user/logout')
          .then(res => {
            var r = res.data;
            if(r.code === 1){
              this.$notify({
                message: '注销成功',
                type: 'success'
              });
              this.$store.commit('ACCOUNT_LOGOUT');
              this.$router.push({name: 'home'})
            }else {
              this.$notify({
                title: '提示',
                message: r.msg,
                type: 'warning'
              });
            }
          })
          .catch(error => {
            this.$notify({
              title: '提示',
              message: "资源暂不可用",
              type: 'error'
            });
          });
      },
    }
  }
</script>
<style scoped>
  #main {
    padding-bottom: 70px;
  }
  .navBox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background: rgba(25, 35, 50, .98);
    z-index: 111;
  }

  .nav {
    margin: 0 auto;
    width: 1200px;
    height: 60px;
  }

  .navList {
    float: left;
  }

  .login {
    float: right;
  }

  .nav .item {
    position: relative;
    float: left;
    margin-right: 30px;
    line-height: 60px;
    font-size: 14px;
    color: #c8c8c8;
    transition: all .3s ease;
  }

  .nav .item.cur,
  .nav .item:hover {
    color: #fff;
    font-weight: 700;
  }

  .login .item {
    margin-right: 0;
    margin-left: 30px;
  }
</style>
