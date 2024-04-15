import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);
//export const createPost = (newPost) => { axios.post(url, newPost) };

export const createPost = (newPost) => {
  return axios.post(url, newPost)
    .then(response => {
      // Handle success
      return response.data; // Return the data if needed
    })
    .catch(error => {
      // Handle error
      console.error('Error creating post:', error);
      throw error; // Rethrow the error to propagate it further if needed
    });
};