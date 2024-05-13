import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { Input, SimpleGrid, Flex } from "@chakra-ui/react";

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
      <Input
        onChange={handleChange}
        placeholder="Search for recipes"
        width={{ base: "90%", sm: "70%", md: "500px" }}
        my={3}
      />
      <SimpleGrid width="100%" minChildWidth="250px" spacing="15px" >{matchedRecipeList}</SimpleGrid>
    </Flex>
  );
};
