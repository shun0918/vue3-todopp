export type TodoItem = {
  name: string;
  status: 'todo' | 'doing' | 'done';
};

export type TodoList = TodoItem[];
