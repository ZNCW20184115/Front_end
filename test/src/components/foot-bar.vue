<template>
<div class="foot">
    <div class="foot-bar"></div>
    <div class="footer">
        <div class="t-c" style="position:relative">
            <p>
                地址：杭州市杭州经济开发区白杨街道2号大街1158号 邮编:310018 电话查号:86915114
            </p>
            <p>
                党委宣传部制作维护 设计：汤程心
            </p>
            <p>
                推荐使用Google浏览器、火狐浏览器、360浏览器（极速模式）
            </p>
            <p>
                Copyright© 2010 杭州电子科技大学版权所有 All right reserved
            </p>
            <div class="dingyue">
                <img width="75" height="75" src="../assets/hdu/dingyue.png">
                <span class="df-text">杭电官方微博</span>
            </div>
            <div class="fuwu">
                <img width="75" height="75" src="../assets/hdu/fuwu.jpg">
                <span class="df-text">杭电官方微信</span>
            </div>
            <div style="text-align: center;margin-top: 30px;color: white">
                
                <a style="color: #c8ffff;text-decoration:none;" rel="noreferrer" target="_blank" href="https://beian.miit.gov.cn/">浙ICP备12028388号-2</a>
            </div>
        </div>
</div>

</div>  
</template>

<script>
export default {
    name: 'foot'
}
</script>

<style scoped>
.foot-bar {
    height: 5px;
    background-color: #fa5d42;
}

.footer {
    background: url(../assets/hdu/copyright.jpg) no-repeat center center;
    background-size: cover;
    padding: 38px 0px 45px;
    text-align: left;
}

.t-c {
    width: 1000px;
    margin: 0 auto;
}

.footer p {
    margin: 6px 0;
    color: white;
    font-size: 10px;
}

.df-text {
    color: white;
    font-size: 10px;
}

.dingyue {
    right: 10px;
}

.dingyue, .fuwu {
    position: absolute;
    top: -10px;
    width: 75px;
    height: 75px;
}

.fuwu {
    right: 140px;
}
</style>