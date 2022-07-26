import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ybuzrre',
                'template_jjqg99s',
                form.current,
                'Kh4XI8mEd_1abJzjj'
            )
            .then(
                result => {
                    console.log(result.text);
                },
                error => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            Or write me in <a href="https://t.me/bogdaaaaan">telegram</a>
        </div>
    );
};
export default Contact;
