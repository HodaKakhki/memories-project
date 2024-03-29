import * as api from "../api";

 const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
};

export default getPosts;