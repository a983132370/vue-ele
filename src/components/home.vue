<template>
  <div id="home">
    <navheader :activeIndex="activeIndex"></navheader>
    <el-row type="flex" justify="center" style="margin-top:80px">
      <el-col :span="7">
        <el-input placeholder="请输入内容"></el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" type="primary">查询</el-button>
      </el-col>
    </el-row>
    <div>
      <div class="content-pannel">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span class="content-pannel-title">CAS - 企业级开源单点登录解决方案 </span>
            <el-button type="primary" class="el-button--small " style="margin-left: 10px">emm</el-button>
            <el-icon style="float: right; padding: 3px 8px" class="el-icon-star-off"></el-icon>
            <el-icon style="float: right; padding: 3px 8px" class="el-icon-share"></el-icon>
          </div>
          <div slot="header" class="clearfix">
            <span class="content-pannel-time">
              <el-icon class="el-icon-time"></el-icon> 2018-01-01 发布
            </span>
          </div>
          <div class="text item">
            CAS - 企业级开源单点登录解决方案 荐CAS - 企业级开源单点登录解决方案 荐CAS - 企业级开源单点登录解决方案 荐CAS -
            企业级开源单点登录解决方案 荐CAS -
          </div>
          <div class="el-table--border content-pannel-bottom">
            <span>收藏 0 查看 0</span>
          </div>
        </el-card>
      </div>

      <div class="rank-pannel">
        <el-card class="box-card" style="width: 300px;">
          <div slot="header" class="clearfix">
            <span>排行榜</span>
            <!--<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
          </div>
          <div class="text item">
            <div>
              <el-row type="flex" style="margin-bottom: 10px">
                <el-col :span="5">
                  <img src="http://pic.58pic.com/58pic/13/89/87/258PICU58PIC9gJ_1024.jpg"
                       style="width: 40px;border-radius: 10px">
                </el-col>
                <el-col :span="7" style="padding-top: 18px">
                  德玛西亚
                </el-col>
                <el-col :span="7" style="padding-top: 18px">
                  <el-tag class="level-label" >布衣达人</el-tag>
                </el-col>
              </el-row>
              <el-row type="flex" style="margin-bottom: 10px">
                <el-col :span="5">
                  <img src="http://pic.58pic.com/58pic/13/89/87/258PICU58PIC9gJ_1024.jpg"
                       style="width: 40px;border-radius: 10px">
                </el-col>
                <el-col :span="7" style="padding-top: 18px">
                  德玛西亚
                </el-col>
              </el-row>
            </div>
          </div>
        </el-card>
      </div>

    </div>

  </div>
</template>

<style>
  .level-label {
    font-size: 12px;
    position: relative;
    float: right;
  }
  .content-pannel {
    margin: 50px 50px 0px 450px;
    position: relative;
    float: left;
  }
  .content-pannel-title {
    font-size: 22px;
  }
  .content-pannel-time {
    color: rgba(0, 0, 0, 0.29);
  }
  .content-pannel-bottom {
    color: rgba(0, 0, 0, 0.4);
  }
  .rank-pannel {
    margin:50px 0px 0px 10px;position: relative;float: left;
  }

  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 768px;
    margin-top: 10px;
  }
</style>

<script>
  import navheader from './../components/nav'

  export default {
    name: 'home',
    data() {
      return {
        state2: '',
        activeIndex: '/home'
      }
    },
    components: {
      "navheader": navheader
    },
    methods: {
      login() {
        this.$router.push({path: '/login'});
      },
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      }, loadAll() {
        return [
          {"value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号"},
          {"value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号"},
          {"value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼"},
          {"value": "阳阳麻辣烫", "address": "天山西路389号"},
          {"value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13"}
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  }
</script>
