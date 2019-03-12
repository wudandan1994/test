<template>
    <div class="reprintruncard">
        <span class="reprint-item">重印Runcard标签</span>
        <div class="product-sf"></div>
    </div>
</template>
<script>
export default {
    
}
</script>

<style lang="less" >
 .reprintruncard {
     box-sizing: border-box;
    //  background-color: pink;
     width:100%;
     height: 100%;
        >.reprint-item {
            display: inline-block;
            height: 50px;
            line-height: 50px;
            color: #606266;
            cursor: text;
            padding-left: 10px;
        }
  
     >.product-sf {
         width:800px;
         height:500px;
         background-color: red;
         margin-left:100px;
         padding-top: 10px;
         border-radius: 7px;
     }
     
 }
</style>
