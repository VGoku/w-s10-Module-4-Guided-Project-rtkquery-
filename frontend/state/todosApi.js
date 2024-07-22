import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const todosApi = createApi({
    reducerPath: "todosApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9009/api/" }),
    endpoints: build => ({
        getTodos: build.query({
            query: () => "todos"
        }),
        toggleTodo: build.mutation({
            query: ({ id, todo }) => ({
                url: `todos/${id}`,
                method: "PUT",
                body: todo
            }) //((12:08 vid time))
    }),
        createTodo: build.mutation({
        })
    })
})

export const {
    useGetTodosQuery, useToggleTodoMutation, useCreateTodoMutation,
} = todosApi