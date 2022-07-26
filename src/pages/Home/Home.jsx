import h from './Home.module.css';

import avatar from '../../images/avatar.jpg';
import github from '../../images/icons/github.svg';
import instagram from '../../images/icons/instagram.svg';
import telegram from '../../images/icons/telegram.svg';

const Home = () => {
    return (
        <div className={h['home-content']}>
            <div className={h['home-avatar']}>
                <img
                    className={h['home-avatar__image']}
                    src={avatar}
                    alt="avatar"
                />
            </div>

            <div className={h['home-info']}>
                <div className={h['home-title']}>
                    <p className={h['home-title__greetings']}>Greetings!</p>
                </div>
                <div className={h['home-description']}>
                    <p className={h['home-description__about']}>
                        My name is Bogdan Glechkovsky and I'm a front-end
                        developer.
                    </p>
                </div>
                <div className={h['home-social-links']}>
                    <div className={h['home-social-links__github']}>
                        <a href="/" className={h['social-link']}>
                            <img
                                className={h['social-link__image']}
                                src={github}
                                alt="github"
                            />
                        </a>
                    </div>
                    <div className={h['home-social-links__instagram']}>
                        <a href="/" className={h['social-link']}>
                            <img
                                className={h['social-link__image']}
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </div>
                    <div className={h['home-social-links__telegram']}>
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
export default Home;
