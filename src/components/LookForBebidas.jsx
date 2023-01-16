const LookForBebidas = ({ data }) => {
  return (
    <div className="bebidas">
      <div className="img">
        <img src={data.strDrinkThumb} alt="img-bebidas" />
      </div>
      <div className="info">
        <h1>{data.strDrink}</h1>
        <p>{data.strInstructions}</p>
        <h3>Ingredientes</h3>
        <li>
          {data.strIngredient1} {data.strMeasure1}
        </li>
        <li>
          {data.strIngredient2} {data.strMeasure2}
        </li>
        <li>
          {data.strIngredient3} {data.strMeasure3}
        </li>
        <li>
          {data.strIngredient4} {data.strMeasure4}
        </li>
      </div>
    </div>
  );
};

export default LookForBebidas;
