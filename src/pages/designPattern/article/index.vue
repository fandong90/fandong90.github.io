<template>
    <div>
        <el-row :gutter="20" style="padding-top:30px;">
            <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/designPatter' }">设计模式</el-breadcrumb-item>
            <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
            </el-breadcrumb>
        </el-row>
        <div class="selection-box">
            <div style="display:inline-block;float:left;padding:10px 10px;">
                <span class="bar"></span><span class="bar-text">模式简介</span>
            </div>
        </div>
        <div class="selection-box">
            <div style="display:inline-block;float:left;padding:10px 10px;">
                <span class="bar"></span><span class="bar-text">UML关系图</span>
            </div>
        </div>
         <div class="selection-box">
            <div>
                <div style="display:inline-block;float:left;padding:15px 10px;margin-right: 20px;">
                    <span class="bar"></span><span class="bar-text">代码干货</span>
                </div>
                
            </div>
            <div style="padding: 3px;">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="JavaScript" name="Javascript">Javascript</el-tab-pane>
                        <el-tab-pane label="Python" name="Python">Python</el-tab-pane>
                        <el-tab-pane label="Java" name="Java">Java</el-tab-pane>
                        <el-tab-pane label="C#" name="cSharp">C#</el-tab-pane>
                    </el-tabs>
                </div>
        </div>
    </div>
</template>

<script>
export default {
   data(){
       return {
          title:'',
          activeName:'Javascript'
       }
   },
   mounted(){
       this.title = this.$route.query.title;
   },
   methods:{
       handleClick(tab){
           console.log(tab);
       }
   }
}
</script>

<style>
   .selection-box{
       height: 300px;
       border:1px solid #f1f1f1;
       margin: 0px 20px;
       width:auto;
       margin-top:30px;
   }
   .bar{
       display: inline-block;
       height: 16px;
       width: 5px;
       line-height: 16px;
       background-color: #409EFF;
   }
   .bar-text{
       font-size:16px;
       position: relative;
       top: -2px;
       margin-left: 10px;
   }
   .el-tabs__nav-wrap::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: transparent; 
    z-index: 1;
}
</style>
