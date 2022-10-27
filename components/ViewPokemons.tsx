import Card from "./Card";

const ViewPokemons = ({ list, onDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {list.map((item) => {
        return (
          <Card
            key={item.id}
            name={item.name}
            id={item.id}
            callback={onDelete}
          />
        );
      })}
    </div>
  );
};

export default ViewPokemons;
