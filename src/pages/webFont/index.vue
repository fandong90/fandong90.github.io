<template>
    <div>
        <demo ref='codes'></demo>
    </div>
</template>

<script>
const hljs = require('highlight.js');
export default {
   components:{
       demo: ()=>import('../../docs/zh-CN/mk-doc-demo-js.md')
   },
   created(){
        
       
   },
   mounted(){
  
   }
}
</script>

<style>

</style>
