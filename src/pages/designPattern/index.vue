<template>
    <div> 
         <el-collapse v-model="activeName" accordion>
             <el-collapse-item v-for="item in options"  :name="item.id" :key="item.id">
                 <template  slot="title">
                     <div>{{item.title}}</div>
                 </template>
                 <div class="design-title" @click="handleClick(item.id,item.title)"> {{item.href}}</div>
             </el-collapse-item>
         </el-collapse>   
    </div>
</template>

<script>
export default {
    name:'designPattern_style',
    data(){
        return {
            activeName:1,
            options:[
                { id:1,title:'工厂模式',desc:["工厂模式","",""],href:'前去查看'},
                { id:2,title:'抽象工厂模式',desc:[],href:'前去查看'},
                { id:3,title:'单例模式',desc:[],href:'前去查看'},
                { id:4,title:'建造者模式',desc:[],href:'前去查看'},
                { id:5,title:'原型模式',desc:[],href:'前去查看'},
                { id:6,title:'适配器模式',desc:[],href:'前去查看'},
                { id:7,title:'桥接模式',desc:[],href:'前去查看'},
                { id:8,title:'过滤器模式',desc:[],href:'前去查看'},
                { id:9,title:'组合模式',desc:[],href:'前去查看'},
                { id:10,title:'装饰器模式',desc:[],href:'前去查看'},
                { id:11,title:'外观模式',desc:[],href:'前去查看'},
                { id:12,title:'享元模式',desc:[],href:'前去查看'},
                { id:13,title:'代理模式',desc:[],href:'前去查看'},
                { id:14,title:'责任链模式',desc:[],href:'前去查看'},
                { id:15,title:'命令模式',desc:[],href:'前去查看'},
                { id:16,title:'解释器模式',desc:[],href:'前去查看'},
                { id:17,title:'迭代器模式',desc:[],href:'前去查看'},
                { id:18,title:'中介者模式',desc:[],href:'前去查看'},
                { id:19,title:'备忘录模式',desc:[],href:'前去查看'},
                { id:20,title:'观察者模式',desc:[],href:'前去查看'},
                { id:21,title:'状态模式',desc:[],href:'前去查看'},
                { id:22,title:'空对象模式',desc:[],href:'前去查看'},
                { id:23,title:'工厂模式',desc:[],href:'前去查看'}
            ]
        }
    },
    methods:{
        handleClick(id,title){
            console.log(id +' - '+ title);
            this.$router.push({ path: 'designInner', query: {id: id, title: title}});
            //this.$router.push({ path:'/designInner' , query:{ id: id, title: title}});
        }
    }
}
</script>

<style>
    design-title{
        text-align: left;
        padding-left: 20%;
    }
    .design-title:hover{
        text-decoration: underline;
        font-size: 18px;
        color:#409EFF;
        cursor: pointer;
    }
</style>
