import React from 'react';
import  './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>
{
    return <div>
    <div>
     <img src = 'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2019/02/19131712/NomNomNow_Pembroke_Welsh_Corgis.jpeg'/>
    </div>
    <div>
     ava + description
    </div>
    <MyPosts/>
  </div>
};

export default Profile;