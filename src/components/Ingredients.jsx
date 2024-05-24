import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const Ingredients = ({ recipe }) => {
  const ingredientList = recipe.ingredientLines.map((ingredient) => (
    <ListItem key={ingredient}>
      {ingredient}
    </ListItem>
  ));

  return (
    <UnorderedList styleType="none" >
      <Text fontWeight="bold" marginInlineStart="-1em">Ingredients:</Text>
      {ingredientList}
    </UnorderedList>
  );
};
