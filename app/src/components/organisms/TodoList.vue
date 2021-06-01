<template>
  <h2>this is TodoList</h2>
  <ul>
    <li class="stateClass" v-for="todo in _todoList" key="todo.name">{{ todo.name }}:({{ todo.status }})</li>
  </ul>
</template>

<script lang="ts">
import { TodoList } from '@src/types/todo';
import { defineComponent, computed, PropType } from 'vue';

export default defineComponent({
  props: {
    todoList: {
      type: Array as PropType<TodoList>,
    },
  },
  setup(props, context) {
    const _todoList = computed(() =>
      props.todoList.map((item) => {
        return {
          style: 'status-' + item.status,
          ...item,
        };
      })
    );
    return {
      _todoList,
    };
  },
});
</script>

<style></style>
