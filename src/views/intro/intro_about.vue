<template>
<div class="divCorporateContent">
    <div class="clearfix">
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
</template>
<style scoped>
.divCorporateContent{
    margin-left: 25%;
    margin-top: 0%;
    font-size: 16px;
}
.divContainer{
    max-width: 1200px;
    margin: 0 auto;
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