<template>
  <div id="app">
    <div class="layout">
      <section class="el-container is-vertical">
        <header class="el-header">
          <!-- <div class="topbar el-row">    
          </div>-->
          <el-row :gutter="20" class="topbar el-row">
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <img src="./assets/image/19afb95.png" class="imageHead" alt>
                <div class="headerfont">
                  <a href="#">MEGA MES</a>
                </div>
              </div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-paper"></i>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <span>生产管理</span>
                <i class="iconfont icon-jiantou1"></i>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content bg-purple">4</div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content bg-purple el-search">
                <input type="text" autocomplete="off" placeholder="CMD" class="input-text">
                <span class="el-input_suffix">
                  <span class="el-input_stuffix-inner">
                    <i class="iconfont icon-sousuo el-icon-search"></i>
                  </span>
                </span>
              </div>
            </el-col>
            <el-col :span="1">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-shezhi setingfont"></i>
              </div>
            </el-col>
            <el-col :span="4">
              <div class="grid-content bg-purple">
                <i class="iconfont icon-touxiang user"></i>
                <span class="text">admin</span>
                <i class="iconfont icon-jiantouxiangxia" id="bottom-arr"></i>
              </div>
            </el-col>
            <el-col :span="2">
              <div class="grid-content bg-purple">
                <p>简体中文</p>
                <i class="iconfont icon-jiantou1"></i>
              </div>
            </el-col>
          </el-row>
          <ul class="setform"></ul>
          <div class="dialog-wrapper"></div>
        </header>
        <section class="el-container main">
          <div class="el-aside">
            <div class="aside-top">
              <span>当前厂别：MEGA</span>
              <a href="#" class="cut">切换</a>
            </div>
            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
              <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-printer"></i>投产开卡
                  </template>
                  <ul class="ulbox">
                    <router-link to="/card/runcard" tag="li" index="1-1">
                      <span class="asideDropDot"></span>打印Runcard标签
                    </router-link>
                    <router-link to="/card/reprintruncard" tag="li" index="1-2">
                      <span class="asideDropDot"></span>重印Runcard标签
                    </router-link>
                    <router-link to="/card/runcard" tag="li" index="1-3">
                      <span class="asideDropDot"></span>一般材料下线
                    </router-link>
                  </ul>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-menu"></i>制程作业
                  </template>
                  <ul class="ulbox">
                    <router-link to="/croute/assembly" tag="li" index="2-1">
                      <span class="asideDropDot"></span>组装作业
                    </router-link>
                    <router-link to="/product/stnMtrlSetting" tag="li" index="1-2">
                      <span class="asideDropDot"></span>工作站材料
                    </router-link>
                  </ul>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <i class="el-icon-setting"></i>检验作业
                  </template>
                  <ul class="ulbox">
                    <router-link to="/croute/normalTest" tag="li" index="3-1">
                      <span class="asideDropDot"></span>一般测试
                    </router-link>
                  </ul>
                </el-submenu>

                <el-submenu index="4">
                  <template slot="title">
                    <i class="el-icon-sold-out"></i>重工/维修
                  </template>
                  <ul class="ulbox">
                    <router-link to="/repair/testRecord" tag="li" index="4-1">
                      <span class="asideDropDot"></span>一般维修
                    </router-link>
                  </ul>
                </el-submenu>

                <el-submenu index="5">
                  <template slot="title">
                    <i class="el-icon-tickets"></i>包装作业
                  </template>
                  <ul class="ulbox">
                    <router-link to="/package/shipping" tag="li" index="5-1">
                      <span class="asideDropDot"></span>包装
                    </router-link>
                    <router-link to="/package/shipping" tag="li" index="5-2">
                      <span class="asideDropDot"></span>打印出货标签
                    </router-link>
                    <router-link to="/package/packing" tag="li" index="5-3">
                      <span class="asideDropDot"></span>印Carton装箱
                    </router-link>
                    <router-link to="/package/cartonsplit" tag="li" index="5-4">
                      <span class="asideDropDot"></span>拆并箱
                    </router-link>
                    <router-link to="/card/reprintCartonNo" tag="li" index="5-5">
                      <span class="asideDropDot"></span>重印箱号标签
                    </router-link>
                    <router-link to="/card/reprintShipping" tag="li" index="5-6">
                      <span class="asideDropDot"></span>重印出货标签
                    </router-link>
                  </ul>
                </el-submenu>

                <el-submenu index="6">
                  <template slot="title">
                    <i class="el-icon-setting"></i>在制品信息
                  </template>
                  <ul class="ulbox">
                    <router-link to="/control/hold" tag="li" index="6-1">
                      <span class="asideDropDot"></span>锁货
                    </router-link>
                    <router-link to="/control/release" tag="li" index="6-2">
                      <span class="asideDropDot"></span>解锁
                    </router-link>
                  </ul>
                </el-submenu>
              </el-menu>
            </el-aside>
          </div>
          <div class="el-main">
            <router-view></router-view>
          </div>
        </section>
      </section>
    </div>
    <router-view/>
  </div>
