import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import links from '../../data/links.json';

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm('service_ybuzrre','template_jjqg99s',form.current,'Kh4XI8mEd_1abJzjj')
            .then(result => {
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div id='contact' className='contact wrapper'>
            <div className="contact-header">
                <p className='contact-header__title'>Contact me:</p>
                <span className='contact-header__description'>Send message to my email</span>
            </div>
           
            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                <input className='contact-form__input' type="text" name="user_name" placeholder='Your Name'/>
                <input className='contact-form__input' type="email" name="user_email" placeholder='Your Email' />
                <textarea className='contact-form__input textarea' name="message" placeholder='Message'/>

                <input className='contact-form__button btn' type="submit" value="Send" />
            </form>
            <span className='contact-footer'>Or write me in <a href={links.telegram}>telegram</a></span>
            
        </div>
    );
};
export default Contact;
