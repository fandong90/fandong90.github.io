<template>
    <el-container>
        <blog-header></blog-header>
        <el-main :style="{'height': mainHeight+'px'}">
            <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
</template>

<script>
import blogHeader from '@/component/header/header';
export default {
   name: "App",
   components:{
       blogHeader
   },
   data(){
       return {
           mainHeight:0
       }
   },
   created(){
      this.mainHeight = document.documentElement.clientHeight-120;
   },
   mounted(){
     window.onresize=this.setWindowSize;
   },
   destroyed(){
      window.onresize= null;
   },
   methods:{
      setWindowSize(){
          console.log(document.documentElement.clientHeight-120);
          this.mainHeight = document.documentElement.clientHeight-120;
      }
   }
}
</script>

<style>
   .el-container{
       padding: 0px 0px;
       margin: -8px -8px;
   }
   .el-footer {
    background-color: #2B3A42;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>
