import {z} from 'zod';

export type NativeStackParamList = {
  TodoList: undefined;
  TodoView: {id: number};
  TodoForm: undefined;
};

export const TodoSchema = z.object({
  userId: z.coerce.number().min(1).max(10),
  title: z.coerce.string().min(10),
  completed: z.boolean(),
});

export type AddTodo = z.infer<typeof TodoSchema>;

export interface Todo extends AddTodo {
  id: number;
}
