<template>
  <Base>
    <FirstVIew />
    <TodoEditor />
    <TodoList :todoList="todoList" />
  </Base>
</template>
<script lang="ts">
import Base from '@src/components/templates/Base.vue';
import Header from '@src/components/organisms/Header.vue';
import TodoList from '@src/components/organisms/TodoList.vue';
import { defineComponent } from 'vue';
import { TodoItem } from '@src/types/todo';
import FirstVIew from '@src/components/organisms/FirstVIew.vue';
import TodoEditor from '@src/components/organisms/TodoEditor.vue';

export default defineComponent({
  name: 'Index',
  components: {
    Header,
    Base,
    TodoList,
    FirstVIew,
    TodoEditor,
  },
  setup() {
    const todoList: TodoItem[] = [
      { name: 'task1', status: 'todo' },
      { name: 'task2', status: 'doing' },
      { name: 'task3', status: 'done' },
    ];

    return { todoList };
  },
});
</script>
<style></style>
