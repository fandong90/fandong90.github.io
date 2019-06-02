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
            <div v-html="desc">
                
            </div>
        </div>
        <div class="selection-box">
            <div style="display:inline-block;float:left;padding:10px 10px;">
                <span class="bar"></span><span class="bar-text">UML关系图</span>
            </div>
            <div v-html="uml"></div>
        </div>
         <div class="selection-box">
            <div>
                <div style="display:inline-block;float:left;padding:15px 10px;margin-right: 20px;">
                    <span class="bar"></span><span class="bar-text">代码干货</span>
                </div>
                
            </div>
            <div style="padding: 3px;">
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="JavaScript" name="Javascript">
                            <div v-html="javascript"></div>
                        </el-tab-pane>
                        <el-tab-pane label="Python" name="Python">
                             <div v-html="python"></div>
                        </el-tab-pane>
                        <el-tab-pane label="Java" name="Java">
                             <div v-html="java"></div>
                        </el-tab-pane>
                        <el-tab-pane label="C#" name="cSharp">
                             <div v-html="cSharp"></div>
                        </el-tab-pane>
                    </el-tabs>
                </div>
        </div>
    </div>
</template>

<script>
const Marked = require('marked');
import patterns from '../common/index';

export default {
   data(){
       return {
          title:'',
          activeName:'Javascript',
          desc:'',
          uml:'',
          javascript:'',
          python:'',
          java:'',
          cSharp:''
       }
   },
   mounted(){
       this.setChapter();
   },
   methods:{
       handleClick(tab){
           console.log(tab);
       },
       setChapter(){
           this.title = this.$route.query.title;
           let alias = this.$route.query.alias;
           let selected=  patterns.filter((item)=>{
               if(item.name == alias){
                   return true;
               }else
               return false;
           });
           fetch(selected[0].desc).then((data)=>{
                this.desc = Marked(data);
           });
           
           
           this.uml = Marked(selected[0].uml);
           this.javascript = Marked(selected[0].code[0].value);
           this.python     = Marked(selected[0].code[0].value);
           this.java       = Marked(selected[0].code[0].value);
           this.cSharp     = Marked(selected[0].code[0].value);
       }
   }
}
</script>

<style>
   .selection-box{
       height: auto;
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
