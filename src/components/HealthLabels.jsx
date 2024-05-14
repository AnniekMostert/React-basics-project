import { Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({ recipe }) => {
  const vegan = recipe.healthLabels.find((label) => label === "Vegan");
  const vegetarian = recipe.healthLabels.find(
    (label) => label === "Vegetarian"
  );
  const pescatarian = recipe.healthLabels.find(
    (label) => label === "Pescatarian"
  );
  const recipeHealthLabels = [
    vegan && <Tag key="vegan" variant="health">{vegan}</Tag>,
    vegetarian && <Tag key="vegetarian" variant="health">{vegetarian}</Tag>,
    pescatarian && <Tag key="pescatarian" variant="health">{pescatarian}</Tag>,
  ].filter((label) => label != undefined);
  console.log(recipeHealthLabels)

  return (
    recipeHealthLabels.length != 0 && (
      <Flex justify="center" wrap="wrap" gap="5px">
        {recipeHealthLabels}
      </Flex>
    )
  );
};
