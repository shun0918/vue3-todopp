<template>
  <Base>
    <FirstVIew />
    <TodoEditor @add="addTodo" />
    <TodoBarList :todoList="state.todoList" />
  </Base>
</template>
<script lang="ts">
import Base from '@src/components/templates/Base.vue';
import Header from '@src/components/organisms/Header.vue';
import TodoBarList from '@src/components/organisms/TodoBarList.vue';
import { defineComponent, reactive } from 'vue';
import { TodoItem, TodoList } from '@src/types/todo';
import FirstVIew from '@src/components/organisms/FirstVIew.vue';
import TodoEditor from '@src/components/organisms/TodoEditor.vue';

interface State {
  todoList: TodoList;
}

export default defineComponent({
  name: 'Index',
  components: {
    Header,
    Base,
    TodoBarList,
    FirstVIew,
    TodoEditor,
  },
  setup() {
    const state = reactive<State>({
      todoList: [
        { name: 'task1', status: 'todo' },
        { name: 'task2', status: 'doing' },
        { name: 'task3', status: 'done' },
      ],
    });

    const addTodo = (name: string) => {
      state.todoList = [
        ...state.todoList,
        {
          name: name,
          status: 'todo',
        },
      ];
    };

    return {
      state,
      addTodo,
    };
  },
});
</script>
<style></style>
