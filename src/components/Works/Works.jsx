import Card from "../../components/Card/Card";
import './Works.css';
import works from '../../data/works.json';

const Works = () => {
    return (
        <section id="works" className="works wrapper">
            <h2 className="works-header">
                See My Works:
            </h2>
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
