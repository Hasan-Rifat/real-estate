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

const propertiesSlice = createSlice({
  name: "properties",
  initialState,
  reducers: {},
});

export default propertiesSlice.reducer;
