import './Home.css';

import links from '../../data/links.json';

const Home = () => {
    return (
        <section id='home' className='home wrapper'>
            <div className="home-avatar">
                <img className='home-avatar__image' src="/images/avatar.jpg" alt="avatar"/>
            </div>
            <div className='home-info'>

                <h2 className='home-title'>Greetings!</h2>
                <div className='home-description'>
                    <p className='home-description__about'>My name is Bogdan Glechkovsky and I'm a front-end developer.</p>
                </div>

                <ul className='home-social-links'>
                    <li>
                        <a href={links.github} className='social-link'> 
                            <img className='social-link__image' src='/images/icons/github.svg' alt="github"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.linkedin} className='social-link'>
                            <img className='social-link__image' src='/images/icons/linkedin.svg' alt="linkedin"/>
                        </a>
                    </li>
                    <li>
                        <a href={links.telegram} className='social-link'>
                            <img className='social-link__image' src='/images/icons/telegram.svg' alt="telegram"/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    );
};
export default Home;
