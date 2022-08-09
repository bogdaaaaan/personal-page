import './About.css';
import skills from '../../data/skills.json';
import colors from '../../data/tag_colors.json'

const About = () => {
    return (
        <div id='about' className="about wrapper">
            <div className="about-header">
                <p className="about-header__title">
                    About me
                </p>
            </div>
            <div className="about-body">
                <div className="about-skills">
                    <table className='skills-table'>
                        {
                            skills.map(skill => {
                                return (
                                    <tr className='skill'>
                                        <td>
                                            <div className="skill-name">
                                                {skill.name}
                                            </div>
                                        </td>
                                        <td className='skill-bar'>
                                            <div className='skill-bar__filled' style={{background: `${colors[skill.name]}`, width: `${skill.percentage}%`}}>
                                            {skill.percentage}%
                                            </div>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </table>
                </div>

                {/* <div className="about-photo">
                    <img className='about-photo__image' src={avatar} alt="avatar"/>
                </div> */}

                <div className="about-blocks">
                    <p className="about-block">
                        Hello! My name is Bogdan Glechkovsky and I love working with the web. I have been studying this field for more than <span className='important-text'>three years</span> and have experience in developing various interesting projects - from simple websites and games to complex online platforms and programs.
                    </p>

                    <p className="about-block">
                        I am always <span className='important-text'>ready to try a new approach or technology</span> in web development. It is not difficult for me to quickly learn new technology from scratch and continue to develop my knowledge in it.
                    </p>

                    <p className="about-block">
                        For me, it was important to <span className='important-text'>have fun</span> when it came to web development. If the development of the project is boring and uninteresting, I will not be able to <span className='important-text'>give it my best</span>.
                    </p>

                    <p className="about-block">
                        I try to use not only my own knowledge, but also <span className='important-text'>look for other approaches to solving problems</span>. While studying web development, I learned how to prepare several options for solving problems using different technologies in advance.
                    </p>
                </div>
                
            </div>
        </div>
    );
};
export default About;
