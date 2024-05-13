import { Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({recipe}) => {
    const vegan = recipe.healthLabels.find((label) => label === "Vegan");
    const vegetarian = recipe.healthLabels.find((label) => label === "Vegetarian");
    
    return (
      <Flex justify="space-evenly">
        {vegan && <Tag variant="health">{vegan}</Tag>}
        {vegetarian && <Tag variant="health" >{vegetarian}</Tag>}
      </Flex>
    );
  };