<template>
  <nav>
    <ul>
      <li><router-link tag="a" to="/">Top</router-link></li>
      <li><router-link tag="a" to="/hoge">Hoge</router-link></li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {},
});
</script>
<style>
.title {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
