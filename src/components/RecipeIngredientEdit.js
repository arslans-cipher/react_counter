const RecipeIngredientEdit = ({ ingredient, handleIngredientChange, handleIngredientDelete }) => {

  const handleChange = changes => {
    handleIngredientChange(ingredient.id, {...ingredient, ...changes})
  }

  return <>
    <input 
    className="recipe-edit__input" 
    type="text" 
    defaultValue={ingredient.name}
    onChange={event => handleChange( {name: event.target.value} )}
    />
    <input 
    className="recipe-edit__input" 
    type="text" 
    defaultValue={ingredient.amount} 
    onChange={event => handleChange( {amount: event.target.value} )}
    />
    <button className="btn btn--danger" onClick={() => handleIngredientDelete(ingredient.id)}>&times;</button>
  </>
}

export default RecipeIngredientEdit
