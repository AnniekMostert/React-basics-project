import { Flex, Tag } from "@chakra-ui/react";

export const DietLabels = ({recipe}) => {
  return (
    <Flex justify="space-evenly" wrap="wrap" rowGap="5px">
      {recipe.dietLabels.map((label) => (
        <Tag key={label} variant="diet" >{label}</Tag>
      ))}
    </Flex>
  );
};