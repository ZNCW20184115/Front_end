<template>
    <div class="h-active">
    <hActiveC class="block" :lineCname='lineCname1' :lineEname='lineEname1' :add="add1" :msgs='msgs1' :bg="bg1"/>
    <hActiveC class="block hack" :lineCname='lineCname2' :lineEname='lineEname2' :add="add2" :msgs='msgs2' :bg="bg2"/>
    <hActiveC class="block" :lineCname='lineCname3' :lineEname='lineEname3' :add="add3" :msgs='msgs3' :bg="bg3"/> 
    </div>
</template>

<script>
import hActiveC from './h-active-c.vue'
import { ref } from 'vue'


export default {
    name: 'h-active',
    components: {
        hActiveC
    },
    data() {
        return{
            // msg: [
            //     {item: '校团委举办青马大讲堂第27讲：开学法治第一课', data:'10/01', address:'/news/general_28697'},
            //     {item: '学校召开统一战线庆祝建党100周年暨国庆中秋座谈会', data:'10/01', address:'/news/general_28696'},
            //     {item: '学校举行2021年青年马克思主义者培养学院团学骨干作风建设培训班开班仪式', data:'09/30', address:'/news/general_28695'},
            //     {ietm: '省审计厅教科处党支部与财务网络中心党支部开展“学党史 送服务 促发展”支部结对共建活动', data:'09/30', address:'/news/general_28694'},
            //     {item: '探寻红色记忆 传承杭电精神', data:'09/30', address:'/news/general_28693'},
            //     {item: '理学院举办科学大讲堂揭秘宇宙之谜', data:'09/30', address:'/news/general_28692'}
            // ]
        }
    },
    setup(){
        const lineCname1 = ref('综合新闻')
        const lineEname1 = ref('HDU NEWS')
        const add1 = ref('http://www.hdu.edu.cn/news/general')
        const bg1 = ref(require('../../assets/hdu/201812141531321000.jpg'))
        const msgs1 = ref([
                {item: '校团委举办青马大讲堂第27讲：开学法治第一课', date:'10/01', address:'http://www.hdu.edu.cn/news/general_28697'},
                {item: '学校召开统一战线庆祝建党100周年暨国庆中秋座谈会', date:'10/01', address:'http://www.hdu.edu.cn/news/general_28696'},
                {item: '学校举行2021年青年马克思主义者培养学院团学骨干作风建设培训班开班仪式', date:'09/30', address:'http://www.hdu.edu.cn/news/general_28695'},
                {item: '省审计厅教科处党支部与财务网络中心党支部开展“学党史 送服务 促发展”支部结对共建活动', date:'09/30', address:'http://www.hdu.edu.cn/news/general_28694'},
                {item: '探寻红色记忆 传承杭电精神', date:'09/30', address:'http://www.hdu.edu.cn/news/general_28693'},
                {item: '理学院举办科学大讲堂揭秘宇宙之谜', date:'09/30', address:'http://www.hdu.edu.cn/news/general_28692'}
            ]) 
        
        const lineCname2 = ref('媒体关注')
        const lineEname2 = ref('FOCUS')
        const add2 = ref('http://www.hdu.edu.cn/news/media')
        const bg2 = ref(require('../../assets/hdu/201703290113271000.jpg'))
        const msgs2 = ref([
                {item: '杭州日报：杭州电子科技大学•艺创小镇 政校企合作再结硕果', date:'', address:'http://www.hdu.edu.cn/news/media_28357'},
                {item: '浙江新闻网：杭电艺创小镇工业产品设计实践教学基地挂牌', date:'', address:'http://www.hdu.edu.cn/news/media_27927'},
                {item: '光明日报：打破研究生导师测评“唯论文论”', date:'', address:'http://www.hdu.edu.cn/news/media_28236'},
                {item: '新华网：杭州电子科技大学——在专业课学习中学党史', date:'', address:'http://www.hdu.edu.cn/news/media_28237'},
                {item: '中国教育新闻网：杭州电子科技大学——大学生“打捞”家史中的党史', date:'', address:'http://www.hdu.edu.cn/news/media_28228'},
                {item: '新华网：杭电管理学院学生打捞“沉没”革命事迹', date:'', address:'http://www.hdu.edu.cn/news/media_28230'}
            ]) 
        
        const lineCname3 = ref('通知公告')
        const lineEname3 = ref('NOTICE')
        const add3 = ref('http://www.hdu.edu.cn/news/notice')
        const bg3 = ref(require('../../assets/hdu/201703290053281000.jpg'))
        const msgs3 = ref([
                {item: '巡视工作通告', date:'', address:'http://www.hdu.edu.cn/news/notice_28623'},
                {item: '青马大讲堂第26讲：中国共产党的百年成就与辉煌', date:'', address:'http://www.hdu.edu.cn/news/notice_28676'},
                {item: '青春杭电 星青年说：公益之星事迹分享会', date:'', address:'http://www.hdu.edu.cn/news/notice_28642'},
                {item: '杭州2022年亚运会赛会志愿者全球招募', date:'', address:'http://www.hdu.edu.cn/news/notice_28633'},
                {item: '“百年追梦”跟着电影学党史：《我和我的家乡》赏析', date:'', address:'http://www.hdu.edu.cn/news/notice_28450'},
                {item: '“百年追梦·声声不息”红色家书经典诵读活动第七期', date:'', address:'http://www.hdu.edu.cn/news/notice_28421'}
            ])
        
        return {lineCname1, lineEname1, bg1, msgs1, add1, lineCname2, lineEname2, bg2, msgs2, add2, lineCname3, lineEname3, bg3, msgs3, add3}
    }
}
</script>

<style scoped>
.block {
    margin-left: 20px;
    width: 310px;
    height: 323px;
    float: left;
    position: relative;
}

.h-active .hack{ 
    margin: 0 35px; 
    margin-right: 5px;
    margin-left: 20px;
}

.h-active{
    padding-left: 0;
    padding-right: 0;   
    height: 323px !important;
    margin-top: 35px;
    width: 1000px;
    margin: 0 auto;
}
</style>