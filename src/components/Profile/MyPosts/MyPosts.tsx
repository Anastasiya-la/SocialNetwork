import React from "react";
import p from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea></textarea></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                <Post message={'Hi, how are you?'} likeCount={15}/>
                <Post message={"It's my first post"} likeCount={20}/>
            </div>
        </div>
    );
}

export default MyPosts;