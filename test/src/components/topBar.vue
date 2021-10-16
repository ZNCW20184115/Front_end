<template>
<div id="Barbackground">
  <div class="topBar">
      <form method="get" id="search-form" target="_blank" class="search">
          <input type="hidden" name="advanced" value="true" placeholder="搜索..">
          <input type="text" name="keyword">
          <input type="submit" style="display:none">
          <span onclick="$('#search-form').submit()"></span>
      </form>
  </div>
</div>
</template>

<script>
export default {
    name: 'topBar',
}
</script>

<style scoped>
#Barbackground{
    height: 30px;
    background-color: #404040;
    color: white;
}

.topBar {
    width: 1280px;
    margin: 0px auto;
    overflow: hidden;
    height: 30px;
    background-color: #404040;
    color: white;
}

.search{
    background-color: #db4a33;
    height: 30px;
    width: 260px;
    float: right;
}

form {
    display: block;
    margin-top: 0em;
}

.search input {
    background: none;
    border: none;
    height: 30px;
    color: white;
    width: 220px;
    outline: none;
}

.search span {
    float: left;
    margin-top: 5px;
    margin-right: 5px;
    width: 20px;
    height: 20px;
    background: url(../assets/hdu/search.png) no-repeat;
    margin-left: 10px;
    cursor: pointer;
}


</style>