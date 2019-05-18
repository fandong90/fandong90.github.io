<template>
    <div class="blog-title">
        <div class="blog-title-bg-1">
            <slot name="bgWall"></slot>
        </div>
        <div class="blog-title-bg-2">
            <div class="quotes">
                
            </div>
            <div class="split-line"></div>
            <slot name="titleWall"></slot>
        </div>
    </div>
</template>

<script>
export default {
   name: 'article-title-style-1',
   props:{

   },
   data(){
       return {
          
       }
   }
}
</script>

<style>
   .blog-title{
       width:100%;
       height: 300px;
       position: static;
   }
   .blog-title-bg-1{
       background-color: green;
       width: 100%;
       height: 250px;

   }
   .blog-title-bg-2 {
        background-color:#f1f1f1;
        margin-left: auto;
        margin-right: auto;
        margin-top: -150px;
        width: 400px;
        height: 200px;
        z-index: 20;
   }
  .quotes{
       min-height: 30px;
       width:100%;
   }
   .split-line{
    width:100%;
    border-top: 1px solid #fdfdfd;
    border-bottom: 0px;
    border-right: 0px;
    border-left: 0px;
   }
</style>
