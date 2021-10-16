<template>
    <div class="h-news">
            <div class="lines" style="height:28px">
                <span class="aicon"></span>
                <span class="line-cname">杭电要闻</span>
                <span class="line-ename">TOP NEWS</span>
                <a target="_blank" href="http://www.hdu.edu.cn/news" class="jinru">进入新闻网</a>
            </div>

            <div class="news-box">
                <div class="n-left"> 
                        <div class="nlitem" v-bind:class="{'c110':num == 1}">
                            <div class="cur" v-if="num == 1">
                                <span class="cur-m">10</span>
                                <span class="cur-g"></span>
                                <span class="cur-d">01</span>
                            </div>
                            <div class="min  chide na" model="content-0-0" v-on:click = "changeNum(1)">
                                <span class="min-text">10/01</span>
                            </div>  
                        </div>
                        <div class="nlitem " v-bind:class="{'c110':num == 2}">
                            <div class="cur" v-if="num == 2">
                                <span class="cur-m">09</span>
                                <span class="cur-g"></span>
                                <span class="cur-d">30</span>
                            </div>
                            <div class="min  nb" model="content-1-0" v-on:click = "changeNum(2)">
                                 <span class="min-text">09/30</span>
                            </div>
                        </div>
                        <div class="nlitem " v-bind:class="{'c110':num == 3}">
                            <div class="cur" v-if="num == 3">
                                <span class="cur-m">09</span>
                                <span class="cur-g"></span>
                                <span class="cur-d">28</span>
                            </div>
                            <div class="min  nc" model="content-2-0" v-on:click = "changeNum(3)">
                                <span class="min-text">09/28</span>
                            </div>
                        </div>
                        <div class="nlitem " v-bind:class="{'c110':num == 4}">
                            <div class="cur" v-if="num == 4">
                                <span class="cur-m">09</span>
                                <span class="cur-g"></span>
                                <span class="cur-d">27</span>
                            </div>
                            <div class="min  nd" model="content-3-0" v-on:click = "changeNum(4)">
                                <span class="min-text">09/27</span>
                            </div>
                        </div>
                        <div class="nlitem " style="top:-5px" v-bind:class="{'c110':num == 5}">
                            <div class="cur" v-if="num == 5">
                                <span class="cur-m">09</span>
                                <span class="cur-g"></span>
                                <span class="cur-d">26</span>
                            </div>
                            <div class="min  ne" model="content-4-0" v-on:click = "changeNum(5)">
                               <span class="min-text">09/26</span>
                            </div>
                        </div>
                        
                </div>


                <div>
                        <div class="n-right"  id="content-0-0" v-if="num == 1 && pageChange == 0">
                            <div class="nrcontent">
                                <div class="nrmain">
                                    <div class="nrt" style="font-size:18px;font-weight:600">我校举行“请党放心 强国有我”庆祝新中国成立...</div>
                                    <div class="nrc" style="height:190px">
                                        <p >10月1日清晨，我校在下沙校区文化活动中心南广场举行“请党放心 强国有我”庆祝新中国成立72周年主题升旗仪式。校党委副书记、组织部部长、统战部部长钱波，学工部、校团委、招就处相关负责人，各学院学生工作负责人，全校1000余名学生代表，杭州市文一街小学，天长小学、文清小学、学正小学、云帆小学等学生代表参加活动。</p><p ></p><p ></p><p >上午8点，升旗仪式正式开始。英姿飒爽的国旗护卫队队员迈着铿锵有力的......</p>                                    </div>
                                    <div class="nra">
                                        <a target="_blank" href="http://www.hdu.edu.cn/news">阅读全文</a>
                                    </div>
                                </div>
                            </div>
                                <div class="nrimg" style="height:213px;top: 39px;">
                                    <img
                                            onclick="window.open('/news/important_28699')"
                                            style="cursor:pointer;width:320px;height:213px;"
                                            src="http://www.hdu.edu.cn/uploads/images/20211001/202110011108361000.jpg"
                                            v-on:mouseover="IsMouseOver()"
                                            v-on:mouseout="IsMouseOver()"/>
                                    <div class="nrimg-shaw" v-bind:style="{bottom:showClick(1)}">
                                        <span>点击量:449</span>
                                    </div>
                                </div>
                                    <img src="../../assets/hdu/news-left.png"
                                     class="home-news-arrow home-news-arrow-left"
                                     model="content-0-1" v-on:click="changePage"/>
                                    <img src="../../assets/hdu/news-right.png"
                                     class="home-news-arrow home-news-arrow-right"
                                     model="content-0-1" v-on:click="changePage"/>
                        </div>

                        <div class="n-right"  v-if="pageChange == 1"  id="content-0-1">
                            <div class="nrcontent">
                                <div class="nrmain">
                                    <div class="nrt"
                                         style="font-size:18px;font-weight:600">校党委召开理论学习中心组专题学习会</div>
                                    <div class="nrc" style="height:190px">
                                        <p >9月30日，校党委理论学习中心组召开扩大会议，专题学习习近平总书记在各地考察系列重要讲话精神、中央人才工作会议精神以及中共中央办公厅印发的《关于加强新时代马克思主义学院建设的意见》精神。会议由校党委书记王兴杰主持，党委理论学习中心组成员、党群部门负责人和马克思主义学院相关人员参加学习会。</p><p >会上，校党委副书记薛晓飞从重要意义、指导思想、工作原则、内涵发展及政策保障等方面对《关于加强新时代马克思主义学院建设的意......        </p>                            </div>
                                    <div class="nra">
                                        <a target="_blank"
                                           href="/news/important_28698">阅读全文</a>
                                    </div>
                                </div>
                            </div>                                
                                <div class="nrimg" style="height:213px;top: 39px;">
                                    <img
                                            onclick="window.open('/news/important_28698')"
                                            style="cursor:pointer;width:320px;height:213px;"
                                            src="http://www.hdu.edu.cn/uploads/images/20211001/202110011023201000.jpg"
                                            v-on:mouseover="IsMouseOver()"
                                            v-on:mouseout="IsMouseOver()"/>
                                    <div class="nrimg-shaw" v-bind:style="{bottom:showClick(1)}">
                                        <span>点击量:422</span>
                                    </div>
                                </div>
                                <img src="../../assets/hdu/news-left.png"
                                     class="home-news-arrow home-news-arrow-left"
                                     model="content-0-0" v-on:click="changePage"/>
                                <img src="../../assets/hdu/news-right.png"
                                     class="home-news-arrow home-news-arrow-right"
                                     model="content-0-0" v-on:click="changePage"/>
                        </div>

                </div>
                        <div>                        
                            <div class="n-right"  v-if="num == 2"  id="content-1-0">
                            <div class="nrcontent">
                                <div class="nrmain">
                                    <div class="nrt"
                                         style="font-size:18px;font-weight:600">我校志愿者圆满完成2021年世界互联网大会·...</div>
                                    <div class="nrc" style="height:190px">
                                        <p >9月28日，我校50名志愿者结束乌镇之行，圆满完成2021年世界互联网大会为期9天的志愿服务工作，服务总时长达到2775小时。2021年世界互联网大会·乌镇峰会由国家网信办和浙江省人民政府共同主办，旨在搭建中国与世界互联互通的国际平台和国际互联网共享共治的中国平台，我校志愿者不畏烈日，不惧风雨，带着高度的责任感和使命感，始终以饱满的热情投入到工作中，努力履行志愿者的职责，用实际行动诠释了“奉献、友爱、互助、进步”的志愿者......        </p>                            </div>
                                    <div class="nra">
                                        <a target="_blank" href="/news/important_28690">阅读全文</a>
                                    </div>
                                </div>
                            </div>
                                <div class="nrimg" style="height:213px;top: 39px;">
                                    <img
                                            onclick="window.open('/news/important_28690')"
                                            style="cursor:pointer;width:320px;height:213px;"
                                            src="http://www.hdu.edu.cn/uploads/images/20210930/202109301010121000.png" 
                                            v-on:mouseover="IsMouseOver()"
                                            v-on:mouseout="IsMouseOver()"
                                            />
                                    <div class="nrimg-shaw" v-bind:style="{bottom:showClick(2)}">
                                        <span>点击量:925</span>
                                    </div>
                                </div>
                                                                                </div>

                        </div><div>                        
                            <div class="n-right"  v-if="num == 3"  id="content-2-0">
                            <div class="nrcontent">
                                <div class="nrmain">
                                    <div class="nrt"
                                         style="font-size:18px;font-weight:600">我校会计学院18140612班团支部获评全国...</div>
                                    <div class="nrc" style="height:190px">
                                        <p >为深入贯彻落实“全团大抓基层”“全团抓学校”部署，深化高校共青团改革，强化“一切工作到支部”理念，在团中央基层建设部指导下，中国青年报社开展“活力团支部炼成记”2020—2021学年高校活力团支部遴选及展示活动。1600所高校通过新媒体方式集中展示了在“党史学习教育”等方面的团支部建设成果和典型经验，1100万人次参与网络点赞。</p><p >经校级申报、省级初评、展示点赞、全国终审等环节，我校会计学院18140612班......       </p>                             </div>
                                    <div class="nra">
                                        <a target="_blank" href="/news/important_28685">阅读全文</a>
                                    </div>
                                </div>
                            </div>
                                    <div class="nrimg" style="height:213px;top: 39px;">
                                    <img
                                            onclick="window.open('/news/important_28685')"
                                            style="cursor:pointer;width:320px;height:213px;"
                                            src="http://www.hdu.edu.cn/uploads/images/20210928/202109281444111000.png"
                                             v-on:mouseover="IsMouseOver()"
                                            v-on:mouseout="IsMouseOver()"/>
                                    <div class="nrimg-shaw" v-bind:style="{bottom:showClick(3)}">
                                        <span>点击量:1726</span>
                                    </div>
                                </div>
                                                                                </div>

                        </div><div>                        
                            <div class="n-right"  v-if="num == 4"  id="content-3-0">
                            <div class="nrcontent">
                                <div class="nrmain">
                                    <div class="nrt"
                                         style="font-size:18px;font-weight:600">第31期全省高校新任辅导员岗前培训班在我校举...</div>
                                    <div class="nrc" style="height:190px">
                                        <p >9月24日上午，由浙江省教育厅宣传教育处、浙江省高等教育学会思想政治教育分会主办，杭州电子科技大学承办的第31期全省高校新任辅导员岗前培训班开班仪式在我校举行。浙江省教育厅宣传教育处处长陈雷，我校党委副书记、组织部部长、统战部部长钱波出席开班仪式并讲话。来自杭州13所高校的149名辅导员共同参加了本期培训。开班仪式由校学工部部长陈巍主持。</p><p ></p><p >浙江省教育厅宣教处处长陈雷分析了当前工作形势及存在的...... </p>                                   </div>
                                    <div class="nra">
                                        <a target="_blank" href="/news/important_28682">阅读全文</a>
                                    </div>
                                </div>
                            </div>
                                <div class="nrimg" style="height:213px;top: 39px;">
                                    <img
                                            onclick="window.open('/news/important_28682')"
                                            style="cursor:pointer;width:320px;height:213px;"
                                            src="http://www.hdu.edu.cn/uploads/images/20210927/202109271443331000.jpg"
                                             v-on:mouseover="IsMouseOver()"
                                            v-on:mouseout="IsMouseOver()"/>
                                    <div class="nrimg-shaw" v-bind:style="{bottom:showClick(4)}">
                                        <span>点击量:1821</span>
                                    </div>
                                </div>
                                                                                </div>

                        </div><div>                        
                            <div class="n-right"  v-if="num == 5"  id="content-4-0">
                            <div class="nrcontent">
                                <div class="nrmain">
                                    <div class="nrt"
                                         style="font-size:18px;font-weight:600">杭电杭州临平校友会成立</div>
                                    <div class="nrc" style="height:190px">
                                        <p >9月25日，杭电杭州临平校友会成立大会在临平召开。校党委委员、副校长郑宁，临平区委常委、宣传部长沈威出席并致辞。原余杭区人大常委会副主任屠冬冬，临平区政协副主席江筠，临平区委组织部、区委办、经开区管委会、临平新城管委会、区经信科技局、临平街道等相关部门负责人，我校党委委员、宣传部部长戚明钧，杭电校友联络办公室、产学研合作处、文一集团负责人，杭州浙江大学校友会，杭电贵州、云南、杭州、衢州校友会等兄弟校友会代表，杭电教师代表......</p>                                    </div>
                                    <div class="nra">
                                        <a target="_blank" href="/news/important_28678">阅读全文</a>
                                    </div>
                                </div>
                            </div>
                                <div class="nrimg" style="height:213px;top: 39px;">
                                    <img
                                            onclick="window.open('/news/important_28678')"
                                            style="cursor:pointer;width:320px;height:213px;"
                                            src="http://www.hdu.edu.cn/uploads/images/20210927/202109271059411000.png"
                                             v-on:mouseover="IsMouseOver()"
                                            v-on:mouseout="IsMouseOver()"/>
                                    <div class="nrimg-shaw" v-bind:style="{bottom:showClick(5)}">
                                        <span>点击量:2024</span>
                                    </div>
                                </div>
                                                                                </div>

                        </div>

            </div>
        </div>
