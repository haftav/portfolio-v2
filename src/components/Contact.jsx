import React from 'react';
import LinkedInIcon from './Contact/LinkedInIcon';

export default () => {
    return (
        <div className='contact'>
            <h2 className="contact__header">Get In Touch.</h2>
            <div className="contact__iconsContainer">
                <div className="contact__icon">
                    <LinkedInIcon />
                </div>
                <div className="contact__icon">icon2</div>
                <div className="contact__icon">icon3</div>
            </div>
        </div>
    )
}