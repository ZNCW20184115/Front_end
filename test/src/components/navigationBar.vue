<template>
<div class="navigation-bar">
    <div class="ff-content">
        <div class="ff-tab" >
            <a href="/" style="color:#1993d1">网站首页</a>
        </div>
                    <div class="ff-tab " v-on:mouseover="changeNum(0)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="0" >校情纵览</div>
                <i v-bind:class="{'ai':num == 0}"></i> 
            </div>
                    <div class="ff-tab " v-on:mouseover="changeNum(1)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="1" >人才培养</div>
                <i v-bind:class="{'ai':num == 1}"></i>
            </div>
                    <div class="ff-tab " v-on:mouseover="changeNum(2)" v-on:mouseout="changeNum(10)"> 
                <div class="ff-show" data="2" >科学研究</div>
                <i v-bind:class="{'ai':num == 2}"></i>
            </div>
                    <div class="ff-tab "  v-on:mouseover="changeNum(3)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="3">师资队伍</div>
                <i v-bind:class="{'ai':num == 3}"></i>
            </div>
                    <div class="ff-tab " v-on:mouseover="changeNum(4)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="4" >招生就业</div>
                <i v-bind:class="{'ai':num == 4}"></i>
            </div>
                    <div class="ff-tab " v-on:mouseover="changeNum(5)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="5" >校园文化</div>
                <i v-bind:class="{'ai':num == 5}"></i>
            </div>
                    <div class="ff-tab " v-on:mouseover="changeNum(6)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="6" >合作交流</div>
                <i v-bind:class="{'ai':num == 6}"></i>
            </div>
                    <div class="ff-tab  hack" v-on:mouseover="changeNum(7)" v-on:mouseout="changeNum(10)">
                <div class="ff-show" data="7" >服务信息</div>
                <i v-bind:class="{'ai':num == 7}"></i>
            </div>
                <div style="margin-left: 40px" class="ff-tab">
            <a class="ff-show" style="display: block" href="http://www.hdu.edu.cn/en" color=#1993d1 target="_blank">ENGLISH</a>
        </div>
    </div>
            <div class="ff-manys" data="0" v-show="num == 0" v-on:mouseover="changeNum(0)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="/introduction">学校简介</a>
                                  <a target="_blank" href="/download/hdu-charter.pdf">学校章程</a>
                                  <a target="_blank" href="/organization">机构设置</a>
                                  <a target="_blank" href="/leadership">现任领导</a>
                                  <a target="_blank" href="/successive">历任领导</a>
                                  <a target="_blank" href="/history">校史沿革</a>
                                  <a target="_blank" href="/successive">校园胜景</a>
                                  <a target="_blank" href="/specification">校标规范</a>
                            </div>
        </div>
            <div class="ff-manys" data="1" v-show="num == 1" v-on:mouseover="changeNum(1)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://jwc.hdu.edu.cn">本科生教育</a>
                                  <a target="_blank" href="http://grs.hdu.edu.cn">研究生教育</a>
                                  <a target="_blank" href="http://sie.hdu.edu.cn">留学生教育</a>
                                  <a target="_blank" href="http://adultedu.hdu.edu.cn">继续教育</a>
                            </div>
        </div>
            <div class="ff-manys" data="2" v-show="num == 2" v-on:mouseover="changeNum(2)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://research.hdu.edu.cn/">科技概况</a>
                                  <a target="_blank" href="http://journal.hdu.edu.cn/CN/volumn/current.shtml">杭电学报</a>
                            </div>
        </div>
            <div class="ff-manys" data="3" v-show="num == 3" v-on:mouseover="changeNum(3)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://renshi.hdu.edu.cn/">队伍建设</a>
                                  <a target="_blank" href="http://renshi.hdu.edu.cn/2923/list.htm">杭电学人</a>
                            </div>
        </div>
            <div class="ff-manys" data="4" v-show="num == 4" v-on:mouseover="changeNum(4)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://zhaosheng.hdu.edu.cn">本科生招生</a>
                                  <a target="_blank" href="http://grs.hdu.edu.cn">研究生招生</a>
                                  <a target="_blank" href="http://career.hdu.edu.cn">本科生就业</a>
                                  <a target="_blank" href="http://grs.hdu.edu.cn">研究生就业</a>
                                  <a target="_blank" href="http://adultedu.hdu.edu.cn">继续教育招生</a>
                            </div>
        </div>
            <div class="ff-manys" data="5" v-show="num == 5" v-on:mouseover="changeNum(5)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://www.redhome.cc">红色家园</a>
                                  <a target="_blank" href="http://teachhome.hdu.edu.cn">教工之家</a>
                                  <a target="_blank" href="http://tuanwei.hdu.edu.cn">杭电青年</a>
                                  <a target="_blank" href="http://xsh.hdu.edu.cn">学生会</a>
                                  <a target="_blank" href="http://newspaper.hdu.edu.cn/reading/">杭电校报</a>
                            </div>
        </div>
            <div class="ff-manys" data="6" v-show="num == 6" v-on:mouseover="changeNum(6)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://foreign.hdu.edu.cn">国际合作交流</a>
                                  <a target="_blank" href="http://exchange.hdu.edu.cn">学生交流</a>
                                  <a target="_blank" href="http://sie.hdu.edu.cn">国际教育学院</a>
                                  <a target="_blank" href="http://zwhzbxpg.hdu.edu.cn/">中外合作办学</a>
                                  <a target="_blank" href="http://alumni.hdu.edu.cn/">校友总会</a>
                                  <a target="_blank" href="http://jjh.hdu.edu.cn/">基金会</a>
                            </div>
        </div>
            <div class="ff-manys" data="7" v-show="num == 7" v-on:mouseover="changeNum(7)" v-on:mouseout="changeNum(10)">
            <div class="ff-a-wrap">
                                  <a target="_blank" href="http://www.lib.hdu.edu.cn/">图书馆</a>
                                  <a target="_blank" href="http://dangan.hdu.edu.cn/">档案馆</a>
                                  <a target="_blank" href="http://xyy.hdu.edu.cn/">校医院</a>
                                  <a target="_blank" href="http://hq.hdu.edu.cn/">后勤服务</a>
                                  <a target="_blank" href="http://baowei.hdu.edu.cn/">安全保卫</a>
                    <a target="_blank" href="/tel_office">办公电话</a>
                                  <a target="_blank" href="/workbus">工作班车</a>
                                  <a target="_blank" href="/schooltime">上课时间</a>
                    <a target="_blank" href="http://2.2.2.2/ac_portal/20180625125820/pc.html">上网认证</a>
            </div>
            </div>
