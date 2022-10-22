import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const projectRenderApi = createApi({
  reducerPath: 'projectRenderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:8000/' }),
  endpoints: (builder) => ({
    saveProject: builder.mutation({
      query: (candidate) => {
        return {
          url: 'api/',
          method: 'POST',
          body: candidate
        }
      }
    }),
    getProject: builder.query({
      query: () => {
        return {
          url: `api/`,
          method: 'GET'
        }
      }
    }),
    getProjectById: builder.query({
      query: (id) => {
        return {
          url: `api/${id}`,
          method: 'GET'
        }
      }
    }),
    getProjectByCategory: builder.query({
      query: (cat) => {
        return {
          url: `api/?category=${cat}`,
          method: 'GET'
        }
      }
    })
  }),
})

export const { useSaveProjectMutation, useGetProjectQuery,
   useGetProjectByCategoryQuery, useGetProjectByIdQuery } = projectRenderApi