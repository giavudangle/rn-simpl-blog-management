import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {
  const blogPosts = [
    {title: 'Blogpost #1'},
    {title: 'Blogpost #2'},
    {title: 'Blogpost #3'}
  ];

  return (
    <BlogContext.Provider value={blogPosts}>
      {children}
    </BlogContext.Provider>
  ); 
};

export default BlogContext;