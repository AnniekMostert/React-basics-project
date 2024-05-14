import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import {
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";
import { Search } from "../components/Search";

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
    <Flex flexDirection="column" alignItems="center" px="15px">
      <Search changeFn={handleChange} />
      <SimpleGrid width="100%" minChildWidth="250px" spacing="15px">
        {matchedRecipeList}
      </SimpleGrid>
    </Flex>
  );
};
