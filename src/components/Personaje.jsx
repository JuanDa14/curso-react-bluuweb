const Personaje = ({ personaje }) => {
  return (
    <div className="col-12 col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={personaje.image}
          alt={personaje.name}
        />
        <div className="card-body">
          <h4 className="card-title">{personaje.name}</h4>
          <p className="card-text">{personaje.species}</p>
        </div>
      </div>
    </div>
  );
};

export default Personaje;
