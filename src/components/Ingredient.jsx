const Ingredient = ({ ingredient, onClick, buttonLabel }) => {
    return (
      <li style={{ backgroundColor: ingredient.color }}>
        {ingredient.name}
        <button onClick={onClick}>{buttonLabel}</button>
      </li>
    );
  };
  
  export default Ingredient;
  