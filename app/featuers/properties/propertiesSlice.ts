import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProperties } from "./propertiesApi";

interface initialStateS {
  properties: never[];
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

const initialState: initialStateS = {
  properties: [],
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchProperties = createAsyncThunk(
  "properties/fetchProperties",
  async () => {
    const properties = await getProperties();
    return properties;
  }
);

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.isLoading = false;
        state.properties = action.payload;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        (state.isLoading = false),
          (state.properties = []),
          (state.isError = true),
          (state.error = action.error?.message);
      });
  },
});

export default propertiesSlice.reducer;
