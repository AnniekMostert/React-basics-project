import { useState } from "react";
import "./RecipeListPage.css";
import { RecipeCard } from "../components/RecipeCard";
import { Input, SimpleGrid, Center } from "@chakra-ui/react";

export const RecipeListPage = ({ recipeList, clickFn }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    return setSearchField(event.target.value);
  };

  const matchedRecipes = recipeList.filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const matchedRecipeList = matchedRecipes.map(({ recipe }) => (
    <RecipeCard key={recipe.label} recipe={recipe} clickFn={clickFn} />
  ));

  return (
    <Center>
      <Input
        onChange={handleChange}
        placeholder="Search for recipes"
        width={{ base: "90%", sm: "70%", md: "500px" }}
        my={3}
      />
      <SimpleGrid>{matchedRecipeList}</SimpleGrid>
    </Center>
  );
};
