import { Flex, Tag } from "@chakra-ui/react";

export const Cautions = ({ recipe }) => {
  const recipeCautions = recipe.cautions.map((label) => (
    <Tag key={label} variant="caution">
      {label}
    </Tag>
  ));

  return (
    recipeCautions.length != 0 && (
      <Flex justify="center" wrap="wrap" gap="5px">
        {recipeCautions}
      </Flex>
    )
  );
};
