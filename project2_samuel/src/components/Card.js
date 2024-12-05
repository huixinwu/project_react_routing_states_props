function Card({ title, description, image, onClick, style }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }} onClick={onClick}>
      <div className="card-body">
        <h3 className={`card-title ${title ? 'with-content' : ''}`}>{title}</h3>
        <p className={`card-description ${description ? 'with-content' : ''}`}>{description}</p>
      </div>
    </div>
  );
}

export default Card;


  