</template>



<script>
export default {
  name: "App",
  methods: {}
};
</script>

<style lang='less' >
body,html {
  width:100%;
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  > .layout {
    width: 100%;
    height: 100%;
    > .el-container.is-vertical {
      flex-direction: column;
      > .el-header {
        width: 100%;
        padding: 0;
        padding-left: 20px;
        background-color: #00495c;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
        height: 50px !important;
        > .topbar {
          height: 50px;
          line-height: 50px;
          color: white;
          font-weight: 700;
          .imageHead {
            position: absolute;
            top: 11px;
            width: 26px;
            height: 28px;
          }
          .el-search {
            position: relative;
            width: 110px;
            height: 60px;
            transition: all 1s;
            font-size: 14px;
          }
          .headerfont {
            margin-left: 40px;
            font-weight: bolder;
            > a {
              color: white;
              text-decoration: none;
            }
          }
          .icon {
            color: white !important;
          }
          .input-text,
          .icon {
            background-color: #336d7c;
            border-radius: 16px;
            border: none;
            color: #fff;
            transition: all 1s;
            height: 28px;
            padding-left: 9px;
            padding-right: 30px;
            outline: none;
          }
          .el-input_suffix {
            transition: all 0.3s;
            position: absolute;
            height: 100%;
            color: #c0c4cc;
            text-align: center;
            // background-color: red;
            top: 0;
            right: -50px;
          }
          .el-input_stuffix-inner {
            pointer-events: all;
          }
          .el-icon-search {
            font-size: 18px;
            margin-top: -5px;
            line-height: 36px;
            height: 100%;
            width: 25px;
            text-align: center;
            transition: all 0.3s;
          }
          .setingfont {
            margin-right: 20px;
            font-size: 22px;
          }
          .user {
            font-size: 36px;
            color: white;
          }
          .text {
            margin-bottom: 20px;
            vertical-align: top;
          }
          #bottom-arr {
            vertical-align: top;
            line-height: 50px;
            background-color: red;
          }
        }
        > .el-row {
          box-sizing: border-box;
        }
      }
      > .main {
        position: absolute;
        top: 50px;
        bottom: 0;
        overflow: hidden;
        width: 100%;
        > .el-aside {
          box-sizing: border-box;
          color: #333;
          background-color: #fff;
          border-right: 1px solid #e6e6e6;
          box-sizing: content-box;
          z-index: 999;
          box-shadow: 2px 0 6px 0 rgba(0, 21, 41, 0.07) !important;
          flex-shrink: 0;
          > .aside-top {
            height: 49px;
            line-height: 49px;
            font-size: 14px;
            padding-left: 10px;
            border-bottom: 1px solid #eaeaea;
            > .cut {
              color: #2ab2d6;
              margin-right: 15px;
              float: right;
              text-decoration: none;
            }
          }
          .ulbox {
            border: none;
            height: 100%;
            background: #fff;
            list-style: none;
            box-sizing: border-box;
            > li {
              box-sizing: border-box;
              padding-left: 30px !important;
              background-color: #f1f6f9;
              font-size: 14px !important;
              height: 46px !important;
              line-height: 46px !important;
              width: 100%;
            }
            .asideDropDot {
              font-weight: 500 !important;
              border-color: #ccc;
              display: inline-block;
              width: 8px;
              height: 8px;
              margin-right: 5px;
              border: 1px solid #bbb;
              border-radius: 50%;
              margin-bottom: 2px;
              vertical-align: middle;
            }
          }
        }
        > .el-main {
          padding: 15px 20px;
          margin-bottom: 10px;
          flex:1;
          font-family: SourceHanSansCN-Regular;
        }
      }
    }
    > .el-container {
      display: flex;
      flex-basis: auto;
    }
  }
}
</style>
