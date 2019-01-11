<template>
  <div class="playerHtml">
    <div>
      <div class="top">
        <div class="player_area">
          <!--https://v.qq.com/x/cover/sifd2an7kx2h9h8.html-->
          <iframe id="play_iframe" style="background-color: #000;" width="100%"
                  height="550" allowtransparency="true"
                  frameborder="0" scrolling="no"
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                  src="">
            <!--http://api.bbbbbb.me/jx/v.php?url=https://v.qq.com/x/cover/sifd2an7kx2h9h8.html-->
          </iframe>
        </div>
      </div>
      <div class="play-line">
        <div>
          <el-button type="success">线路1</el-button>
          <el-button type="success">线路2</el-button>
        </div>
      </div>
      <div class="content-box">
        <div>
          <h1>廉颇老矣尚能饭否</h1>
          <h3>廉颇老矣尚能饭否</h3>
        </div>
        <div>
          <!--顶 踩-->
        </div>
      </div>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {

      }
    },
    mounted(){

    },
    methods:{
      getSourceInfo() {
        let param = {};

        // this.axios.post('/api/user/login',this.qs.stringify(param))
        //   .then(res => {
        //     var r = res.data;
        //     if(r.code === 1){
        //       alert("成功");
        //       this.$router.push({name: 'home'})
        //     }else {
        //       alert(r.msg);
        //     }
        //   })
        //   .catch(error => {
        //     console.log(error);
        //   });
      }

    }
  }
</script>

<style scoped>
  .playerHtml>div{
    position: relative;
    display: table;
    margin: -150px auto 60px;
    padding: 60px 100px;
    background-color: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    z-index: 1;
  }



  .top ,.content-box{
    margin: 0 auto;
    width: 1200px;
  }
  .content-box h1,h3{
    margin: 5px auto;
    overflow: hidden;
  }
  .content-box h3{
    height: 25px;
  }
</style>
