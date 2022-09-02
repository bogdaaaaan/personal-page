import './Card.css';

const Card = (props) => {
    const info = props.props;
    return (

        <li className="card">
            <div className="card-header">
                <img className='card-image' src={info.img} alt={info.alt} />
            </div>
            <div className="card-body">
                <ul className="card-tags">
                    {
                        info.tags.map(tag => {
                            return (
                                <li key={tag} className={`tag`}>{tag}</li>
                            )
                        })
                    }
                </ul>

                <p className='card-title'>{info.title}</p>
                <p className='card-description'>{info.description}</p>

                <div className="flexible"></div>
                
                <div className="card-buttons">
                    {info?.visit_link ? <a className="card-button btn" href={info.visit_link}>Visit</a> : ''}
                    <a className="card-button btn" href={info.github_link}>Github</a>
                </div>
            </div>
        </li>
    )
}

export default Card;