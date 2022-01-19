import React from "react";
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://images.ctfassets.net/hrltx12pl8hq/euxCffMOPuxAnPLcN3nzW/eb14f1deaa1e6edce8981124825aefb9/ULOHP.png?fit=fill&w=800&h=400'/>
            </div>
            <div className = {s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}

export default ProfileInfo;