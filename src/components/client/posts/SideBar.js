import React from 'react';
import './Post.css'
const SideBar = ({ item }) => {
    const { image, title, author, date } = item
    return (
        <div className="SidebarPosts">
            <div>
                <img className="sideimage" src={image} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
                <p>{author}</p>
                <p>{date}</p>
            </div>                             
                
        </div>
    );
};

export default SideBar;