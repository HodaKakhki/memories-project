import axios from 'axios';

const url = 'http://localhost:5000/posts';

// export const fetchPosts = () => axios.get(url);
export const fetchPosts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: [{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }] });
    }, 1000); // Simulate a delay of 1 second
  });
};

export const createPost = (newPost) => {
  return axios.post(url, newPost)
    .then(response => {
      return response.data; 
    })
    .catch(error => {
      console.error('Error creating post:', error);
      throw error; 
    });
};