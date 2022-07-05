import React from 'react';

const PostCard = ({ item }) => {
    const { image, title, author, date } = item
    return (
        <div className="postCardContainer">
            <img className="postImage" src={image} alt="" />
            <h4>{title} <span>Read More</span></h4>
            <div className="author">
                <img src={require('../../../assets/avatar.png')} alt="" />
                <div className="authorDes">
                    <p>{author}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;