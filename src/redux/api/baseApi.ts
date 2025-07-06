import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["book"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-backend-node.vercel.app/api",
  }),

  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),

    addNewBook: builder.mutation({
      query: (bookBody) => ({
        url: "/books",
        method: "POST",
        body: bookBody,
      }),
    }),

    deleteABook: builder.mutation({
      query: (bookId) => ({
        url: `/books/${bookId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),

    updateBookById: builder.mutation({
      query: ({ bookId, bookInfo }) => ({
        url: `/books/${bookId}`,
        method: "PATCH",
        body: bookInfo,
      }),
      invalidatesTags: ["book"],
    }),

    getBorrowSummary: builder.query({
      query: () => ({
        url: "/borrow",
        method: "GET",
      }),
    }),

    borrowABook: builder.mutation({
      query: (body) => ({
        url: "/borrow",
        method: "POST",
        body: body
      })
    })
  }),
});

export const {
  useAddNewBookMutation,
  useGetAllBooksQuery,
  useDeleteABookMutation,
  useUpdateBookByIdMutation,
  useGetBorrowSummaryQuery,
  useBorrowABookMutation
} = baseApi;
