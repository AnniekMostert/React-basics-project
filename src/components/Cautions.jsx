import { Flex, Tag } from "@chakra-ui/react";

export const Cautions = ({recipe}) => {
    return (
      <Flex justify="space-evenly">
      {recipe.cautions.map((label) => (
        <Tag key={label}>{label}</Tag>
      ))}
    </Flex>
    );
  };