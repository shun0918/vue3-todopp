<template>
  <input type="text" class="p-2 rounded" v-model="state.inputValue" test-data="inputText" />
  <button @click="clicked" class="ml-2 border border-gray-400 rounded p-2" test-data="submitButton">
    {{ buttonName }}
  </button>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';
interface State {
  inputValue: string;
}
export default defineComponent({
  props: {
    buttonName: {
      type: String,
      default: 'Add',
    },
  },
  emits: ['add'],
  setup(props, context) {
    const state = reactive<State>({
      inputValue: '',
    });
    const clicked = () => {
      console.log(state.inputValue);
      context.emit('add', state.inputValue);
      state.inputValue = '';
    };
    return {
      buttonName: props.buttonName,
      state,
      clicked,
    };
  },
});
</script>
