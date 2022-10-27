import type { NextPage } from "next";
import { useEffect, useState } from "react";
import AddPokemonForm from "../components/AddPokemonForm";
import ViewPokemons from "../components/ViewPokemons";

const Pokemons: NextPage = () => {
  // const [count, setCount] = useState(0);
  // const [product, setProduct] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  // for toggling
  // const [show, setShow] = useState(false);

  const [type, setType] = useState("view");

  const load = () => {
    fetch("http://localhost:3000/pokemons")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(
          data.pokemonData,
          data.pokemonData.length,
          "DATA FROM SERVER"
        );
        setPokemonList(data.pokemonData);
      });
  };

  const deletePokemon = (id) => {
    const copy = pokemonList.filter((q) => q.id !== id);
    setPokemonList(copy);
    console.log(id);
  };

  console.log(pokemonList, "POKEMON LIST");

  // This is used for initial loading scripts
  useEffect(() => {
    load();
  }, []);

  useEffect(() => {
    if (type === "view") {
      load();
    }
  }, [type]);

  // May count sa dependency array. listener sya ng state changes
  // useEffect(() => {
  //   setProduct(count * 7);
  //   console.log(count);
  // }, [count]);

  return (
    <div className="pokemon__container">
      <h1>Pokemons</h1>

      {/* {show && <h1>Show</h1>}

      <button
        style={{ fontSize: 20, color: "black" }}
        onClick={() => setShow(!show)}
      >
        Toggle
      </button> */}

      <button
        style={{ fontSize: 20, color: "black" }}
        onClick={() => setType(type === "view" ? "add" : "view")}
      >
        {type === "view" ? "add" : "view"}
      </button>

      {type == "view" && (
        // <div
        //   style={{
        //     display: "flex",
        //     flexWrap: "wrap",
        //   }}
        // >
        //   {pokemonList.map((item) => {
        //     return <Card name={item.name} id={item.id} />;
        //   })}
        // </div>
        <ViewPokemons list={pokemonList} onDelete={deletePokemon} />
      )}

      {type == "add" && <AddPokemonForm />}

      {/* <Card name="Largs" /> */}
    </div>
  );
};

export default Pokemons;