</template>

<script>
export default {
    name: 'h-news',
    data() {
        return{
            num: 1,
            pageChange: 0,
            isMouseOver: 0
        }
    },
    methods: {
        changeNum:function(a){
            this.num = a
        },
        changePage:function(){
            this.pageChange = 1 - this.pageChange
        },
        IsMouseOver:function(){
            this.isMouseOver = 1 - this.isMouseOver
        },
        showClick:function(x){
            if(x == this.num && this.isMouseOver == 1)
            return '0';
        }
    }
}
</script>

<style scoped>
.h-news {
    padding-left: 0;
    padding-right: 0;
    padding-top: 10px;
    padding-bottom: 5px;
    margin-top: 0;
    margin-bottom: 0;
    width: 1000px;
    margin: 10px auto 5px auto;
}
.nrimg-shaw {
    height: 30px;
    position: absolute;
    bottom: -30px;
    left: 0px;
    background-color: #003b90;
    width: 100%;
    filter: alpha(opacity=0.8);
    opacity: 0.8;
    transition: all .5s;
}

.h-news, .h-active, .links-tabs {
    background: white;
}

.lines {
    background: none;
    height: 27px;
    position: relative;
    margin-bottom: 5px;
}

.news-box {
    margin-top: 16px;
    height: 300px;
    position: relative;
}

