import React from "react";


const Recipes = props => {
  const { recipes } = props;
  return (
    <div class="row">
      {recipes.map(recipe => (
        <div class="col-md-4">
          <div class="card py-2 text-center">

            <img src={recipe.recipe.image} className="img-fluid w-50 mx-auto rounded-circle"/>
            <div class="card-body">
              <h6>{recipe.recipe.label}</h6>
              <div class="u" >
                <a href={recipe.recipe.url} target="_blank" > <button class="button"> <h6>Recipe</h6> </button> </a>
                 </div>
              </div>
              </div>
              </div>
              

        
      ))}
   </div>
  );
};

export default Recipes;