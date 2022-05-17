<template>
  <div>
    <p>login</p>
    <button @click="toHome">toHome</button>
  </div>
</template>
<script lang="ts">
import { useRouter } from 'vue-router';
export default {
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.push({
        name: 'myLongin',
      });
    };
    return {
      toHome,
    };
  },
};
</script>
<style scoped></style>
