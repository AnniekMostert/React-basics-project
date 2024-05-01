import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import { HealthLabels } from "./HealthLabels";

export const RecipeList = ({ data }) => {
  return data.map(({ recipe }) => (
    <li key={recipe.label}>
      <img src={recipe.image} alt={"Picture of " + recipe.label} width={100} />
      <p>{recipe.mealType}</p>
      <h1>{recipe.label}</h1>
      <DietLabels recipe={recipe} />
      {recipe.cautions.length > 0 && (
        <div className="labels">
          <p>Cautions:</p>
          <Cautions recipe={recipe} />
        </div>
      )}

      <p>Dish: {recipe.dishType}</p>
      <HealthLabels recipe={recipe} />
      <p>----------------------------</p>
    </li>
  ));
};
