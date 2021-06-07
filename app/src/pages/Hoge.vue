<template>
  <Base>
    <h2>This is a Hoge page.</h2>
    <FormLogin />
  </Base>
</template>
<script lang="ts">
import FormLogin from '@src/components/organisms/forms/FormLogin.vue';
import Base from '@src/components/templates/Base.vue';

import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Hoge',
  components: {
    Base,
    FormLogin,
  },
  setup() {},
});
</script>
<style></style>
