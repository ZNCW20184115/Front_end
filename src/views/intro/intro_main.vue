<template>
<div>
   <el-carousel :interval="4000" type="card" height="500px">
    <el-carousel-item v-for="item in imgList" :key="item">
      <img :src="item.url" class="image" alt=""
      height="100%" width="100%"
      >
    </el-carousel-item>
  </el-carousel>
  <div class="link-cont">
      <div class="link first">
          <a href="#"></a>
          <p class="link-text">
              与时俱进的
              <span class="red">员工管理系统</span>
          </p>
          <p class="link-text">紧跟时代脚步</p>
      </div>
       <div class="link second">
          <a href="#"></a>
          <p class="link-text">
              高效简单
              <span class="red">员工管理系统</span>
          </p>
          <p class="link-text">轻松办公从此开始</p>
      </div>
       <div class="link third">
          <a href="#"></a>
          <p class="link-text">
              随时随地的  
              <span class="red">员工管理系统</span>
          </p>
          <p class="link-text">疫情再也不会成为阻拦</p>
      </div>
  </div>
  <div class="section">
    <img src="../../assets/images/se.png" alt=""
    height="100%"
    width="45%"
    >
    <div class="divCorporateContent">
      <div class="pageInner">
          <p class="cont-title active">我们是谁？</p>
          <p>我们是来自于杭州电子科技大学的北极企鹅开发小组，我们
              是一支11人的开发队伍。<br>
              即便现在的我们还有许多的不足,
              但我们正在为更好地明天不停努力着。<br>
          </p>
          <p>
              <b>如果你想支持我们，请添加底端微信（饿饿，饭饭）</b>
          </p>
      </div>
</div>
  </div>
</div>
</template>
<style> 
.el-carousel{
  margin-top: 20px;
}
.link-cont{
  font-size: 0;
  width: 96.8%;
  margin-left: calc(3.2% - 20px);
  margin-top: 80px;
  margin-bottom: 80px;
}
.link-cont .link{
  width: calc((100% - 9px) / 3);
  display: inline-block;
  position: relative;
  vertical-align: top;
}
.link-cont .link + .link{
  margin-left: 2px;
}
.link-cont .link a{
  display: block;
  width: 100%;
  height: 16.5vw;
  margin-bottom: 10px;
}
.link-cont .link a:hover + .cooperation-cont{
  display: block;
}
.link-cont .link.first a{
  background: url(../../assets/images/link-1.jpeg) center center no-repeat;
  background-size: 100% 100%;
}
.link-cont .link.second a{
  background: url(../../assets/images/link-2.jpeg) center center no-repeat;
  background-size: 100% 100%;
}
.link-cont .link.third a{
  background: url(../../assets/images/link-3.jpeg) center center no-repeat;
  background-size: 100% 100%;
}
.link-cont .link a .title{
  font-size: 26px;
  color: #fff;
  line-height: 34px;
  padding-top: 24px;
}
.link-cont .link a .text{
  font-size: 16px;
  color: #fff;
  line-height: 34px;
}
.link-cont .link a p{
  text-indent: 34px;
}
.link-cont .link .link-text{
  font-size: 18px;
  color: #666;
  line-height: 36px;
  padding-left: 35px;
}
.link-cont .link .link-text .red{
  color: #b81c22;
}
.section{
  height: 500px;
  padding-bottom: 60px;
}
.section img{
  position: relative;
  left: 25px;
}
</style>
<style scoped>
.divCorporateContent{
    position: relative;
    left: 55%;
    bottom: 100%;
    font-size: 16px;
    width: 40%;
}
.divContainer{
    font-size: 16px;
}
.cont-title{
    background: url(../../assets/images/corporate-title.png) left top no-repeat;
    padding-left: 46px;
    line-height: 32px;
    color: #333;
    font-size: 26px;
    font-weight: 700;
    margin-top: 80px;
}
.cont-title.active{
    color: #b81c22;
}
.pageInner p:not(.cont-title){
    margin-top: 36px;
    padding-left: 30px;
    line-height: 32px;
}
</style>
<script>
export default {
  data(){
    return {
      imgList: [
        { url: require('../../assets/images/intro_1.jpg')},
        { url: require('../../assets/images/intro_2.jpg')},
        { url: require('../../assets/images/intro_3.jpg')}
      ]
    }
  },
}
</script>
