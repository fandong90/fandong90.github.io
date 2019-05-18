import Vue from 'vue';
import VueRouter from 'vue-router';
import pages from './pages-list';

Vue.use(VueRouter);

const routes=[];
pages.forEach(item => {
     routes.push({
         path:'/'+item.name,
         component: item.component
     });
});


//设定默认首页


export default new VueRouter({
    routes
});
