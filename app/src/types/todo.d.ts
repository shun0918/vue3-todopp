export type TodoItem = {
  name: string;
  status: 'todo' | 'doing' | 'done';
  style?: string;
};

export type TodoList = TodoItem[];
