import React from 'react';
import s from './MyPosts.css';
import Post from './Post';

const MyPosts = () =>
{
    return <div>
    <div>
     <textarea></textarea>
     <button>Add post</button>
     <button>Remove</button>
    </div>
    <Post/>
    <Post/>
    <Post/>
    </div>
};

export default MyPosts;