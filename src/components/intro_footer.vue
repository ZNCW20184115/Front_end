<template>
    <footer class="footer">
        <div class="content">
            <div class="footer-top">
                <span class="logo_name">员工管理系统</span>
            </div>
            <div class="footer-links">
                <ul class="footer-box">
                    <li class="footer-head">相关链接</li>
                    <li><el-button type="text" size=small @click="home">首页</el-button></li>
                    <li><el-button type="text" size=small @click="about">关于</el-button></li>
                    <li><el-button type="text" size=small @click="policy">隐私政策</el-button></li>
                    <li><el-button type="text" size=small @click="FAQ">常见问题</el-button></li>
                </ul>
                <ul class="footer-box">
                    <li class="footer-head">
                        <i class="el-icon-location-outline"></i>
                        地址</li>
                    <li>杭州电子科技大学</li>
                </ul>
                <ul class="footer-box">
                    <li class="footer-head">
                        <i class="el-icon-message"></i>
                        联系我们</li>
                    <li>电话号码:xxxx</li>
                    <li>微信号:xxxxx</li>
                </ul>
                <ul class="footer-box">
                    <li class="footer-head">微信二维码</li>
                    <li><img src="../assets/images/footer_wx.jpg" height="100" width="100" alt=""></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="bottom-text">
                <span class="copyright-text">Copyright © 2021 <a href="#">北极企鹅开发组</a></span>
            </div>
        </div>
    </footer>
</template> 
<script>
    export default{
        data () {
            return {
            };
        },
        methods: {
            home () {
                this.$router.push({name:'intro_main'})
            },
            aoubt () {
                this.$router.push({name:'intro_about'})
            },
            policy () {
                this.$router.push({name:'Introduce'})
            },
            FAQ () {
                this.$router.push({name:'Introduce'})
            }
        }
    }
</script>

<style scope>
.footer {
    padding-left: 0px;
    padding-right: 0px;
    background: #060c21;    
    width: 100%;
    position: relative;
}
.footer::before {
    content: '';
    position: absolute;
    left: 0;
    top: 100px;
    height: 1px;
    width: 100%;
    background: #AFAFB6;
}
.footer .content {
    max-width: 1250px;
    margin: auto;
    padding: 30px 40px 40px 40px;
}

.footer .content .footer-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 50px;
}
.footer .content .footer-top .logo_name {
    color: #fff;
    font-size: 30px;
}
.footer .content .footer-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.footer .content .footer-links .footer-box {
    width: calc(100% / 5 - 10px);
}

.footer .content .footer-links .footer-box:not(:last-child) {
    padding-right: 10px;
}

.footer .content .footer-links .footer-box .footer-head {
    color: #fff;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    position: relative;
}

.footer .footer-links .footer-box .footer-head::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    height: 2px;
    width: 35px;
    background: #fff;
}

.footer .content .footer-links .footer-box li {
    margin: 6px 0;
    color: #fff;
    list-style: none;
}

.footer .content .footer-links .footer-box li button {
    color: #fff;
    font-size: 14px;
    margin-top: -10px;
    margin-bottom: -10px;
    text-decoration: none;
    opacity: 0.8;
}

.footer .footer-bottom {
    width: 100%;
    background: #050e2f;
}

.footer .footer-bottom .bottom-text {
    max-width: 1250px;
    margin: auto;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
}

.footer .footer-bottom .bottom-text span,
.footer .footer-bottom .bottom-text a {
    font-size: 14px;
    font-weight: 300;
    color: #fff;
    opacity: 0.8;
    text-decoration: none;
}

.footer .footer-bottom .bottom-text a:hover {
    opacity: 1;
    text-decoration: underline;
}
</style>