<!--基本html代码区域-->
<template>
  <div class="login">
    <el-form ref="form" :model="form" label-width="100px" class="el-main">
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item>
            <span><font color="pink" size="3">LOGIN</font></span>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="账号：" prop="name">
            <el-input v-model="form.name" size="small" placeholder="请输入帐号"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5">
          <el-form-item label="密码：" prop="password">
            <el-input v-model="form.password" size="small"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="4">
          <el-form-item>
            <el-button type="primary" @click="submit">登录</el-button>
            <el-button @click="register">注册</el-button>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  import { Loading } from 'element-ui';
  export default {
    name: 'login',
    data() {
      return {
        form: {
          name: '123456',
          password: '123456',
        },
      }
    },
    methods: {
      /*提交进行判断的函数 */
      submit: function () {
        if (this.form.name === "123456" && this.form.password === "123456") {
          let loadingInstance = Loading.service({fullscreen: true});
          this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
            loadingInstance.close();
          });
          this.$router.push({name: 'home'});
        } else {
          this.$message({
            showClose: true,
            message: '账号或密码错误',
            type: 'error'
          });
        }
      },
      register: function () {
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 0px;
  }
</style>
