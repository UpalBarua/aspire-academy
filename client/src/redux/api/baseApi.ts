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
      providesTags: ["blog"],
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/blog/delete-blog/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["blog"],
    }),
    getEvent: builder.query({
      query: () => ({
        url: "/latest-event",
        method: "GET",
      }),
      providesTags: ["event"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/latest-event/delete-latest-event/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["event"],
    }),
    getTestimonial: builder.query({
      query: () => ({
        url: "/testimonial",
        method: "GET",
      }),
      providesTags: ["testimonial"],
    }),
    deleteTestimonial: builder.mutation({
      query: (id) => ({
        url: `/testimonial/delete-testimonial/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonial"],
    }),
    createTestimonial: builder.mutation({
      query: (newTestimonial) => ({
        url: "/testimonial/create-testimonial",
        method: "POST",
        body: newTestimonial,
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
  tagTypes: ["helpDesk", "blog", "event", "testimonial"],
});
export const {
  useGetHelpDeskQuery,
  useDeleteHelpDeskMutation,
  useGetBlogQuery,
  useDeleteBlogMutation,
  useGetEventQuery,
  useDeleteEventMutation,
  useGetTestimonialQuery,
  useDeleteTestimonialMutation,
  useCreateTestimonialMutation,
} = baseApi;
