<template>
<div style='background-color:#28459'>
    <div class="banner" style='width:1280px;margin:0 auto;'>
        <!-- <div class="swiper">
            <div class="swiper-wrapper">
                    <div class="bg-size-cover swiper-slide"
                        style="background:url('../assets/hdu/banner1.jpg');  cursor:pointer;"  onclick="window.open('http://www.hdu.edu.cn/news/spotlight')"></div>
                    <div class="bg-size-cover swiper-slide"
                        style="background:url('../assets/hdu/banner2.png');  cursor:pointer;"  onclick="window.open('http://www.hdu.edu.cn/news/spotlight_27072?page=1&year=2020&month=')"></div>
                    <div class="bg-size-cover swiper-slide"
                        style="background:url('../assets/hdu/banner3.jpg');  cursor:pointer;"  onclick="window.open('http://www.hdu.edu.cn/news/inform_26014')"></div>
            </div>
            <div class="swiper-pagination"></div>

            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <div class="swiper-scrollbar"></div>

        </div> -->
        <div class="unslider" v-on:mouseover="changeIsHover" v-on:mouseout="changeIsHover">
            <swiper 
            :slidesPerView="1"
            :navigation="{nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}"
            :centeredSlides="true"
            :loop="true"
            :autoplay='{
                delay: 2500,
                disableOnInteraction: false,
            }'
            :grabCursor="true"
            class="swiper" >
            <swiper-slide >
                <div class="swiper_item bg-size-cover swiper-slide">
                <img src="../assets/hdu/banner1.jpg" onclick="window.open('http://www.hdu.edu.cn/news/spotlight')"/>
                </div>
            </swiper-slide>
            ​    <swiper-slide class="">
                <div class="swiper_item bg-size-cover swiper-slide">
                <img src="../assets/hdu/banner2.png" onclick="window.open('http://www.hdu.edu.cn/news/spotlight_27072?page=1&year=2020&month=')"/>
                </div>
            </swiper-slide>
            ​    <swiper-slide class="">
                <div class="swiper_item bg-size-cover swiper-slide">
                <img src="../assets/hdu/banner3.jpg" onclick="window.open('http://www.hdu.edu.cn/news/inform_26014')"/>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" v-show="isHover"></div>
            <div class="swiper-button-next" v-show="isHover"></div>
            </swiper>
        </div>
        <div class="banner-tool" >
            <div class="banner-bar">
                <span class="leftt"></span>
                <span class="rightt"></span>
                <div class="baccc bg-size-cover">
                </div>
                <div class="c-block">
                    <a target="_blank" href="http://i.hdu.edu.cn/" class="c-item">
                        <span class="cc shuzi"></span>
                        <span class="c-name">
                                                        数字杭电
                                                    </span>
                        <span class="c-slide" style="background-color:#26c3ed"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="https://webvpn.hdu.edu.cn/" class="c-item">
                        <span class="cc vpn"></span>
                        <span class="c-name">
                                                        VPN登录
                                                    </span>
                        <span class="c-slide"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="http://www.lib.hdu.edu.cn/" class="c-item">
                        <span class="cc library bg-size-cover"></span>
                        <span class="c-name">
                                                        图书馆
                                                    </span>
                        <span class="c-slide" style="background-color:#0ce2b8"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="https://mail.hdu.edu.cn" class="c-item">
                        <span class="cc email bg-size-cover"></span>
                        <span class="c-name">
                                                        电子邮件
                                                    </span>
                        <span class="c-slide" style="background-color:#33dd10"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="http://renshi.hdu.edu.cn/" class="c-item">
                        <span class="cc hire"></span>
                        <span class="c-name">
                                                        招聘信息
                                                    </span>
                        <span class="c-slide" style="background-color:#9fd616"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="http://bszn.hdu.edu.cn/" class="c-item">
                        <span class="cc select"></span>
                        <span class="c-name">
                        办事指南
                                                    </span>
                        <span class="c-slide" style="background-color:#f99f00"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="http://xxgk.hdu.edu.cn/" class="c-item">
                        <span class="cc public"></span>
                        <span class="c-name">
                                                        信息公开
                                                    </span>
                        <span class="c-slide" style="background-color:#f97615"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="http://zhaobiao.hdu.edu.cn/" class="c-item">
                        <span class="cc buy"></span>
                        <span class="c-name">
                                                        招标采购
                                                    </span>
                        <span class="c-slide" style="background-color:#00ccff"></span>
                    </a>
                    <div class="c-r"></div>
                </div>
                <div class="c-block">
                    <a target="_blank" href="mailto:president@hdu.edu.cn" class="c-item">
                        <span class="cc box"></span>
                        <span class="c-name">
                                                        领导信箱
                                                    </span>
                        <span class="c-slide" style="background-color:#0ac8e2"></span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, {
  Pagination,
  Navigation,
  EffectCoverflow,
  Autoplay,
} from "swiper";
SwiperCore.use([Pagination, Navigation, EffectCoverflow, Autoplay]);
import "swiper/swiper-bundle.css";

