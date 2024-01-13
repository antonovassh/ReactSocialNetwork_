import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return (
    <div className={s.item}>
      <img src='https://images.unsplash.com/photo-1558788353-f76d92427f16?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwcG9ydHJhaXR8ZW58MHx8MHx8fDA%3D' />
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  )
};

export default Post;