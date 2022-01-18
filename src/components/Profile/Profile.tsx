import React from "react";
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (<div>
        <div>

            <img
                src='https://images.ctfassets.net/hrltx12pl8hq/euxCffMOPuxAnPLcN3nzW/eb14f1deaa1e6edce8981124825aefb9/ULOHP.png?fit=fill&w=800&h=400'/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>);
}

export default Profile;