export default {
  name: "mainBackground",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      isHover:false
    };
  },
  methods: {
    changeIsHover:function(){
      this.isHover=!this.isHover
    }
  },
};
</script>

<style scoped>
.banner {
  width: 1280px;
  margin: 0 auto;
  height: 524px;
  box-shadow: 0px 5px 10px #888888;
  clear: both;
}

.unslider{
    position: relative;
    overflow: auto;
    margin: 0;
    padding: 0;
    z-index: 1;
}

.swiper {
  height: 450px;
  position: relative;
  overflow: hidden;
  margin: 0;
  padding: 0;
  --swiper-navigation-color: #3e423f;
  --swiper-navigation-size: 45px;
}

/* .swiper-button-next {
  right: 10px;
  background-position: -24px 0px;
} */

/* .swiper-button-prev,
.swiper-button-next {
  position: absolute;
  width: 25px;
  height: 44px;
  color: white;
  font-size: 30px;
  background-image: url(../assets/hdu/lrbtn.png);
  background-repeat: no-repeat;
  top: 220px;
  opacity: 0.7;
  cursor: pointer;
  display: none;
} */

/* .swiper-button-prev {
  position: absolute;
  left: 10px;
  background-position: 0px 0px;
}
 */
.swiper-item {
  list-style: none;
  margin: 0;
  padding: 0;
  border: none;
}

.unslider-wrap.unslider-carousel li {
  float: left;
}

.swiper-item {
  height: 450px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-origin: content-box;
  background-position: center;
}

.swiper-item {
  display: list-item;
  text-align: -webkit-match-parent;
}

.banner-tool {
  width: 1280px;
  margin:0 auto;
  height: 74px;
  background-color: #284597;
  z-index: 999;
  position:absolute;
}

.banner-bar {
  width: 956px;
  margin: 0px auto;
  height: 72px;
  position: relative;
}

.leftt {
  left: -10px;
  background: url(../assets/hdu/leftt.png);
}

.leftt,
.rightt {
  position: absolute;
  top: -10px;
  width: 10px;
  height: 10px;
}

span {
  font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial,
    "宋体";
}

.rightt {
  right: -8px;
  top: -10px;
  background: url(../assets/hdu/rightt.png);
}

.baccc {
  position: absolute;
  width: 955px;
  height: 84px;
  background: url(../assets/hdu/baccc.png) no-repeat;
  top: -11px;
  left: 0px;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.c-block {
  float: left;
  width: 106px;
  height: 70px;
  position: relative;
}

.c-item {
  position: absolute;
  top: -12px;
  left: 0px;
  width: 106px;
  height: 81px;
  overflow: hidden;
  padding: 2px 0px;
}

a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}

.c-r {
  position: absolute;
  top: -2px;
  right: 0px;
  width: 1px;
  height: 68px;
  background: #6eb5e1;
  border-radius: 2px;
}

.cc {
  position: absolute;
  width: 80px;
  height: 50px;
  top: 4px;
  left: 28px;
  background: url(../assets/hdu/quick.png) no-repeat;
}

.shuzi {
  background-position: -29px 3px;
}

.vpn {
  background-position: -137px 3px;
}

.c-item .library {
  background: url(../assets/hdu/library-white.png) no-repeat !important;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.c-item .email {
  background: url(../assets/hdu/email-white.png) no-repeat !important;
}

.hire {
  background-position: -351px 3px;
}

.select {
  background-position: -458px 3px;
}

.public {
  background-position: -569px 3px;
}

.buy {
  background-position: -671px 3px;
}

.box {
  background-position: -781px 3px;
}

.c-name {
  color: white;
  position: relative;
  top: 57px;
  text-align: center;
  /*left: 24px;*/
  width: 100%;
  text-decoration: none;
}

.c-slide {
  width: 106px;
  height: 7px;
  background-color: #04ddf7;
  position: absolute;
  bottom: -8px;
  left: 0px;
  transition: all 0.3s;
}

.swiper {
  background-color: #cccccc;
}
.swiper_item {
  background-color: #ffffff;
}

.swiper-slide img {
  height: 100%;
  width: 100%;
}

</style>