import { faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css'

const Footer = (props) => {
    const {strFacebook,strTwitter,strWebsite,strYoutube}=props.league
    return (
        <div className="text-center">
            <a rel="noreferrer" href={`https://${strFacebook}`} target="_blank"><FontAwesomeIcon className="m-3" icon={faFacebook} size={'2x'} /></a>
            <a rel="noreferrer" href={`https://${strTwitter}`} target="_blank"><FontAwesomeIcon className="m-3" icon={faTwitter} size={'2x'} /></a>
            <a rel="noreferrer" href={`https://${strYoutube}`} target="_blank"><FontAwesomeIcon className="m-3" icon={faYoutube} size={'2x'} /></a>
            <a rel="noreferrer" href={`https://${strWebsite}`} target="_blank"><FontAwesomeIcon className="m-3" icon={faGlobe} size={'2x'} /></a>
        </div>
    );
};

export default Footer;