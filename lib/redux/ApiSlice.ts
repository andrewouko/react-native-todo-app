import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {AddTodo, Todo} from '../../types';

export const TodoAPI = createApi({
  reducerPath: 'TodoAPI',
  baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),

  endpoints: builder => ({
    getTodos: builder.query<Todo[] | Todo, number | undefined>({
      query: (id?: number) => {
        let url = 'todos';
        if (id) {
          url = `${url}/${id}`;
        }
        return {
          url,
        };
      },
    }),
    postTodo: builder.mutation({
      query: (request_body: AddTodo) => {
        return {
          url: '/todos',
          method: 'POST',
          body: request_body,
        };
      },
    }),
  }),
});

export const {useGetTodosQuery, usePostTodoMutation} = TodoAPI;
