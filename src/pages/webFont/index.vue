<template>
  <div style="margin:10px 20%;">
    <el-timeline>
      <el-timeline-item
        v-for="item in data"
        :timestamp="item.timestamp"
        reverse="false"
        :key="item.name"
        placement="top"
      >
        <el-card>
          <h4 @click="handleClick(item.name,item.title)">{{item.title}}</h4>
          <p>new bird update {{item.timestamp}}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import pages from "./web-page-list";
export default {
  components: {},
  data() {
    return {
      data: pages
    };
  },
  created() {},
  mounted() {},
  methods: {
    handleClick(name,title) {
      let root = "/webFont/";
      this.$router.push(name);
    }
  }
};
</script>

<style>
.el-timeline-item__timestamp.is-top {
    text-align: left;
}
h4:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
