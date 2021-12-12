import React from "react";
import p from './Post.module.css';

type PostType = {
    message: string
    likeCount: number
}
const Post = (props: PostType) => {
    return (
                <div className={p.item}>
                    <img src= 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg'/>
                    {props.message}
                    <div>
                    <span>{props.likeCount}</span>
                    </div>
                </div>
    );
}

export default Post;