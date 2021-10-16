<template>
    <div class="n-bg-filter">
        <div class="h-links">
            <div class="lines link-border">
                <span class="aicon"></span>
                <span class="line-cname">友情链接</span>
                <span class="line-ename">LINKS</span>
            </div>

            <div class="links-body">
                <div class="tabs-check">
                    <div class="tabs-item" v-on:click="changeactive(0)" v-bind:class="{'active': judgeactive(0)}">
                        <div class="t-img xueyuan"></div>
                        <div class="t-name">学院导航</div>
                        <div class="t-border">
                            DEPARTMENT
                        </div>
                    </div>

                    <div class="tabs-item"  v-on:click="changeactive(1)" v-bind:class="{'active': judgeactive(1)}">
                        <div class="t-img bumen"></div>
                        <div class="t-name">部门网站</div>
                        <div class="t-border">
                            WEBSITE
                        </div>
                    </div>

                </div>


                <div class="item-area wp-36" id="item1" v-show="!isactive">
                                                <a target="_blank" href="http://mechanical.hdu.edu.cn"><span
                                        class="a-sq"> </span>机械工程学院</a>
                                                        <a target="_blank" href="http://elec.hdu.edu.cn"><span
                                        class="a-sq"> </span>电子信息学院                            </a>
                                                        <a target="_blank" href="http://comm.hdu.edu.cn"><span
                                        class="a-sq"> </span>通信工程学院                            </a>
                                                        <a target="_blank" href="http://auto.hdu.edu.cn"><span
                                        class="a-sq"> </span>自动化学院                            </a>
                                                        <a target="_blank" href="http://computer.hdu.edu.cn"><span
                                        class="a-sq"> </span>计算机学院                            </a>
                                                        <a target="_blank" href="http://cmee.hdu.edu.cn"><span
                                        class="a-sq"> </span>材料与环境工程学院                            </a>
                                                        <a target="_blank" href="http://sci.hdu.edu.cn"><span
                                        class="a-sq"> </span>理学院                            </a>
                                                        <a target="_blank" href="http://economics.hdu.edu.cn/"><span
                                        class="a-sq"> </span>经济学院                            </a>
                                                        <a target="_blank" href="http://management.hdu.edu.cn"><span
                                        class="a-sq"> </span>管理学院                            </a>
                                                        <a target="_blank" href="http://accounting.hdu.edu.cn"><span
                                        class="a-sq"> </span>会计学院                            </a>
                                                        <a target="_blank" href="http://foreignedu.hdu.edu.cn"><span
                                        class="a-sq"> </span>外国语学院                            </a>
                                                        <a target="_blank" href="http://syxy.hdu.edu.cn"><span
                                        class="a-sq"> </span>人文艺术与数字媒体学院                            </a>
                                                        <a target="_blank" href="http://rwxy.hdu.edu.cn"><span
                                        class="a-sq"> </span>法学院                            </a>
                                                        <a target="_blank" href="http://marxnew.hdu.edu.cn"><span
                                        class="a-sq"> </span>马克思主义学院                            </a>
                                                        <a target="_blank" href="http://zhuoyue.hdu.edu.cn"><span
                                        class="a-sq"> </span>卓越学院                            </a>
                                                        <a target="_blank" href="http://sie.hdu.edu.cn"><span
                                        class="a-sq"> </span>国际教育学院                            </a>
                                                        <a target="_blank" href="http://cbs.hdu.edu.cn"><span
                                        class="a-sq"> </span>网安学院                            </a>
                                                        <a target="_blank" href="http://adultedu.hdu.edu.cn"><span
                                        class="a-sq"> </span>继教学院 继教中心                            </a>
                                                        <a target="_blank" href="http://joint.hdu.edu.cn/"><span
                                        class="a-sq"> </span>杭电圣光机联合学院                            </a>
                                                        <a target="_blank" href="http://cy.hdu.edu.cn"><span
                                        class="a-sq"> </span>创业学院                            </a>
                                                        <a target="_blank" href="http://ped.hdu.edu.cn"><span
                                        class="a-sq"> </span>体育教学部                            </a>
                                                        <a target="_blank" href="http://xxhzk.hdu.edu.cn/"><span
                                        class="a-sq"> </span>信息经济中心                            </a>
                                                        <a target="_blank" href="http://meri.hdu.edu.cn/"><span
                                        class="a-sq"> </span>微电子研究中心                            </a>
                                                        <a target="_blank" href="http://casee.hdu.edu.cn/"><span
                                        class="a-sq"> </span>中国科教评价研究院                            </a>
                                                        <a target="_blank" href="http://icam.hdu.edu.cn/"><span
                                        class="a-sq"> </span>浙江磁性材料研究院                            </a>
                                                        <a target="_blank" href="http://fcloud.hdu.edu.cn/"><span
                                        class="a-sq"> </span>中国财务云服务研究院                            </a>
                                                        <a target="_blank" href="http://www.hziee.edu.cn"><span
                                        class="a-sq"> </span>信息工程学院                            </a>
                                                        <a target="_blank" href="http://fcloud.hdu.edu.cn/"><span
                                        class="a-sq"> </span>浙江省管理会计研究中心                            </a>
                                                        <a target="_blank" href="http://bri.hdu.edu.cn"><span
                                        class="a-sq"> </span>一带一路信息技术研究院                            </a>
                                                        <a target="_blank" href="http://casee.hdu.edu.cn/"><span
                                        class="a-sq"> </span>浙江高等教育研究院                            </a>
                                                        <a target="_blank" href="http://www.assetcloud.org.cn"><span
                                        class="a-sq"> </span>资产云开放协同创新中心                            </a>
                            

                </div>

                <div class="item-area wp-36" id="item2" v-show="isactive">
                                                <a target="_blank" href="http://office.hdu.edu.cn"><span
                                        class="a-sq"> </span>学校办公室                            </a>
                                                        <a target="_blank" href="http://zzb.hdu.edu.cn"><span
                                        class="a-sq"> </span>党委组织部                            </a>
                                                        <a target="_blank" href="http://tzb.hdu.edu.cn"><span
                                        class="a-sq"> </span>党委统战部                            </a>
                                                        <a target="_blank" href="http://www.hdu.edu.cn/news"><span
                                        class="a-sq"> </span>党委宣传部             党委教师工作部                            </a>
                                                        <a target="_blank" href="http://jjs.hdu.edu.cn"><span
                                        class="a-sq"> </span>纪检监察室                            </a>
                                                        <a target="_blank" href="http://jgdw.hdu.edu.cn/"><span
                                        class="a-sq"> </span>机关党委                            </a>
                                                        <a target="_blank" href="http://zdb.hdu.edu.cn"><span
                                        class="a-sq"> </span>学科建设与发展规划处                            </a>
                                                        <a target="_blank" href="http://jwc.hdu.edu.cn"><span
                                        class="a-sq"> </span>教务处                            </a>
                                                        <a target="_blank" href="http://student.hdu.edu.cn/"><span
                                        class="a-sq"> </span>党委学工部 人民武装部                            </a>
                                                        <a target="_blank" href="http://zhaosheng.hdu.edu.cn/index.php"><span
                                        class="a-sq"> </span>招生就业处                            </a>
                                                        <a target="_blank" href="http://research.hdu.edu.cn"><span
                                        class="a-sq"> </span>科学技术研究院                            </a>
                                                        <a target="_blank" href="http://grs.hdu.edu.cn"><span
                                        class="a-sq"> </span>研究生院 党委研工部                            </a>
                                                        <a target="_blank" href="http://renshi.hdu.edu.cn"><span
                                        class="a-sq"> </span>人事处（人才办）                            </a>
                                                        <a target="_blank" href="http://sjc.hdu.edu.cn/"><span
                                        class="a-sq"> </span>审计处                            </a>
                                                        <a target="_blank" href="http://cwc.hdu.edu.cn"><span
                                        class="a-sq"> </span>计划财务处                            </a>
                                                        <a target="_blank" href="http://alumni.hdu.edu.cn/"><span
                                        class="a-sq"> </span>校友联络办                            </a>
                                                        <a target="_blank" href="http://jjh.hdu.edu.cn"><span
                                        class="a-sq"> </span>基金会                            </a>
                                                        <a target="_blank" href="http://foreign.hdu.edu.cn"><span
                                        class="a-sq"> </span>国际处 港澳台办                            </a>
                                                        <a target="_blank" href="http://device.hdu.edu.cn"><span
                                        class="a-sq"> </span>国有资产与实验室管理处                            </a>
                                                        <a target="_blank" href="http://jjc.hdu.edu.cn"><span
                                        class="a-sq"> </span>校园建设与管理处                            </a>
                                                        <a target="_blank" href="http://baowei.hdu.edu.cn"><span
                                        class="a-sq"> </span>保卫处                            </a>
                                                        <a target="_blank" href="http://ltxc.hdu.edu.cn"><span
                                        class="a-sq"> </span>离退休工作处                            </a>
                                                        <a target="_blank" href="http://teachhome.hdu.edu.cn"><span
                                        class="a-sq"> </span>工会                            </a>
                                                        <a target="_blank" href="http://tuanwei.hdu.edu.cn"><span
                                        class="a-sq"> </span>团委                            </a>
                                                        <a target="_blank" href="http://hqzx.hdu.edu.cn"><span
                                        class="a-sq"> </span>公共事务管理处                            </a>
                                                        <a target="_blank" href="http://www.lib.hdu.edu.cn"><span
                                        class="a-sq"> </span>图书馆                            </a>
                                                        <a target="_blank" href="http://nic.hdu.edu.cn"><span
                                        class="a-sq"> </span>网络数据中心                            </a>
                                                        <a target="_blank" href="http://dangan.hdu.edu.cn"><span
                                        class="a-sq"> </span>档案馆                            </a>
                                                        <a target="_blank" href="http://journal.hdu.edu.cn/CN/volumn/current.shtml"><span
                                        class="a-sq"> </span>杂志社                            </a>
                                                        <a target="_blank" href="http://teacher.hdu.edu.cn/"><span
                                        class="a-sq"> </span>质评中心                            </a>
                                                        <a target="_blank" href="http://xyy.hdu.edu.cn"><span
                                        class="a-sq"> </span>校医院                            </a>
                                                        <a target="_blank" href="http://cgzx.hdu.edu.cn"><span
                                        class="a-sq"> </span>采购中心                            </a>
                                                        <a target="_blank" href="http://hq.hdu.edu.cn"><span
                                        class="a-sq"> </span>后勤集团                            </a>
                                                        <a target="_blank" href="http://ceee.hdu.edu.cn"><span
                                        class="a-sq"> </span>实验教学示范中心                            </a>
                                                        <a target="_blank" href="http://career.hdu.edu.cn"><span
                                        class="a-sq"> </span>就业指导中心                            </a>
                                                        <a target="_blank" href="http://xinli.hdu.edu.cn"><span
                                        class="a-sq"> </span>心理健康教育中心                            </a>
                                                        <a target="_blank" href="http://zhaobiao.hdu.edu.cn"><span
                                        class="a-sq"> </span>招标与采购信息                            </a>
                                                        <a target="_blank" href="http://zcjy.hdu.edu.cn/"><span
                                        class="a-sq"> </span>资产经营有限公司                            </a>
                                            </div>
                <div style="clear:both;"></div>
            </div>
        </div>
        <div class="links-tabs">
                                                                                                                                                                                    <a target="_blank" href="http://www.zj.gov.cn/">浙江省人民政府 ·</a>
                                <a target="_blank" href="http://www.moe.gov.cn/">教育部 ·</a>
                                <a target="_blank" href="http://www.miit.gov.cn">工业和信息化部 ·</a>
                                <a target="_blank" href="http://www.zjedu.gov.cn">浙江省教育厅 ·</a>
                                <a target="_blank" href="http://www.zjjxw.gov.cn/cszc/jgglc">省国防科工办 ·</a>
                                <a target="_blank" href="http://www.heda.gov.cn">杭州经济开发区 ·</a>
                                <a target="_blank" href="http://xxgk.hdu.edu.cn/Col/Col127/Index.aspx">高校科研经费使用信息公开</a>
                        </div>
    </div>
