import React from 'react';
import './Post.css'
import data from '../../../database/postdata.json'
import PostCard from './PostCard';
import SideBar from './SideBar';
import { Row, Col } from 'react-bootstrap';

const Posts = () => {
    return (
        <div>
            <Row>
                <Col lg={9}>
                    <div className="allPosts">
                        {
                            data.map(item => <PostCard item={item} />)
                        }
                    </div>
                </Col>
                <Col lg={3}>
                    <div className="sidebar">
                        <h3>Recent Posts</h3>
                        <Col lg={3}>
                            <div className="sidePosts">
                                {
                                    data.map(item => <SideBar item={item} />)
                                }
                            </div>
                         
                        </Col>
                    </div>
                </Col>
            </Row>
            
        </div>
    );
};

export default Posts;