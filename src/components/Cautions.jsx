import { Flex, Tag } from "@chakra-ui/react";

export const Cautions = ({recipe}) => {
    return (
      <Flex justify="space-evenly" wrap="wrap" rowGap="5px">
      {recipe.cautions.map((label) => (
        <Tag key={label} variant="caution" >{label}</Tag>
      ))}
    </Flex>
    );
  };