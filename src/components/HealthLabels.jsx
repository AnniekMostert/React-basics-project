import { Flex, Tag } from "@chakra-ui/react";

export const HealthLabels = ({recipe}) => {
    const vegan = recipe.healthLabels.find((label) => label === "Vegan");
    const vegetarian = recipe.healthLabels.find((label) => label === "Vegetarian");
    const pescatarian = recipe.healthLabels.find((label) => label === "Pescatarian");
    
    return (
      <Flex justify="space-evenly" wrap="wrap" rowGap="5px">
        {vegan && <Tag variant="health">{vegan}</Tag>}
        {vegetarian && <Tag variant="health" >{vegetarian}</Tag>}
        {pescatarian && <Tag variant="health" >{pescatarian}</Tag>}
      </Flex>
    );
  };