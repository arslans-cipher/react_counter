const RecipeIngredientEdit = ({ ingredient, handleIngredientChange, handleIngredientDelete }) => {

  const handleChange = changes => {
    handleIngredientChange(ingredient.id, { ...ingredient, ...changes })
  }

  return <>
    <input
      className="recipe-edit__input"
      type="text"
      onInput={event => handleChange({ name: event.target.value })}
      value={ingredient.name}
    />
    <input
      className="recipe-edit__input"
      type="text"
      onInput={event => handleChange({ amount: event.target.value })}
      value={ingredient.amount}
    />
    <button className="btn btn--danger" onClick={() => handleIngredientDelete(ingredient.id)}>&times;</button>
  </>
}

export default RecipeIngredientEdit