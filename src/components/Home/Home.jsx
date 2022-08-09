import './Home.css';

import github from '../../images/icons/github.svg';
import instagram from '../../images/icons/instagram.svg';
import telegram from '../../images/icons/telegram.svg';

import links from '../../data/links.json';

const Home = () => {
    return (
        <section id='home' className='home wrapper'>
            <div className='home-info'>

                <h2 className='home-title'>Greetings!</h2>
                <div className='home-description'>
                    <p className='home-description__about'>My name is Bogdan Glechkovsky and I'm a front-end developer.</p>
                </div>

                <ul className='home-social-links'>
                    <li className='home-social-links__github'>
                        <a href={links.github} className='social-link'> 
                            <img className='social-link__image' src={github} alt="github"/>
                        </a>
                    </li>
                    <li className='home-social-links__instagram'>
                        <a href={links.instagram} className='social-link'>
                            <img className='social-link__image' src={instagram} alt="instagram"/>
                        </a>
                    </li>
                    <li className='home-social-links__telegram'>
                        <a href={links.telegram} className='social-link'>
                            <img className='social-link__image' src={telegram} alt="telegram"/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Home;
