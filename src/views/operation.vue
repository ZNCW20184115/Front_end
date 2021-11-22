
<template>
  <el-container style="height: 100%">
    <router-view />
  </el-container>
</template>
<script>
import RelationTransform from '../views/RelationTransform.vue'
import AdministratorChange from '../views/AdministratorChange.vue'
export default {
  name: 'operation',
  components:{ RelationTransform,AdministratorChange }
}
</script>



