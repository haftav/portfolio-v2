import React from 'react';

import LinkedInIcon from './Contact/LinkedInIcon';
import GithubIcon from './Contact/GithubIcon';
import EmailIcon from './Contact/EmailIcon';

export default () => {
    return (
        <div className='contact'>
            <h2 className="contact__header">Get In Touch.</h2>
            <div className="contact__iconsContainer">
                <a className="contact__icon" href="https://github.com/haftav">
                    <GithubIcon />
                </a>
                <a className="contact__icon" href="https://www.linkedin.com/in/tavhafner/">
                    <LinkedInIcon />
                </a>
                <a className="contact__icon" href="mailto:tavhafnerdev@gmail.com">
                    <EmailIcon />
                </a>
            </div>
        </div>
    )
}