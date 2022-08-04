import Card from "../../components/Card/Card";

import portfolio from '../../images/portfolio.png';

const Works = () => {
    const info = {photo: portfolio, alt:'portfolio', title: "Portfolio Website", description: "Simple Portfolio website created to show my work and ways to connect with me"};

    return (
        <div className="works-table">
            <Card props={info}/>
        </div>
    );
};
export default Works;
