import h from './Hero.module.css';

import avatar from '../../../images/avatar.png';
import github from '../../../images/icons/github.svg';
import instagram from '../../../images/icons/instagram.svg';
import telegram from '../../../images/icons/telegram.svg';

const Hero = () => {
    return (
        <div className={h['hero-content']}>
            <div className={h['hero-avatar']}>
                <img
                    className={h['hero-avatar__image']}
                    src={avatar}
                    alt="avatar"
                />
            </div>

            <div className={h['hero-info']}>
                <div className={h['hero-title']}>
                    <p className={h['hero-title__greetings']}>Greetings!</p>
                </div>
                <div className={h['hero-description']}>
                    <p className={h['hero-description__about']}>
                        My name is Bogdan Glechkovsky and I'm a front-end
                        developer.
                    </p>
                </div>
                <div className={h['hero-social-links']}>
                    <div className={h['hero-social-links__github']}>
                        <a href="/" className={h['social-link']}>
                            <img
                                className={h['social-link__image']}
                                src={github}
                                alt="github"
                            />
                        </a>
                    </div>
                    <div className={h['hero-social-links__instagram']}>
                        <a href="/" className={h['social-link']}>
                            <img
                                className={h['social-link__image']}
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                    <div className={h['hero-social-links__telegram']}>
                        <a href="/" className={h['social-link']}>
                            <img
                                className={h['social-link__image']}
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
export default Hero;
