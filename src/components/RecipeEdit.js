import React, { useContext } from 'react'
import { RecipeContext } from './App'
import { v4 as uuidv4 } from 'uuid'
import '../css/recipe-edit.css'
import RecipeIngredientEdit from './RecipeIngredientEdit'

const RecipeEdit = ({ recipe }) => {

  const { handleRecipeChange, handleRecipeSelect } = useContext(RecipeContext)

  const handleChange = (changes) => {
    handleRecipeChange(recipe.id, { ...recipe, ...changes })
  }

  const handleIngredientChange = (id, ingredient) => {
    const newIngredients = [...recipe.ingredients]
    const index = newIngredients.findIndex(ingredient => ingredient.id === id)
    newIngredients[index] = ingredient
    handleChange( {ingredients: newIngredients} )
  }

  const handleIngredientAdd = () => {
    const newIngredient = {
      id: uuidv4(),
      name: '', 
      amount: '', 
    }
    handleChange({ingredients: [...recipe.ingredients, newIngredient] })
  }

  return <div className="recipe-edit">
    <div className="recipe-edit__remove-button-container">
      <button className="btn recipe-edit__remove-button" onClick={() => handleRecipeSelect(null)} >&times;</button>
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
        onChange={event => handleChange({ name: event.target.value })}
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
        onChange={event => handleChange({ cookTime: event.target.value })}
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
        onChange={event => handleChange({ servings: parseInt(event.target.value) || '' })}
        className="recipe-edit__input" />
      <label
        htmlFor="instructions"
        className="recipe-edit__label">
        Instructions
      </label>
      <textarea
        name="instructions"
        className="recipe-edit__input"
        onChange={event => handleChange({ instructions: event.target.value })}
        defaultValue={recipe.instructions}
        id="instructions" />
    </div>
    <br />
    <label className="recipe-edit__label">Ingredients</label>
    <div className="recipe-edit__ingredient-grid">
      <div>Name</div>
      <div>Amount</div>
      <div></div>
      {recipe.ingredients.map(ingredient => (
        <RecipeIngredientEdit 
        key={ingredient.id} 
        handleIngredientChange={handleIngredientChange}
        ingredient={ingredient} />
      ))}
    </div>
    <div className="recipe-edit__add-ingredient-btn-container">
      <button className="btn btn--primary" onClick={() => handleIngredientAdd()}>Add Ingredient</button>
    </div>
  </div>
}

export default RecipeEdit