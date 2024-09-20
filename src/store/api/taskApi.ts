import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task } from "../../model/task";

export const taskApi = createApi({
  reducerPath: "taskApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    getTask: builder.query<Task[], void>({
      query() {
        return {
          url: "/tasks",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useLazyGetTaskQuery } = taskApi;
export default taskApi;