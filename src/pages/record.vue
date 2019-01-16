<template>
  <div class="main">
    <div class="section">
      <div class="title">
        <div class="t-left" >历史记录</div>
      </div>
      <div class="movieList">
        <ul class="inner">
          <li class="item" v-for="(item,index) in videoList" >
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
      <div class="page-info">
        <el-pagination
          :page-size="queryInfo.pageSize"
          :current-page="queryInfo.page"
          layout="prev, pager, next"
          @current-change="changePage"
          :total="queryInfo.total">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'record',
    data() {
      return {
        videoList: [],
        queryInfo : {page :1 ,
                    pageSize : 30 ,
                    search: "",
                    total: 1,
                    },
      }
    },
    mounted() {
      this.loadMovieList();
    },
    methods: {
      changePage(currentPage){
        this.queryInfo.page = currentPage;
        this.loadMovieList();
      },
      loadMovieList() {
        let loadingInstance = this.$loading.service({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        this.axios.get('/api/viewRecord/findPage?'+this.qs.stringify(this.queryInfo))
          .then(res => {
            var r = res.data;
            if(r.code){
              this.videoList = r.data.rows;
              this.queryInfo.page = r.data.page;
              this.queryInfo.pageSize = r.data.pageSize;
              this.queryInfo.total = r.data.total;
              setTimeout(() => {
                this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                  loadingInstance.close();
                });
              }, 1000);

            }else {
              this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
                loadingInstance.close();
              });
              this.$notify({
                title: '提示',
                message: r.msg,
                type: 'warning'
              });
            }
          })
          .catch(error => {
            this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
              loadingInstance.close();
            });
            this.$notify({
              title: '提示',
              message: "资源暂不可用",
              type: 'error'
            });
          });
      },
      doplay(item){
        this.$router.push("/player?id="+item.vid)
      },
    }
  }
</script>
<style scoped>
  .page-info{

  }
  .movieList .item .pic{
    position: relative;
  }
  .movieList .item .pic img{
    height: 250px;
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

  .section {
    overflow: hidden;
  }

  .section .title {
    display: flex;
    margin-top: 30px;
    height: 54px;
    line-height: 54px;
    font-size: 22px;
    border-bottom: solid #e8e8e8 1px;
  }
  .section .title .t-left{
    position: relative;
    left: 0;
    width: 130px;
  }
  .section .title .t-center{
    flex: 1;
  }
  .section .title .t-search{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .section .title .t-search .el-input-group{
    width: 400px;
  }
  .movieList {
    margin-top: 10px;
    overflow:hidden;
    zoom:1;
  }

  .movieList .inner {
    width: 1220px;
  }

  .movieList .item {
    float: left;
    margin-right: 20px;
    margin-bottom: 23px;
    width: 180px;
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
