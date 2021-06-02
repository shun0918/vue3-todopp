<template>
  <section class="container py-2">
    <div>
      <InputTextButton :buttonName="buttonName" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import InputTextButton from '../molecules/InputTextButton.vue';

export default defineComponent({
  name: 'TodoEditor',
  components: {
    InputTextButton,
  },
  setup() {
    return {
      buttonName: 'Add todo',
    };
  },
});
</script>
