<template>
  <nav>
    <ul class="flex">
      <li v-for="route in routeList" key="route.path" class="px-4 text-white">
        <router-link tag="a" :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const routeList = [
      {
        name: 'Top',
        path: '/',
      },
      {
        name: 'Hoge',
        path: '/hoge',
      },
    ];
    return {
      routeList,
    };
  },
});
</script>
<style>
.title {
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
