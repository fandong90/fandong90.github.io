<template>
    <div class="blogBody">
       <slot></slot>
    </div>
</template>

<script>
export default {
    name:'blog-body'
}
</script>

<style>
 .blogBody{
     border:1px solid red;
     width:100%;
     height: auto;
 }
</style>
