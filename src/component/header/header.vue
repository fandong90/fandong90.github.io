<template>
    <el-header>
        <el-menu :default-active="active" mode="horizontal" @select="handleSelect">
                <el-menu-item v-for="item in options" :index="item.index" :key="item.name">
                    {{ item.title }}
                </el-menu-item>
        </el-menu>
    </el-header>
</template>

<script>
import pages from '@/router/pages-list';
const list =pages;
export default {
   data(){
       return {
           active:'0',
           options:[]
       }
   },
   created(){
      this.setPages();
   },
   mounted(){
       let curRouter = this.options.filter(item=>{
           if(item.index == this.active) return true;
           else return false;
       });
       this.$router.push(curRouter[0].name);
   },
   methods:{
       handleSelect(key,path){
          let curRouter = this.options.filter(item=>{
              if(item.index == key){
                  return true;
              }else{
                  return false;
              }
          });
          this.$router.push(curRouter[0].name);
       },
       setPages(){
        let index=0;
        list.forEach(item => {
            this.options.push({
                index:index.toString(),
                name: item.name,
                title: item.title
            });
            index ++;
        });
   }
   }
}
</script>

<style>
    .el-header, .el-footer {
    background-color:#fff;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
</style>
