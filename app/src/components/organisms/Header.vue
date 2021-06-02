<template>
  <section class="container mx-auto flex justify-between items-center">
    <Logo />
    <HeaderNav />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Logo from '@src/components/molecules/Logo.vue';
import HeaderNav from '@src/components/molecules/HeaderNav.vue';
export default defineComponent({
  components: {
    Logo,
    HeaderNav,
  },
  setup() {},
});
</script>
<style>
header {
  background-color: var(--c-primary-shade);
}
.title {
  color: var(--c-white);
}
</style>
