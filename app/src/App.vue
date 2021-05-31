<template>
  <div>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Index from '@src/pages/Index.vue';

export default defineComponent({
  components: {
    Index,
  },
  setup() {},
});
</script>
