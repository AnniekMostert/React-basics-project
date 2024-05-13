import { Container, Image } from "@chakra-ui/react";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Container
      cursor={"pointer"}
      onClick={() => clickFn(recipe)}
      padding={["5%", "15px"]}
      border={["1px solid", "2px solid"]}
      borderColor="yellow.800"
      borderRadius="10px"
    >
        <Image src={recipe.image} aspectRatio={3/2}/>
    </Container>
  );
};
