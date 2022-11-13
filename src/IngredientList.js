import { Ingredient } from "./Ingredient"

export const IngredientList = ( { ingredients } ) => {

  const ingredientElements = ingredients.map(ingredient => {
    return <Ingredient key={ingredient.id} {...ingredient}/>
  })
  
  return <>
    {ingredientElements}
  </>
}