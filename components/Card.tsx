const Card = ({ name, id, callback }) => {
  const onDelete = () => {
    fetch("http://localhost:3000/pokemons/delete", {
      method: "DELETE",
      body: JSON.stringify({
        id: id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          // alert("successfully deleted");
          callback(id);
        }
      });
  };

  return (
    <div className="pokemon__card" key={id}>
      <div className="pokemon__image__background">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt=""
        />
      </div>
      <div>
        <button style={{ color: "black" }} onClick={onDelete}>
          Delete
        </button>
      </div>
      <div>
        <p className="pokemon__number">#{id}</p>
        <p className="pokemon__name">{name}</p>
        <div className="pokemon__types">
          <p className="pokemon__grass__type">Grass</p>
          <p className="pokemon__poison__type">Poison</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
