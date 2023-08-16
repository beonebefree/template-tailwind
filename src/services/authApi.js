import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"

const baseUrl = 'https://b-form-production.up.railway.app/'
// const baseUrl = "http://localhost:3001/"

export const authApi = createApi({
    reducerPath: 'authAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl,
    }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: 'login',
                method: 'POST',
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url:'logout' ,
                method:"POST",
            }),
        }),
        register: builder.mutation({
            query:(userData)=>({
                url: 'register',
                method : 'POST',
                body: userData
            })
        })
    })
})

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } = authApi