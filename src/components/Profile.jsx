import React from 'react';
import s from './Profile.module.css';

const Profile = () =>
{
    return <div className={s.content}>
    <img src='https://img.freepik.com/premium-photo/group-dogs-running-field_902639-15522.jpg'></img>
  <div>
    ava + description
  </div>
  <div>
    My posts
    <div>
      New post
    </div>
    <div className = {s.posts}>
      <div className={s.item}>
        Post 1
      </div>
      <div className={s.item}>
        Post 2
      </div>
    </div>
  </div>
  </div>
}

export default Profile;