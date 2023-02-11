import { apiSlice } from "../api/apiSlice";

const propertyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProperties: builder.query({
      query: () => "/property",
    }),
  }),
});

export const { useGetPropertiesQuery } = propertyApi;
