/**定义菜单结构 */

import webFont from '@/pages/webFont/index.vue';
import designPatter from '@/pages/designPattern/index.vue';
import bigData from '@/pages/bigData/index.vue';
import microService from '@/pages/microService/index.vue';
import demo from '@/component/article/index.vue';

const pages=[
   {
        name : "webFont",
        component: webFont,
        title: "前端博文"
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
   },{
       name: 'demo',
       component: demo,
       title:'文章标题'
   }
];

export default pages;