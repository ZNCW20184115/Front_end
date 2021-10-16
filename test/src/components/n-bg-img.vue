<template>
<div class="n-bg-img">
    <div class="n-bg-white">
    <nBgWhite/>
    </div>
    <div class="n-bg-filter">
    <nBgFilter/>
    </div>
</div>
</template>

<script>
import nBgWhite from './n-bg-white.vue'
import nBgFilter from './n-bg-filter.vue'

export default {
  components: { nBgWhite, nBgFilter },
    name: 'n-bg-img'
}
</script>

<style scoped>
.n-bg-img {
    width: 1280px;
    margin: 0 auto;
    background-color: white;
    box-shadow: 0px 5px 10px #888888;
}
</style>