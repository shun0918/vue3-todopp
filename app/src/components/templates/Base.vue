<template>
  <header class="flex items-center justify-center">
    <Header />
  </header>
  <main class="main">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@src/components/organisms/Header.vue';

export default defineComponent({
  components: {
    Header,
  },
  setup() {},
});
</script>

<style>
header {
  height: 50px;
}
.main {
  background-color: var(--c-bg-base);
  min-height: calc(100vh - 50px);
}
</style>
