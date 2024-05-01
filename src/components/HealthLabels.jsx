export const HealthLabels = ({recipe}) => {
    const findVegan = (label) => label === "Vegan";
    const findVegetarian = (label) => label === "Vegetarian";
    
    return (
      <ul>
        <li>{recipe.healthLabels.find(findVegan)}</li>
        <li>{recipe.healthLabels.find(findVegetarian)}</li>
      </ul>
    );
  };