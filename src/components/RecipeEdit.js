import React, { useContext } from 'react' 
import { RecipeContext } from './App'
import '../css/recipe-edit.css'
import RecipeIngredientEdit from './RecipeIngredientEdit'

const RecipeEdit = ({ recipe }) => {

  const { handleRecipeChange } = useContext(RecipeContext)

  const handleChange = (changes) => {
    handleRecipeChange( recipe.id, {...recipe, ...changes} )
  }


  return <div className="recipe-edit">
  <div className="recipe-edit__remove-button-container">
    <button className="btn recipe-edit__remove-button">&times;</button>
  </div>
  <div className="recipe-edit__details-grid">
    <label
      htmlFor="name"
      className="recipe-edit__label">
      Name
    </label>
    <input
      type="text"
      name="name"
      id="name"
      defaultValue={recipe.name}
      onChange={event => handleChange( {name: event.target.value} )}
      className="recipe-edit__input" />
    <label
      htmlFor="cookTime"
      className="recipe-edit__label">
      Cook Time
    </label>
    <input
      type="text"
      name="cookTime"
      id="cookTime"
      defaultValue={recipe.cookTime}
      className="recipe-edit__input" />
    <label
      htmlFor="servings"
      className="recipe-edit__label">
      Servings
    </label>
    <input
      type="number"
      min="1"
      name="servings"
      id="servings"
      defaultValue={recipe.servings}
      className="recipe-edit__input" />
    <label
      htmlFor="instructions"
      className="recipe-edit__label">
      Instructions
    </label>
    <textarea
      name="instructions"
      className="recipe-edit__input"
      id="instructions" >
        {recipe.instructions}
      </textarea>
  </div>
  <br />
  <label className="recipe-edit__label">Ingredients</label>
  <div className="recipe-edit__ingredient-grid">
    <div>Name</div>
    <div>Amount</div>
    <div></div>
    {recipe.ingredients.map(ingredient => (
      <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient} />
    ))}
  </div>
  <div className="recipe-edit__add-ingredient-btn-container">
    <button className="btn btn--primary">Add Ingredient</button>
  </div>
</div>
}

export default RecipeEdit