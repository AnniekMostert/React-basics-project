import { Container, Heading } from '@chakra-ui/react';
import { RecipeListPage } from './pages/RecipeListPage';
import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { data } from "./utils/data";

const recipeList = data.hits;

export const App = () => {
  console.log(recipeList[0].recipe.label)
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Container maxW="100vw" minH="100vh" padding={0} margin={0} bgColor="palette.yellowLight" >
      <Heading textAlign="center" color="palette.greenDark" py={8} bgColor="palette.yellowDark">Welcome to Annieks recipes</Heading>
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} clickFn={setSelectedRecipe} />
      ) : (
        <RecipeListPage recipeList={recipeList} clickFn={setSelectedRecipe} />
      )}
    </Container>
  )
};
