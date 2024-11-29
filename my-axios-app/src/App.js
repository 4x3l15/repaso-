import React, { useEffect, useState } from 'react';
import api from './axiosConfig';
import PostForm from './components/PostForm';
import PostList from './components/PostList';

const App = () => {
  const [posts, setPosts] = useState([]);

  // Cargar los posts al inicio
  useEffect(() => {
    api.get('/posts')
      .then((response) => setPosts(response.data))
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  // Crear un nuevo post
  const createPost = (newPost) => {
    api.post('/posts', newPost)
      .then((response) => setPosts([...posts, response.data]))
      .catch((error) => console.error('Error creating post:', error));
  };

  // Actualizar un post
  const updatePost = (id) => {
    const updatedPost = { title: "Updated Post", content: "Updated content" };
    api.put(`/posts/${id}`, updatedPost)
      .then((response) => {
        setPosts(posts.map((post) => (post.id === id ? response.data : post)));
      })
      .catch((error) => console.error('Error updating post:', error));
  };

  // Eliminar un post
  const deletePost = (id) => {
    api.delete(`/posts/${id}`)
      .then(() => setPosts(posts.filter((post) => post.id !== id)))
      .catch((error) => console.error('Error deleting post:', error));
  };

  return (
    <div>
      <h1>Post Manager</h1>
      <PostForm onSubmit={createPost} />
      <PostList posts={posts} onUpdate={updatePost} onDelete={deletePost} />
    </div>
  );
};

export default App;
