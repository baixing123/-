<template>
    <div class="tou" style="width:100%;height:50px;">
<el-header style="text-align: left;  font-size: 13px">
      <span>{{name}}</span>
    </el-header>
    </div>
</template>
<script>
export default {
    props:[
        'name'
    ]
}
</script>
<style scoped>
.tou{
    background: #EFF2F7;
}
</style>

