<template>
    <div>
        <blog-title>
            <template v-slot:bgWall>
               
            </template>
            <template v-slot:titleWall>
                
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
