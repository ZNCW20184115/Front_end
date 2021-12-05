<template>
<div>
   <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="item in 6" :key="item">
      <h3 class="medium">{{ item }}</h3>
    </el-carousel-item>
  </el-carousel>
  <div class="link-cont">
      <div class="link technology">
          <a href="#"></a>
          <p class="link-text">
              与时俱进的
              <span class="red">员工管理系统</span>
          </p>
      </div>
       <div class="link product">
          <a href="#"></a>
          <p class="link-text">
              与时俱进的
              <span class="red">员工管理系统</span>
          </p>
      </div>
       <div class="link platform">
          <a href="#"></a>
          <p class="link-text">
              与时俱进的
              <span class="red">员工管理系统</span>
          </p>
      </div>
  </div>
  
</div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .link-cont{
	font-size: 0;
	width: 96.8%;
	margin-left: calc(3.2% - 20px);
	margin-top: 40px;
	margin-bottom: 140px;
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
.link-cont .link.technology a{
	background: url(../../assets/images/link-1.jpeg) center center no-repeat;
	background-size: 100% 100%;
}
.link-cont .link.product a{
	background: url(../../assets/images/link-2.jpeg) center center no-repeat;
	background-size: 100% 100%;
}
.link-cont .link.platform a{
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
</style>