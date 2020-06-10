import axios from "axios";

export const fetchData = async (setPosts) => {
  try {
    const getResponse = await axios.get("http://localhost:4000/merge");
    setPosts(getResponse.data);
  } catch (error) {
    console.error(error);
  }
};

export default {
  fetchData,
};
