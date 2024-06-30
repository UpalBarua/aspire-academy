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
    createBlog: builder.mutation({
      query: (newBlog) => ({
        url: "/blog/create-blog",
        method: "POST",
        body: newBlog,
      }),
      invalidatesTags: ["blog"],
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
    createEvent: builder.mutation({
      query: (newManagement) => ({
        url: "/latest-event/create-latest-event",
        method: "POST",
        body: newManagement,
      }),
      invalidatesTags: ["management"],
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
    createAlumni: builder.mutation({
      query: (newAlumni) => ({
        url: "/alumni/create-alumni",
        method: "POST",
        body: newAlumni,
      }),
      invalidatesTags: ["alumni"],
    }),
    getAlumni: builder.query({
      query: () => ({
        url: "/alumni",
        method: "GET",
      }),
      providesTags: ["alumni"],
    }),
    deleteAlumni: builder.mutation({
      query: (id) => ({
        url: `/alumni/delete-alumni/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["alumni"],
    }),
    createManagement: builder.mutation({
      query: (newManagement) => ({
        url: "/management/create-management",
        method: "POST",
        body: newManagement,
      }),
      invalidatesTags: ["management"],
    }),
    getManagement: builder.query({
      query: () => ({
        url: "/management",
        method: "GET",
      }),
      providesTags: ["management"],
    }),
    deleteManagement: builder.mutation({
      query: (id) => ({
        url: `/management/delete-management/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["management"],
    }),
  }),
  tagTypes: [
    "helpDesk",
    "blog",
    "event",
    "testimonial",
    "alumni",
    "management",
  ],
});
export const {
  useGetHelpDeskQuery,
  useDeleteHelpDeskMutation,
  useCreateBlogMutation,
  useGetBlogQuery,
  useDeleteBlogMutation,
  useCreateEventMutation,
  useGetEventQuery,
  useDeleteEventMutation,
  useGetTestimonialQuery,
  useDeleteTestimonialMutation,
  useCreateTestimonialMutation,
  useCreateAlumniMutation,
  useGetAlumniQuery,
  useDeleteAlumniMutation,
  useGetManagementQuery,
  useCreateManagementMutation,
  useDeleteManagementMutation,
} = baseApi;
