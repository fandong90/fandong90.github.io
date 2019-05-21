import Vue from 'vue';
import VueRouter from 'vue-router';
import pages from './pages-list';
import pagesInner from './pages-inner-list';
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

//设定默认首页


export default new VueRouter({
    routes
});
