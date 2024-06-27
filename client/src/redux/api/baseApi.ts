import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/",
  }),

  endpoints: (builder) => ({
    getHelpDesk: builder.query({
      query: () => ({
        url: "/help-desk",
        method: "GET",
      }),
      providesTags: ["helpDesk"],
    }),
    deleteHelpDesk: builder.mutation({
      query: (id) => ({
        url: `/help-desk/delete-help-desk/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["helpDesk"],
    }),
    getBlog: builder.query({
      query: () => ({
        url: "/blog",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/delete-blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
  tagTypes: ["helpDesk", "blogs"],
});
export const {
  useGetHelpDeskQuery,
  useDeleteHelpDeskMutation,
  useGetBlogQuery,
  useDeleteBlogMutation,
} = baseApi;
