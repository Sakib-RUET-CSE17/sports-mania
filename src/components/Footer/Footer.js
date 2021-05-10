import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = (props) => {
    // const {strFacebook,strTwitter,strWebsite,strYoutube}=props.league
    const {strFacebook}=props.league
    console.log(strFacebook)
    return (
        <div className="text-center">
            <a href={strFacebook}><FontAwesomeIcon className="m-3" icon={faFacebook} size={'2x'} /></a>
            {/* <a href={""}><FontAwesomeIcon className="m-3" icon={faFacebook} size={'2x'} /></a>
            <a href={""}><FontAwesomeIcon className="m-3" icon={faFacebook} size={'2x'} /></a> */}
        </div>
    );
};

export default Footer;