import { useState } from "react";

const AddPokemonForm = () => {
  const [name, setName] = useState("");

  const createPokemon = () => {
    //  Ctrl + . = ez import

    fetch("http://localhost:3000/pokemons/create", {
      method: "POST",
      body: JSON.stringify({
        name: name,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.error) {
          alert(data.message);
        } else {
          alert(data.message);
        }
        // console.log(data, "DATA FROM SERVER");
      });
  };

  return (
    <div
      style={{
        display: "block",
        marginTop: 20,
      }}
    >
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        type="text"
        placeholder="Name"
        style={{ background: "white", color: "black", padding: 5 }}
      />
      <br />
      <button style={{ fontSize: 20, color: "black" }} onClick={createPokemon}>
        Add
      </button>
    </div>
  );
};

export default AddPokemonForm;
