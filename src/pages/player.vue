<template>
  <div class="playerHtml">
    <div>
      <div class="anno">
        <el-alert
          title="本项目的所有接口均来自互联网以及网页提供,仅供学习交流使用.我们尊重任何视频版权,请遵循相关法律法规。
本站一切资源不代表本站立场,也不保证其真实性与可用性,如果无意侵犯了您的合法权益,请联系我们(www.983132370#qq.com; #请替换成@),我们将及时处理."
          type="error"
          :closable="true">
        </el-alert>
      </div>
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
                  :src="play">
            <!--http://api.bbbbbb.me/jx/v.php?url=https://v.qq.com/x/cover/sifd2an7kx2h9h8.html-->
          </iframe>
        </div>
      </div>
      <div class="content-box">
        <div>
          <h1>{{info.title}}</h1>
          <h3>{{info.intro}}</h3>
        </div>
        <div>
          <!--顶 踩-->
        </div>
      </div>
      <div class="line"></div>
      <div class="page-show">
        <div class="right">
          <a href="#" @click="isVisible = !isVisible" v-if="pageInfoList.length>20">显示全部</a>
        </div>
      </div>
      <div :class="{'page-visible': isVisible,'page-hidden':!isVisible}">
        <el-button class="page-btn" plain type="primary" v-for="(item,index) in pageInfoList"
                   :key="index" :class="{'episodes-focus': item.focusFlag }" @click="changePlayer(index+1)">第{{item.pd}}集</el-button>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'player',
    data() {
      return {
        id : this.$route.query.id,
        episode : this.$route.query.episode,
        info : {id: null,
                infoUrl: "",
                intro: "",
                pic: "",
                playUrl: "",
                sort: null,
                source: "",
                title: "",
                type: "",
                upd: "",
        },
        pageInfoList : [],
        isVisible : false,
        play : "",
      }
    },
    mounted(){
      this.getSourceInfo();
    },
    watch: {
      '$route' (to, from) {
        this.$router.go(0);
      }
    },
    methods:{
      changePlayer(episode) {
        this.$router.push("/player?id="+this.id+"&episode="+episode);
      },
      getSourceInfo() {
        this.axios.get('/api/video/info/'+this.id+"?episode="+(this.episode === undefined?"":this.episode))
          .then(res => {
            var r = res.data;
            if(r.code){
              this.pageInfoList = r.data.episodes;
              this.info = r.data.info;

              this.pageInfoList.forEach((it,index) =>{
                if(this.info.episode === index+1){
                    it.focusFlag =true;
                    this.play = r.data.prefix + it.vurl;
                }
              })
          // alert(JSON.stringify(r.data));
            }else {
              alert(r.msg);
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
  .episodes-focus{
    background: #409EFF;
    border-color: #409EFF;
    color: #fff;
  }
  .line{
    border: 1px rgba(128, 128, 128, 0.16) dashed;
  }
  .page-show{
    height: 30px;
    padding: 5px;
  }
  .page-show .right{
    float: right;
    font-size: 13px;
  }
  .playerHtml>div>.anno{
    margin: 10px auto;
  }
  .playerHtml>div{
    width: 1200px;
    position: relative;
    display: table;
    margin: 30px auto 0px;
    padding: 30px 100px;
    background-color: #fff;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    z-index: 1;
  }
  .page-visible{
    width: 1200px;
    overflow: visible;
  }
  .page-hidden{
    width: 1200px;
    height: 100px;
    overflow: hidden;
  }
  .page-hidden>.page-btn,.page-visible>.page-btn{
    width: 110px;
    margin: 5px 10px 5px 0px;
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
    overflow: hidden;
  }
</style>
