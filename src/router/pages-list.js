/**定义菜单结构 */

import  index  from '@/pages/index/showIndex.vue';
import webFont from '@/pages/webFont/index.vue';
import designPatter from '@/pages/designPattern/index.vue';
import bigData from '@/pages/bigData/index.vue';
import microService from '@/pages/microService/index.vue';


const pages=[
   {
     name : "index",
     component: index,
     title: "首页"
   },
   {
        name : "webFont",
        component: webFont,
        title: "前端博文",
   },{
        name : "designPatter",
        component: designPatter,
        title: "设计模式"
   },
   {
        name:'bigData',
        component: bigData,
        title:'大数据'
   },{
       name:'microService',
       component:microService,
       title:'微服务架构'
   }
];

export default pages;