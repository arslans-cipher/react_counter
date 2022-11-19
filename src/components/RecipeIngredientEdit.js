
const RecipeIngredientEdit = ({ ingredient }) => {
  return <>
    <input className="recipe-edit__input" type="text" defaultValue={ingredient.name}/>
    <input className="recipe-edit__input" type="text" defaultValue={ingredient.amount} />
    <button className="btn btn--danger">&times;</button>
  </>
}

export default RecipeIngredientEdit
