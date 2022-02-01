import React from "react";
import p from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {
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
                {props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id = {p.id}/>)}
            </div>
        </div>
    );
}

export default MyPosts;