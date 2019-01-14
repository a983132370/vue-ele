<template>
  <div class="loginBox">
    <div class="top"></div>
    <div class="content-box">
      <h2>登录</h2>
      <div class="input-item">
        <input type="text" v-model="account" placeholder="请输入常用手机号/邮箱">
      </div>
      <div class="input-item">
        <input type="password" v-model="pwd" placeholder="请输入密码">
      </div>
      <button class="btn" @click="login">登录</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        account : "",
        pwd : "",
      }
    },
    mounted(){

    },
    methods:{
      login() {
        let param = {};
        param.account = this.account;
        param.pwd = this.pwd;
        this.axios.post('/api/user/login',this.qs.stringify(param))
          .then(res => {
            var r = res.data;
            if(r.code === 1){
              this.$notify({
                title: '登录提示',
                message: '欢迎登录',
                type: 'success'
              });
              this.$store.commit('ACCOUNT_LOGIN');
              this.$router.push({name: 'home'})
            }else {
              this.$notify({
                title: '错误提示',
                message: r.msg,
                type: 'warning'
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }

    }
  }
</script>

<style scoped>
  .loginBox .top {
    position: relative;
    width: 100%;
    height: 360px;
    background-color: #00b38a;
  }

  .loginBox .content-box {
    position: relative;
    display: table;
    margin: -150px auto 60px;
    padding: 60px 100px;
    background-color: #fff;
    border: solid #dce1e6 1px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    z-index: 1;
  }

  .loginBox .content-box h2 {
    margin-bottom: 40px;
    font-size: 28px;
    text-align: center;
  }

  .loginBox .content-box .btn {
    display: block;
    margin-top: 20px;
    width: 100%;
    line-height: 46px;
    height: 46px;
    font-size: 18px;
    color: #fff;
    border-color: #00b38a;
    background-color: #00b38a;
    border-radius: 2px;
    cursor: pointer;
  }

  .loginBox .content-box .input-item + .input-item {
    margin-top: 20px;
  }

  .loginBox .content-box input {
    display: block;
    position: relative;
    width: 290px;
    height: 44px;
    line-height: 44px;
    font-size: 14px;
    vertical-align: middle;
    color: #333;
    border-bottom: solid #ededed 1px;
    outline: 0;
    z-index: 1;
  }
</style>
