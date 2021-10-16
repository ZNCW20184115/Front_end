<template>
    <div class="n-bg-white">
    <hNews/>
    <hActive/>
    </div>
</template>

<script>
import hNews from '../components/n-bg-white.C/h-news.vue'
import hActive from '../components/n-bg-white.C/h-active.vue'

export default {
    components:{
        hNews,
        hActive
    },
    name: 'n-bg-white'
}
</script>

<style scoped>

</style>