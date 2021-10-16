<template>
<div class="BODY">
  <topBar />
  <logoBar />
  <navigationBar />
  <mainBackground />
  <nbgimg/>
  <fb/>
  <side/>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import logoBar from './components/logoBar.vue'
import navigationBar from './components/navigationBar.vue'
import topBar from './components/topBar.vue'
import mainBackground from './components/mainBackground.vue'
import nbgimg from './components/n-bg-img.vue'
import fb from './components/foot-bar.vue'
import side from './components/side.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    topBar,
    logoBar,
    navigationBar,
    mainBackground,
    nbgimg,
    fb,
    side
  }
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

div{
  display: block;
}

.BODY{
    background: url(./assets/hdu/bg.jpg) no-repeat center center fixed;
    -webkit-background-size: cover;
    background-size: cover;
    margin: 0;
    padding: 0;
    font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial, "宋体";
    font-size: 14px;
    min-width: 1280px;
    display: block;
}

input[type="hidden" i] {
    display: none;
    appearance: none;
    background-color: initial;
    cursor: default;
    padding: initial;
    border: initial;
}

input[type="text" i] {
    padding: 1px 2px;
}

input[type="submit" i] {
    appearance: auto;
    user-select: none;
    white-space: pre;
    align-items: flex-start;
    text-align: center;
    cursor: default;
    box-sizing: border-box;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    color: -internal-light-dark(black, white);
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

input {
    -webkit-writing-mode: horizontal-tb !important;
    text-rendering: auto;
    color: -internal-light-dark(black, white);
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    appearance: auto;
    -webkit-rtl-ordering: logical;
    cursor: text;
    background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
    margin: 0em;
    padding: 1px 2px;
    border-width: 2px;
    border-style: inset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
    border-image: initial;
}

span {
    font-family: "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", tahoma, arial, "宋体";
}
</style>
