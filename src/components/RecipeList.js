import Recipe from "./Recipe"

const RecipeList = ({ recipes }) => {
  return <>
    <div className='recipe-list'>
      <div>
        {recipes.map(recipe => {
          return <Recipe
            key={recipe.id}
            {...recipe}
          />
        })}
      </div>
      <div className='recipe-list__add-recipe-btn-container'>
        <button className='btn btn--primary'>Add Recipe</button>
      </div>
    </div>
  </>

}

export default RecipeList