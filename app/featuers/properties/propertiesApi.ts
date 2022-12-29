import axios from "../../../utilities/axios";

// async thunk functionality
export const getProperties = async () => {
  const response = await axios.get("/todo");

  return response.data;
};
