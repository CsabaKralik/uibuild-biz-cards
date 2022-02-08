import Card from "./Card";

const CardContainer = (props) => {
  return (
    <div className="card-container">
      {props.data.map((item) => {
        return <Card data={item} key={item.id} />;
      })}
    </div>
  );
};
export default CardContainer;
