import { useState } from "react";
import { RecipeCard } from "../components/RecipeCard";
import { SimpleGrid, Flex } from "@chakra-ui/react";
import { Search } from "../components/Search";

export const RecipeListPage = ({ recipeList, clickFn }) => {
  const [testRecipeList, setTestRecipeList] = useState({recipeList});
  const [searchField, setSearchField] = useState("");
  const [veganFilter, setVeganFilter] = useState(false);
  const [vegetFilter, setVegetFilter] = useState(false);
  const [pescFilter, setPescFilter] = useState(false);

  const handleSearchChange = (event) => setSearchField(event.target.value);
  const handleVeganFilterChange = () => setVeganFilter(!veganFilter);
  const handleVegetFilterChange = () => setVegetFilter(!vegetFilter);
  const handlePescFilterChange = () => setPescFilter(!pescFilter);

  const veganRecipeList = () => {
    if (veganFilter) {
      return recipeList.filter(({ recipe }) =>
        recipe.healthLabels.includes("Vegan")
      );
    } else return recipeList;
  };

  const vegetRecipeList = () => {
    if (vegetFilter) {
      return veganRecipeList().filter(({ recipe }) =>
        recipe.healthLabels.includes("Vegetarian")
      );
    } else return veganRecipeList();
  };

  const pescRecipeList = () => {
    if (pescFilter) {
      return vegetRecipeList().filter(({ recipe }) =>
        recipe.healthLabels.includes("Pescatarian")
      );
    } else return vegetRecipeList();
  };

  const matchedRecipes = pescRecipeList().filter(({ recipe }) => {
    return recipe.label.toLowerCase().includes(searchField.toLowerCase());
  });

  const matchedRecipeList = matchedRecipes.map(({ recipe }) => (
    <RecipeCard key={recipe.label} recipe={recipe} clickFn={clickFn} />
  ));

  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      p={{ base: "5vw", md: "3vw", xl: "2vw" }}
    >
      <Search
        changeSearchFn={handleSearchChange}
        changeVeganFilterFn={handleVeganFilterChange}
        changeVegetFilterFn={handleVegetFilterChange}
        changePescFilterFn={handlePescFilterChange}
      />
      <SimpleGrid
        width="100%"
        minChildWidth={{ base: "250px", lg: "300px" }}
        spacing={{ base: "5vw", md: "3vw", xl: "2vw" }}
      >
        {matchedRecipeList}
      </SimpleGrid>
    </Flex>
  );
};
