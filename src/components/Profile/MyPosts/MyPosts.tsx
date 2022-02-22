import React from "react";
import p from './MyPosts.module.css';
import Post, {PostType} from "./Post/Post";

type MyPostsType = {
    posts: Array<PostType>
    addPost: (postMessage: string) => void
}

const MyPosts = (props: MyPostsType) => {
    const newPostElement = React.createRef<HTMLTextAreaElement>();
    const addPost = () => {
        if (newPostElement.current) {
            const text = newPostElement.current.value
            props.addPost(text);
            newPostElement.current.value = "";
        }


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
                {props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} id={p.id}/>)}
            </div>
        </div>
    );
}

export default MyPosts;