<template>
  <Header />
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
.main {
  background-color: blanchedalmond;
}
</style>
