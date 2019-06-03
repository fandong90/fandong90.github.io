<template>
    <el-container>
        <blog-header></blog-header>
        <el-main :style="{'height': mainHeight+'px'}">
            <router-view></router-view>
        </el-main>
        <blog-footer></blog-footer>
    </el-container>
</template>

<script>
import blogHeader from '@/component/header/header';
import blogFooter from '@/component/footer/footer';
export default {
   name: "App",
   components:{
       blogHeader,
       blogFooter
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
       flex-direction: column;
       background-color: #E9EEF3;
   }
   .content{
       text-align: left;
       padding-left:10px;
       padding-bottom: 10px;
   }

</style>
