<template>
  <div class="header">
    <div class="fl logoImage">
      <div class="uml-icon2" />
      <!-- <svg-icon icon-class="logoHome" class="logoHome"></svg-icon> -->
    </div>
    <div class="fl menuBox" />
    <div class="fr headerRight">
      <div class="fl bdleft" title="" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    message: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.header {
  width: 100%;
  height: 80px;
  background-color: lightgray;
}
</style>
