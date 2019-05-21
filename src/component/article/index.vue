<template>
    <div>
        <blog-title>
            <template v-slot:bgWall>
                heheheheeheheheh
            </template>
            <template v-slot:titleWall>
                坏蛋是如何炼成的
            </template>
        </blog-title>
        <div>
            
        </div>
   </div>
</template>

<script>

import blogTitle from './title/title.vue';
import blogBody  from './body/body.vue';
export default {
    components:{
        blogTitle,
        blogBody
    }
}
</script>

<style>

</style>
