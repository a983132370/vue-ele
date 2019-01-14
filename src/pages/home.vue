<template>
  <div class="main">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide"><img src="//puui.qpic.cn/media_img/lena/PICxpgz13_580_1680/0"></div>
        <div class="swiper-slide"><img src="//puui.qpic.cn/media_img/lena/PICd1loir_580_1680/0"></div>
        <div class="swiper-slide"><img src="//puui.qpic.cn/tv/0/48015925_1680580/0"></div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev swiper-button-white"></div>
      <div class="swiper-button-next swiper-button-white"></div>
    </div>
    <div class="section">
      <h2 class="title">电影</h2>
      <div class="movieList">
        <ul class="inner">
          <li class="item" v-for="(item,index) in movieList" >
            <a class="area">
              <div class="pic" @click="doplay(item)">
                <img :src="item.pic">
                <div class="desc">
                  {{item.upd}}
                </div>
              </div>
              <h3>{{item.title}}</h3>
              <p>{{item.intro}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <h2 class="title">电视剧</h2>
      <div class="movieList">
        <ul class="inner">
          <li class="item" v-for="(item,index) in tvList" >
            <a class="area">
              <div class="pic" @click="doplay(item)">
                <img :src="item.pic">
                <div class="desc">
                  {{item.upd}}
                </div>
              </div>
              <h3>{{item.title}}</h3>
              <p>{{item.intro}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="section">
      <h2 class="title">动漫</h2>
      <div class="movieList">
        <ul class="inner">
          <li class="item" v-for="(item,index) in cartoonList" >
            <a class="area">
              <div class="pic" @click="doplay(item)">
                <img :src="item.pic">
                <div class="desc">
                  {{item.upd}}
                </div>
              </div>
              <h3>{{item.title}}</h3>
              <p>{{item.intro}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Swiper from 'swiper';

  export default {
    name: 'home',
    data() {
      return {
        movieList: [],
        tvList: [],
        cartoonList: [],
      }
    },
    mounted() {
      this.initSwiper();
      this.loadMovieList();
    },
    methods: {
      loadMovieList() {
        this.axios.get('/api/video/findHomeList')
          .then(res => {
            var r = res.data;
            if(r.code){
              this.movieList = r.data.movieList;
              this.tvList = r.data.tvList;
              this.cartoonList = r.data.cartoonList;

            }else {
              alert(r.msg);
            }
          })
          .catch(error => {
            console.log(error);
          });
        // this.movieList = [
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        //   {"pic": "//puui.qpic.cn/vcover_vt_pic/0/n53msqi44qlqd691518088692/220"},
        // ];
      },
      doplay(item){
        this.$router.push("/player?id="+item.id)
      },
      initSwiper() {
        new Swiper('.swiper-container', {
          loop: true,
          autoHeight: true,
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        })
      }
    }
  }
</script>
<style scoped>
  .movieList .item .pic{
    position: relative;
  }
  .movieList .item .pic img{
    width: 230px;
    height: 320px;
  }
  .movieList .item .pic .desc{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    background: rgba(0,0,0,.5);
    color: white;
    font-size: 13px;
    padding: 0 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
  .swiper-slide img{
    width: 100%;
  }
  .swiper-container {
    width: 1200px;
  }

  .swiper-button-prev, .swiper-button-next {
    opacity: .8;
    transition: opacity .3s ease;
  }

  .swiper-button-prev:hover, .swiper-button-next:hover {
    opacity: 1;
  }

  .section {
    overflow: hidden;
  }

  .section .title {
    margin-top: 30px;
    height: 54px;
    line-height: 54px;
    font-size: 22px;
    border-bottom: solid #e8e8e8 1px;
  }

  .movieList {
    margin-top: 10px;
  }

  .movieList .inner {
    width: 1220px;
  }

  .movieList .item {
    float: left;
    margin-right: 20px;
    margin-bottom: 23px;
    width: 224px;
  }

  .movieList .item .area {
    display: block;
  }

  .movieList .item .area img {
    width: 100%;
  }

  .movieList .item .area h3 {
    margin-top: 6px;
    height: 20px;
    line-height: 20px;
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }

  .movieList .item .area p {
    margin-top: 3px;
    height: 20px;
    line-height: 20px;
    font-size: 14px;
    color: #888;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
  }
</style>
