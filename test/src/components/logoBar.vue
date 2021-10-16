<template>
<div class="LB">
    <div class="logoBar">
        <img src="../assets/hdu/logo.png" class="logoImg">
        <img src="../assets/hdu/motto.png" class="mottoImg">
    </div>
</div>
</template>

<script>
export default {
    name: 'logoBar'
}
</script>

<style scoped>
.LB{
    background: white;
}

.logoBar{
    width: 1100px;
    margin: 0px auto;
    position: relative;
}

.logoImg{
    height: 65px;
    margin-top: 20px;
    margin-left: 55px;
}

.mottoImg{
    float: right;
    height: 50px;
    margin-top: 27px;
    margin-right: 200px;
}
</style>