</div>
</template>

<script>
export default {
    name: 'navigationBar',
    data(){
        return {
            num : 10,
        }
    },
    methods:{
        changeNum:function(a){
            this.num = a;
        }
    }
}


</script>

<style scoped>
.navigation-bar {
    background: #ffffff;
    height: 40px;
    position: relative;
}

.ff-content {
    width: 1000px;
    text-align: center;
    margin: 0 auto;
    height: 40px;
}

.ff-tab {
    margin-right: 40px;
    font-size: 14px;
    color: #404040;
    display: inline-block;
    position: relative;
    width: 56px;
}

.ff-tab a {
    text-decoration: none;
    color: #404040;
}

.ff-show {
    height: 40px;
    line-height: 40px;
}

.ff-tab i {
    position: absolute;
    top: 31px;
    left: 23px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #003588;
    border-bottom: 5px solid transparent;
    transition: all .5s;
}

i {
    font-style: italic;
}

.ff-manys {
    height: 60px;
    background: white;
    background: rgba(255, 255, 255, 0.8);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#C8ffffff, endColorstr=#C8ffffff);
    position: absolute;
    width: 100%;
    top: 40px;
    z-index: 10;
    text-align: center;
    border-top: 2px solid #1993d1;
}

.ff-a-wrap {
    display: inline-block;
    padding-top: 10px;
}

.ff-a-wrap a {
    float: left;
    margin-right: 50px;
    padding: 10px 0px 7px;
    text-decoration: none;
    font-size: 14px;
    color: #404040;
}

.ff-tab .ai {
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    border-top: 5px solid #1993d1;
}

.ff-tab a:hover {
    color: #347ec4;
}

.ff-tab:hover {
    color: #347ec4;
}

.ff-show {
    height: 40px;
    line-height: 40px
}

.ff-show:hover {
    color: #3b80c6;
}


</style>