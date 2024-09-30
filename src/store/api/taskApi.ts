import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../../model/task";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  tagTypes: ["Task"],
  endpoints: (builder) => ({
    getTasks: builder.query<Task[], void>({
      query() {
        return {
          url: "/tasks",
          method: "GET",
        };
      },
      providesTags: ["Task"],
    }),

    createTask: builder.mutation<Task, Task>({
      query(task) {
        return {
          url: "/tasks",
          method: "POST",
          body: task,
        };
      },
      invalidatesTags: ["Task"],
    }),

    getTask: builder.query<Task, number>({
      query(id) {
        return {
          url: `/tasks/${id}`,
          method: "GET",
        };
      },
    }),

    updateTask: builder.mutation<Task, any>({
      query({id,data}) {
        return {
          url: "/tasks/"+id,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["Task"],
    }),

    deleteTask: builder.mutation<any, number>({
      query(id) {
        return {
          url: "/tasks/" + id,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Task"],
    }),
  }),
});

// Pastikan untuk mengekspor query yang benar
export const {
  useLazyGetTasksQuery,
  useCreateTaskMutation,
  useLazyGetTaskQuery,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = taskApi;

export default taskApi;
