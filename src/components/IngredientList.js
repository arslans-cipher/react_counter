import Ingredient from "./Ingredient"

const IngredientList = ( { ingredients } ) => {

  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient}/>
  })

  return <>
    {ingredientElements}
  </>
}

export default IngredientList