import React from 'react';

import LinkedInIcon from './Contact/LinkedInIcon';
import GithubIcon from './Contact/GithubIcon';
import EmailIcon from './Contact/EmailIcon';

export default () => {
    return (
        <div className='contact'>
            <h2 className="contact__header">Get In Touch.</h2>
            <div className="contact__iconsContainer">
                <div className="contact__icon">
                    <LinkedInIcon />
                </div>
                <div className="contact__icon">
                    <GithubIcon />
                </div>
                <div className="contact__icon">
                    <EmailIcon />
                </div>
            </div>
        </div>
    )
}