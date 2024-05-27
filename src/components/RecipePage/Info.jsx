import { SimpleGrid, Text } from "@chakra-ui/react";

export const Info = ({ recipe }) => {
  return (
    <SimpleGrid columns="2" columnGap="5px" maxWidth="255" gridTemplateColumns="1fr 100px">
      <Text>Meal type: </Text>
      <Text fontWeight="bold">{recipe.mealType}</Text>
      <Text>Dish type:</Text>
      <Text fontWeight="bold">{recipe.dishType}</Text>
      <Text>Cuisine:</Text>
      <Text fontWeight="bold" textTransform="capitalize">
        {recipe.cuisineType.length === 1
          ? recipe.cuisineType[0]
          : `${recipe.cuisineType[0]}\n${recipe.cuisineType[1]}`}
      </Text>
      <Text>Cooking time:</Text>
      <Text fontWeight="bold">{recipe.totalTime + " minutes"}</Text>
      <Text>Servings:</Text>
      <Text fontWeight="bold">{recipe.yield}</Text>
    </SimpleGrid>
  );
};
