<template>
  <section class="container border-gray-200 py-4">
    <ul class="border">
      <li
        v-for="(todo, index) in _todoList"
        :class="['border-gray-200 p-2', todo.style, { 'border-b': index !== _todoList.length - 1 }]"
        key="todo.name"
      >
        {{ todo.name }}:({{ todo.status }})
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { TodoList } from '@src/types/todo';
import { defineComponent, computed, PropType, ComputedRef } from 'vue';

export default defineComponent({
  props: {
    todoList: {
      type: Array as PropType<TodoList>,
    },
  },
  setup(props, context) {
    const _todoList: ComputedRef<TodoList> = computed(() =>
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

<style>
.status-doing {
  @apply bg-yellow-200 text-gray-600;
}
.status-done {
  @apply line-through text-gray-400;
}
</style>
