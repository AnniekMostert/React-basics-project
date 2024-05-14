import { Flex, Tag } from "@chakra-ui/react";

export const DietLabels = ({ recipe }) => {
  const recipeDietLabels = recipe.dietLabels.map((label) => (
    <Tag key={label} variant="diet">
      {label}
    </Tag>
  ));

  return (
    recipeDietLabels.length != 0 && (
      <Flex justify="center" wrap="wrap" gap="5px">
        {recipeDietLabels}
      </Flex>
    )
  );
};
