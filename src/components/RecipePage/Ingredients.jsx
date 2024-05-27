import { ListItem, Text, UnorderedList } from "@chakra-ui/react";

export const Ingredients = ({ recipe }) => {
  const ingredientList = recipe.ingredientLines.map((ingredient) => (
    <ListItem key={ingredient}>
      {ingredient}
    </ListItem>
  ));

  return (
    <UnorderedList styleType="circle" marginStart="2.1em" >
      <Text fontWeight="bold" marginInlineStart={["-2.1em", 0]}>Ingredients:</Text>
      {ingredientList}
    </UnorderedList>
  );
};
