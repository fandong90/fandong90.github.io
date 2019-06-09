import Vue from 'vue';
import VueRouter from 'vue-router';
import pages from './pages-list';
import pagesInner from './pages-inner-list';
import webpagesList from '../pages/webFont/web-page-list';
import mircopagesList from '../pages/microService/micro-page-list';
Vue.use(VueRouter);

const routes=[];
pages.forEach(item => {
     routes.push({
         path:'/'+item.name,
         component: item.component
     });
});

/**表示内部页，外部不展示url连接 */
pagesInner.forEach(item => {
    routes.push({
        path:'/'+item.name,
        component: item.component
    });
});

/***webFont 前端博文*/

webpagesList.forEach(item=>{
        routes.push({
            path:'/'+item.name,
            component: item.component
        });
});

/****micro */

mircopagesList.forEach(item=>{
    routes.push({
        path:'/'+item.name,
        component:item.component
    })
})

//设定默认首页


export default new VueRouter({
    routes
});