</template>

<script>
export default {
    name: 'n-bg-fliter',
    data(){
        return{
            isactive: 0
        }
    },
    methods:{
        changeactive:function(n){
            this.isactive = n;
        },
        judgeactive:function(n){
            if(this.isactive == n)  return true;
            else return false;
        }
    }
}
</script>

<style scoped>
.n-bg-filter {
    width: 1000px;
    margin: 0 auto;
    background: #ffffff;
    background: -webkit-linear-gradient(rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
}

.h-links {
    background: white;
    margin-top: 0px;
    padding-top: 5px;
    box-shadow: 0px 8px 10px #888888;
    padding-left: 140px;
    padding-right: 140px;
    width: 1000px;
    margin: 0 auto;
    margin-top: 20px;
    overflow: hidden;
    padding-left: 0;
    padding-right: 0;
    background: none;
    box-shadow: none;
}

.links-tabs {
    margin-top: 0;
    margin-bottom: 0;
    padding-top: 25px;
    padding-bottom: 16px;
    box-shadow: 0px 7px 10px #888888;
    padding-left: 140px;
    padding-right: 140px;
    overflow: hidden;
    margin: 0 auto;
    width: 1000px;
    margin-top: 25px;
    margin-bottom: 16px;
    text-align: center;
    padding-left: 0;
    padding-right: 0;
    background: none;
    box-shadow: none;
}

.lines {
    background: none;
    height: 27px;
    position: relative;
    margin-bottom: 5px;
}

.link-border {
    margin-bottom: 0;
    border-bottom: 1px solid #8ca7cd;
    padding-bottom: 15px;
    overflow: hidden;
}

.links-body {
    background: none;
    box-shadow: none;
    padding-top: 10px;
    margin-top: 0;
    margin-top: 10px;
    height: 220px;
    background-color: #f5f5f5 !important;
    display: flex;
    justify-content: center;
    align-items: center;
}

.aicon, .aicon2, .aicon3 {
    left: 10px;
}

.aicon {
    background: url(../assets/hdu/trigle3.png) no-repeat;
    background-size: 39px 16px;
    width: 12px;
    height: 18px;
    float: left;
    position: absolute;
    top: 11px;
    left: 5px;
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

.tabs-check {
    margin-left: 10px;
}

.tabs-check {
    width: 300px;
    height: 220px;
    float: left;
}

.item-area {
    padding-left: 22px;
    background: #f5f5f5;
    padding-bottom: 10px;
}

.item-area {
    float: left;
    /* padding-top: 23px; */
    width: 658px;
}

.item-area {
    background: none;
}

.tabs-item {
    height: 110px;
    background: url(../assets/hdu/tabback.png);
    position: relative;
    cursor: pointer;
}

.active {
    background: #116cbf;
}/*蓝色点击状态*/
 
.t-img {
    position: absolute;
    top: 34px;
    left: 20px;
    width: 48px;
    height: 40px;
    background: url(../assets/hdu/icon.png) no-repeat;
}

.active .xueyuan {
    background-position: 0px 0px;
}

.xueyuan {
    background-position: -80px 0px;
}

.active .t-name {
    color: white;
}

.t-name {
    left: 130px;
    position: absolute;
    top: 22px;
    color: #2c386c;
    font-weight: bold;
}

.tabs-item .t-border{
    color: #2c386c;
}

.t-border {
    position: absolute;
    top: 56px;
    left: 92px;
    font-size: 10px;
    color: #cfd1db;
    border: 1px solid #cfd1db;
    border-left: none;
    border-right: none;
    padding: 4px 6px;
    width: 125px;
    text-align: center;
}

.active .t-border {
    color: white;
} 

.bumen {
    background-position: -83px -89px;
}

.active .bumen {
    background-position: 0px -89px;
}

.wp-36 a {
    margin: 2px 0;
}

.item-area a {
    width: 164px;
    float: left;
    font-size: 12px;
    text-decoration: none;
    color: #838283;
}

.item-area a {
    color: black;
    text-align: left;
}

.a-sq {
    float: left;
    width: 3px;
    height: 3px;
    background-color: #5e6eae;
    margin-top: 8px;
    margin-right: 10px;
}

.links-tabs a {
    font-size: 12px;
    color: #838283;
    text-decoration: none;
    margin: 0 3px;
}
</style>