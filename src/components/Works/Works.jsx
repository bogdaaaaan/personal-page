import Card from "../../components/Card/Card";
import './Works.css';
import works from '../../data/works.json';

const Works = () => {
    return (
        <div id="works" className="works wrapper">
            <p className="works-header">
                See My Works:
            </p>
            <div className="works-table">
                {
                    works && works.map(work => {
                        return (
                            <Card key={work.id} props={work}/>
                        )
                    })
                }
            </div>
        </div>
    );
};
export default Works;
