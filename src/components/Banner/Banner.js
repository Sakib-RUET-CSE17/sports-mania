import React from 'react';
import './Banner.css'

const Banner = (props) => {
    return (
        <div>
            <div className="banner-image">
                <div className="banner-text">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

export default Banner;