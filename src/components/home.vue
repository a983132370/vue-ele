<template>
  <div id="home">
    <navheader :activeIndex="activeIndex"></navheader>
    <el-row>
      <el-col>
        <el-row>
          <el-col>
            <el-carousel :interval="4000" type="card" height="280px" arrow="never">
              <el-carousel-item v-for="item in rec_banners" :key="item">
                <img width="100%" height="100%" :src="item.pic">
              </el-carousel-item>
            </el-carousel>
          </el-col>
        </el-row>
        <el-row :gutter="20"  >
          <el-col :span="20" >
            <div style="border: 1px rgba(128,128,128,0.14) solid"></div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="20" >
            <div class="h1 title" >电视剧</div>
          </el-col>
        </el-row>
        <el-row :gutter="20" class="list">
          <el-col :span="4" v-for="item in 12" :key="item">
            <div class="grid-content bg-purple" style="margin-top: 10px">
              <img src="http://puui.qpic.cn/vcover_vt_pic/0/924ic63thtubo491539913042/220" class="image">
            </div>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<style>
  #home{
    width:1400px;
    margin:0 auto;
  }
  .list img{
    width:100%;
  }
  .title{font-size: 25px;padding-top: 5px}
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
</style>

<script>
  import navheader from './../components/nav'

  export default {
    name: 'home',
    data() {
      return {
        state2: '',
        activeIndex: '/home',
        rec_banners: [],
        currentDate: new Date()
      }
    },
    components: {
      "navheader": navheader
    },
    methods: {
      login() {
        this.$router.push({path: '/login'});
      },
      load_rec_banners() {
        return [
          {"pic": "//puui.qpic.cn/media_img/lena/PICxpgz13_580_1680/0"},
          {"pic": "//puui.qpic.cn/media_img/lena/PICd1loir_580_1680/0"},
          {"pic": "//puui.qpic.cn/tv/0/48015925_1680580/0"},
        ];
      }
    },
    mounted() {
      this.rec_banners = this.load_rec_banners();
    }
  }
</script>
