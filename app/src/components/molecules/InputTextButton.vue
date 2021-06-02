<template>
  <input type="text" class="p-2 rounded" v-model="state.value" />
  <button @click="clicked()" class="ml-2 border border-gray-400 rounded p-2">{{ buttonName }}</button>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface State {
  value: string;
}
export default defineComponent({
  props: {
    buttonName: {
      type: String,
      default: 'Add',
    },
  },
  setup(props, context) {
    const state = reactive<State>({
      value: '',
    });
    const clicked = () => {
      console.log(state.value);
    };
    return {
      buttonName: props.buttonName,
      state,
      clicked,
    };
  },
});
</script>
