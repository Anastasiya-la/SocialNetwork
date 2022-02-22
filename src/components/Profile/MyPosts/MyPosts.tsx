import React from "react";
import p from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
}

const MyPosts = (props: MyPostsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        let text = newPostElement.current?.value
        alert(text);
    }
    return (
        <div className={p.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div><textarea ref={newPostElement}></textarea></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={p.posts}>
                {props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id = {p.id}/>)}
            </div>
        </div>
    );
}

export default MyPosts;