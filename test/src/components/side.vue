<template>
<div class="side">
    <div class="side-back"></div>
<div class="side-area">
    <div class="side-btn"></div>
    <div class="side-weather">
        <div class="ssw">
            <img src="../assets/hdu/10.png" style="height: 40px;width: 40px;">
        </div>
        <div class="ssf"></div>
        <div class="sst1"></div>
        <div class="sst2"></div>
        <div class="sst3">风速</div>
        <div class="sst4"></div>
    </div>
    <div class="side-main">
        <div class="side-nav" target="_blank" href="http://i.hdu.edu.cn/">
            <a>
                <span class="sn-icon s-week"></span>
                <span class="sn-name">校园卡</span>
            </a>
            <div class="sn-border"></div>
            <a class="sn" target="_blank" href="http://bsdt.hdu.edu.cn/app/dc/index.aspx">
                <span class="sn-icon s-phone"></span>
                <span class="sn-name">订餐服务</span>
            </a>
            <div class="sn-border"></div>
            <a class="sn" target="_blank" href="/schooltime">
                <span class="sn-icon s-food"></span>
                <span class="sn-name">上课时间</span>
            </a>
            <div class="sn-border"></div>
            <a class="sn" target="_blank" href="/workbus">
                <span class="sn-icon s-card"></span>
                <span class="sn-name">校园班车</span>

            </a>
            <div class="sn-border"></div>
            <a class="sn" target="_blank" href="http://bsdt.hdu.edu.cn/app/sbbx/index.aspx">
                <span class="sn-icon s-car"></span>
                <span class="sn-name">设备报修</span>
            </a>
            <div class="sn-border"></div>
        </div>
    </div>

    <div class="side-time">
        <div class="side-week"></div>
        <div class="side-data"></div>
    </div>
</div>
</div>    
</template>

<script>
export default {
    name:'side'
}
</script>

<style scoped>
.side-back {
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 10;
}

.side-area {
    position: fixed;
    top: 0;
    right: -225px;
    width: 200px;
    height: 100%;
    background: white;
    padding: 20px 12px 25px;
    z-index: 11;
}

.side-btn {
    width: 50px;
    height: 65px;
    position: absolute;
    top: 100px;
    left: -48px;
    background: url(../assets/hdu/sidebtn.png);
    cursor: pointer;
    background-size: 50px 65px;
}

.side-weather {
    height: 100px;
    position: relative;
    display: none;
}

.side-main {
    height: 380px;
    width: 200px;
    position: absolute;
    top: 380px;
    margin-top: -190px;
}

.side-time {
    position: absolute;
    bottom: 75px;
    left: 12px;
    height: 40px;
    width: 200px;
}

.side-weather>div {
    font-size: 12px;
    position: absolute;
}

.ssw {
    top: 36px;
    left: 20px;
    width: 50px;
    height: 50px;
}

.ssf {
    background-color: #eeeeee;
    height: 50px;
    width: 1px;
    top: 35px;
    left: 75px;
}

.sst1 {
    top: 36px;
    left: 87px;
    color: #003b90;
}

.sst2 {
    top: 36px;
    right: 20px;
    color: #003b90;
}

.sst3 {
    top: 64px;
    left: 87px;
    color: #a0a0a0;
}

.sst4 {
    top: 64px;
    right: 21px;
    color: #a0a0a0;
}

.sn {
    height: 35px;
    display: block;
    text-decoration: none;
    color: #707070;
    padding-top: 10px;
    position: relative;
}

.s-week {
    background-position: -9px -7px;
}

.sn-icon {
    float: left;
    width: 30px;
    height: 22px;
    margin-left: 11px;
    background: url(../assets/hdu/sideicon.png) no-repeat;
}

.sn-name {
    float: left;
    width: 80px;
    height: 22px;
    margin-left: 15px;
    padding-top: 4px;
}

.sn-border {
    height: 1px;
    margin: 9px auto 0;
    background: #e9e9e9;
    width: 180px;
}

.side-week {
    color: #eb6100;
}
</style>