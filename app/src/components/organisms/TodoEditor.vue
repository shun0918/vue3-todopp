<template>
  <section class="container py-2">
    <div>
      <InputTextButton :buttonName="buttonName" @add="add" />
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
  emits: ['add'],
  setup(props, context) {
    const add = (value) => {
      context.emit('add', value);
    };
    return {
      buttonName: 'Add todo',
      add,
    };
  },
});
</script>
