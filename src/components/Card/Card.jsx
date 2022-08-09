import './Card.css';
import colors from '../../data/tag_colors.json';


const Card = (props) => {
    const info = props.props;
    return (

        <div className="card">
            <div className="card-header">
                <img className='card-image' src={info.img} alt={info.alt} />
            </div>
            <div className="card-body">
                <div className="card-tags">
                    {
                        info.tags.map(tag => {
                            return (
                                <span key={tag} className={`tag`} style={{"backgroundColor": colors[tag]}}>{tag}</span>
                            )
                        })
                    }
                </div>
                <p className='card-title'>{info.title}</p>
                <p className='card-description'>{info.description}</p>

                <div className="flexible"></div>
                
                <div className="card-buttons">
                    <a className="card-button btn" href={info.visit_link}>Visit</a>
                    <a className="card-button btn" href={info.github_link}>Github</a>
                </div>
            </div>
        </div>
    )
}

export default Card;