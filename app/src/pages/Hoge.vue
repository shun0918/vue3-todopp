<template>
  <Base>
    <h2>This is a Hoge page.</h2>
  </Base>
</template>
<script lang="ts">
import Base from '@src/components/templates/Base.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Hoge',
  components: {
    Base,
  },
  setup() {},
});
</script>
<style></style>
