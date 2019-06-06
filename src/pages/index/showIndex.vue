<template>
  <div>
    <div id="jsmind_container" style="height:800px"></div>
  </div>
</template>

<script>
const jsMind = require("jsmind");
import  data from './mindData';
export default {
  data(){
      return {
          height:800
      }
  },
  created(){
    
  },
  mounted() {
      this.$nextTick(()=>{
          this.init();
      });
  },
  methods: {
    init() {
     
      var options = {
         container: "jsmind_container",
         editable: false,
         theme: "orange"
      };

      var jm = new jsMind(options);
      // 让 jm 显示这个 mind 即可
      jm.show(data);

    }
  }
};
</script>

<style>
  jmnodes{
      left:0px;
  }
  canvas{
      left:0px;
  }
</style>
