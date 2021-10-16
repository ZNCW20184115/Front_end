<template>
    <div class="h-active-c">
    <div class="lines">
                    <span class="aicon"></span>
                    <span class="line-cname">{{ lineCname }}</span>
                    <span class="line-ename">{{ lineEname }}</span>

                </div>

                <div class="a-img"  v-on:mouseover='mouseMove' v-on:mouseout='mouseMove'>
                    <img v-bind:src='bg' width="302" height="138" >
                    <div class="a-img-shaw" v-show="ismouseover" onclick="window.open('http://www.hdu.edu.cn/news')">
                        <span>{{ lineCname }}</span>
                        <div>{{ lineEname }}</div>
                    </div>
                </div>

                <div class="a-content">
                        <div class="a-wrap" v-for="msg in msgs">
                            <span class="a-sq"> </span>
                            <a class="a-sc a-sc-with-date" target="_blank" style="color:#000000"
                               :href="msg.address">
                                {{ msg.item }}                           </a>
                            <span class="a-date">{{ msg.date }}</span>
                        </div>
                </div>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
    name: 'h-active-c',
    props:{
        lineCname: String,
        lineEname: String,
        bg: String,
        add:String,
        msgs:Array[
        {item:String,date:String,address:URL}
        ]
    },
    setup(props){
        const name1 = reactive(props.lineCname)
        const name2 = reactive(props.lineEname)
        const bg1 = reactive(props.bg)
        const msg1 = reactive(props.msgs)
        const ADD1 = reactive(props.add)
        return {name1, name2, bg1, msg1, ADD1}
    },
    data(){
        return{
            ismouseover: 0
        }
    },
    methods:{
        mouseMove: function(){
            this.ismouseover = 1 - this.ismouseover
        }
    }
}
</script>

<style scoped>
.lines {
    background: none;
    height: 27px;
    position: relative;
    margin-bottom: 5px;
}

.a-img {
    height: 140px;
    position: absolute;
    top: 40px;
    left: 0px;
    width: 302px;
    border: 1px solid #e9e9e9;
    border-bottom: none;
}

.a-content {
    height: 142px;
    width: 304px;
    position: absolute;
    bottom: 0px;
    left: 0px;
    padding-top: 4px;
    padding-left: 10px;
    border: 1px solid #e9e9e9;
    border-top: none;
    box-sizing: border-box;
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

.a-img-shaw {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 302px;
    height: 138px;
    background: rgba(109, 157, 204, 0.5);
    cursor: pointer;
    color: white;
    /* display: none; */
}

.a-img-shaw span {
    display: block;
    text-align: center;
    margin-top: 45px;
}

.a-img-shaw div {
    border: 1px solid #cfd1db;
    border-left: none;
    border-right: none;
    padding: 4px 6px;
    width: 128px;
    text-align: center;
    margin: 5px auto;
    font-size: 10px;
}

.a-wrap {
    /* height: 18px; */
    /* margin: 4px 0; */
    white-space: nowrap;
    overflow: hidden;
    line-height: 22px;
}

.a-sq {
    float: left;
    width: 3px;
    height: 3px;
    background-color: #5e6eae;
    margin-top: 8px;
    margin-right: 10px;
}

.a-wrap .a-sc {
    color: #5E5959;
}

.a-sc {
    float: left;
    font-size: 12px;
    text-decoration: none;
    color: #5E5959;
    width: 249px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
}

.a-sc-with-date {
    width: 199px;
}

.a-date {
    float: right;
    margin-right: 20px;
    font-size: 12px;
    color: #a0a0a0;
    /* margin-top: 3px; */
}
</style>