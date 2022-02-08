const Card = (props) => {
  const data = props.data;
  return (
    <div className="card">
      <h2>{data.name}</h2>
      <h6>{data.restaurant}</h6>
      <p>
        {data.address}
        <br />
        {data.zipcode} {data.country}
      </p>
    </div>
  );
};
export default Card;
