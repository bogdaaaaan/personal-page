import './Home.css';

import github from '../../images/icons/github.svg';
import instagram from '../../images/icons/instagram.svg';
import telegram from '../../images/icons/telegram.svg';

import links from '../../data/links.json';

const Home = () => {
    return (
        <div id='home' className='home wrapper'>
            <div className='home-info'>
                <div className='home-title'>
                    <p className='home-title__greetings'>Greetings!</p>
                </div>
                <div className='home-description'>
                    <p className='home-description__about'>
                        My name is Bogdan Glechkovsky and I'm a front-end
                        developer.
                    </p>
                </div>
                <div className='home-social-links'>
                    <div className='home-social-links__github'>
                        <a href={links.github} className='social-link'>
                            <img
                                className='social-link__image'
                                src={github}
                                alt="github"
                            />
                        </a>
                    </div>
                    <div className='home-social-links__instagram'>
                        <a href={links.instagram} className='social-link'>
                            <img
                                className='social-link__image'
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                    <div className='home-social-links__telegram'>
                        <a href={links.telegram} className='social-link'>
                            <img
                                className='social-link__image'
                                src={telegram}
                                alt="telegram"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
