import './About.css';
import avatar from '../../images/avatar.jpg';

const About = () => {
    return (
        <div className="about-wrapper">
            <div className="about-header">
                <p className="about-header__title">
                    About me
                </p>
            </div>
            <div className="about-body">
                <div className="about-blocks">
                    <p className="about-block">
                        Hello! My name is Bogdan Glechkovsky and I love working with the web. I have been studying this field for more than <b>three years</b> and have experience in developing various interesting projects - from simple websites and games to complex online platforms and programs.
                    </p>

                    <p className="about-block">
                        I am always <b>ready to try a new approach or technology</b> in web development. It is not difficult for me to quickly learn new technology from scratch and continue to develop my knowledge in it.
                    </p>

                    <p className="about-block">
                        For me, it was important to <b>have fun</b> when it came to web development. If the development of the project is boring and uninteresting, I will not be able to <b>give it my best</b>.
                    </p>

                    <p className="about-block">
                        I try to use not only my own knowledge, but also <b>look for other approaches to solving problems</b>. While studying web development, I learned how to prepare several options for solving problems using different technologies in advance.
                    </p>
                </div>
                <div className="about-photo">
                    <img className='about-photo__image' src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};
export default About;