.aicon, .aicon2, .aicon3 {
    left: 10px;
} 

.aicon {
    background: url(../../assets/hdu/trigle3.png) no-repeat;
    background-size: 39px 16px;
    width: 12px;
    height: 18px;
    float: left;
    position: absolute;
    top: 11px;
    left: 5px;
}

span {
    font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial, "宋体";
}

.line-cname {
    color: #003b90;
    font-weight: bold;
    font-size: 18px;
    padding: 0 12px;
    position: absolute;
    top: 6px;
    left: 20px;
}

.line-ename {
    font-size: 12px;
    color: #003b90;
    float: left;
    padding-left: 10px;
    position: absolute;
    top: 11px;
    left: 115px;
    border-left: 1px solid #003b90;
}

.jinru {
    color: #fa5d42;
    float: right;
    text-decoration: none;
    margin-top: 15px;
    margin-right: 28px;
    font-size: 12px;
}

.n-left {
    left: 27px;
    width: 100px;
    height: 300px;
    position: absolute;
    top: 0px;
}

.nlitem {
    position: relative;
    height: 47px;
}

.c110 {
   height: 110px;
}

.c110 .cur {
    display: block;
}

.cur {
    width: 105px;
    background: #f5f5f5;
    position: absolute;
    height: 112px;
    top: 0px;
    left: -19px;
    z-index: 10;
    border: 1px solid #3160a3;
    border-radius: 12px 0 0 12px;
    border-right: none;
}

