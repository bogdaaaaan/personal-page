import './About.css';
import skills from '../../data/skills.json';

const About = () => {
    return (
        <section id='about' className="about wrapper">
            <h2 className="about-header">About me</h2>

            <div className="about-body">
                <ul className="about-blocks">
                    <li className="about-block">
                        Hello! My name is Bogdan Glechkovsky and I love working with the web. I have been studying this field for more than <span className='important-text'>three years</span> and have experience in developing various interesting projects - from simple websites and games to complex online platforms and programs.
                    </li>

                    <li className="about-block">
                        I am always <span className='important-text'>ready to try a new approach or technology</span> in web development. It is not difficult for me to quickly learn new technology from scratch and continue to develop my knowledge in it.
                    </li>

                    <li className="about-block">
                        For me, it was important to <span className='important-text'>have fun</span> when it came to web development. If the development of the project is boring and uninteresting, I will not be able to <span className='important-text'>give it my best</span>.
                    </li>

                    <li className="about-block">
                        I try to use not only my own knowledge, but also <span className='important-text'>look for other approaches to solving problems</span>. While studying web development, I learned how to prepare several options for solving problems using different technologies in advance.
                    </li>
                </ul>

                <div className="about-skills">
                    <table className='skills-table'>
                        <tbody>
                            {
                                skills.map(skill => {
                                    return (
                                        <tr className='skill' key={skill.id}>
                                            <td>
                                                <div className="skill-name">
                                                    {skill.name}
                                                </div>
                                            </td>
                                            <td className='skill-bar'>
                                                <div className='skill-bar__filled' style={{width: `${skill.percentage}%`}}>
                                                    <p className='skill-bar__percentage'>{skill.percentage}%</p>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
                
            </div>
        </section>
    );
};
export default About;
