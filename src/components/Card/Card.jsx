

const Card = (props) => {
    const info = props.props;

    return (
        <div className="card">
            <div className="card-photo">
                <img src={info.photo} alt={info.alt} />
            </div>
            <div className="card-title">
                {info.title}
            </div>
            <div className="card-description">
                {info.description}
            </div>
            <div className="card-buttons">
                <button>Visit</button>
                <button>Github</button>
            </div>
        </div>  
    )
}

export default Card;