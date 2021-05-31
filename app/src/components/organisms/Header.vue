<template>
  <header>
    <Logo />
    <HeaderNav />
  </header>
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
  background: tomato;
}
.title {
  color: darkgreen;
}
</style>