.na {
    background: #022a65;
    z-index: 5;
}

.nb {
    background: #003b90;
    z-index: 4;
}

.nc {
    background: #084eb3;
    z-index: 3;
}

.nd {
    background: #2078c9;
    z-index: 2;
}

.ne {
    background: #308ce1;
    z-index: 1;
}

.chide {
    top: 0;
}

.min {
    height: 51px;
    position: absolute;
    left: 0px;
    width: 100px;
    border-radius: 0 0 0 10px;
    cursor: pointer;
}

.cur-m, .cur-g, .cur-d {
    position: absolute;
    color: #003b90;
}

.cur-m {
    top: 27px;
    left: 27px;
    font-size: 30px;
}

.cur-g {
    top: 35px;
    left: 4px;
    width: 107px;
    height: 63px;
    background: url(../../assets/hdu/blue.png) no-repeat;
}

.cur-d {
    top: 64px;
    left: 70px;
    font-size: 30px;
    color: #f6650e;
}

.min-text {
    position: absolute;
    top: 21px;
    right: 31px;
    color: white;
    font-weight: bold;
    font-size: 16px;
}

.n-right {
    right: 8px;
    position: absolute;
    top: 0px;
    width: 878px;
    height: 295px;
    background: #f5f5f5;
    border: 1px solid #3160a3;
    border-radius: 0 20px 20px 0px;
    z-index: 8;
}

.nrmain {
    width: 440px;
    height: 260px;
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 50px;
    padding-top: 28px;
}

.nrt {
    color: #003b90;
    margin-bottom: 10px;
    white-space: nowrap;
    overflow: hidden;
}

.nrc {
    padding-right: 20px;
    line-height: 22px;
    /* text-indent: 2em; */
    height: 110px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.nrc p {
    margin: 0px;
}

.nrmain p {
    color: black;
}

.nra {
    height: 15px;
    padding-right: 31px;
}

.nra a {
    float: right;
    text-decoration: none;
    color: #3b80c6;
    font-size: 12px;
}

.nrimg {
    position: absolute;
    top: 28px;
    right: 50px;
    width: 320px;
    height: 240px;
    overflow: hidden;
    box-shadow: 1px 1px 8px #cbc4c4;
}

.nrimg-shaw span {
    float: right;
    color: white;
    font-size: 12px;
    margin: 5px;
}

.home-news-arrow-left {
    left: 17px;
}

.home-news-arrow {
    width: 16px;
    position: absolute;
    top: 132px;
    height: 32px;
    cursor: pointer;
}

.home-news-arrow-right {
    right: 17px;
}

.home-news-arrow {
    width: 16px;
    position: absolute;
    top: 132px;
    height: 32px;
    cursor: pointer;
}
</style>