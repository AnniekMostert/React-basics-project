import { Flex, Tag } from "@chakra-ui/react";

export const DietLabels = ({recipe}) => {
  return (
    <Flex justify="space-evenly">
      {recipe.dietLabels.map((label) => (
        <Tag key={label}>{label}</Tag>
      ))}
    </Flex>
  );
};