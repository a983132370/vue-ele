<template>
  <div class="loginBox">
    <div class="top"></div>
    <div class="content-box">
      <h2>注册</h2>
      <div class="input-item">
        <input type="text" placeholder="请输入常用手机号/邮箱" v-model="account">
      </div>
      <div class="input-item">
        <input type="password" placeholder="请输入密码" v-model="pwd">
      </div>
      <div class="input-item">
        <input type="password" placeholder="请重复密码" v-model="repwd">
      </div>
      <div class="input-item">
        <input type="text" placeholder="请输入验证码" v-model="vcode">
        <img :src="vcodeSrc" @click="loadVcodeSrc"/>
      </div>
      <button class="btn" @click="register">注册</button>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'register',
    data() {
      return {
        vcodeSrc : "",
        account : "",
        pwd : "",
        repwd : "",
        vcode : "",
      }
    },
    mounted() {
      this.loadVcodeSrc();
    },
    methods: {
      loadVcodeSrc() {
        this.axios.get('/api/vcode/register')
          .then(res => {
            var r = res.data;
            if(r.code){
              this.vcodeSrc = r.data;
            }else {
              alert(r.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
      },
      register() {
        let param = {};
        param.account = this.account;
        param.pwd = this.pwd;
        param.repwd = this.repwd;
        param.vcode = this.vcode;
        this.axios.post('/api/user/register',this.qs.stringify(param))
          .then(res => {
            var r = res.data;
            if(r.code === 1){
              alert("成功");
              this.$router.push({name: 'login'})
            }else {
              this.loadVcodeSrc();
              alert(r.msg);
            }
          })
          .catch(error => {
            this.loadVcodeSrc();
            console.log(error);
          });
      }
    }
  }
</script>

<style scoped>
  .input-item{
    display: flex;
    width: 400px;
  }
  .input-item input{
    flex: 1;
  }
  .input-item img{
    width: 120px;
    height: 45px;
    margin-left: 10px;
  }

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
