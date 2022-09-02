import Card from "../../components/Card/Card";
import './Works.css';
import links from '../../data/links.json';
import works from '../../data/works.json';

const Works = () => {
    return (
        <section id="works" className="works wrapper">
            <div className="works-header">
                <h2 className="works-title">
                    See My Works:
                </h2>
                <p className="works-description">You can find more in my <a className='secondary-link' href={links.github}>github</a></p>
            </div>
           
            <ul className="works-table">
                {
                    works && works.map(work => {
                        return (
                            <Card key={work.id} props={work}/>
                        )
                    })
                }
            </ul>
        </section>
    );
};
export default Works;
