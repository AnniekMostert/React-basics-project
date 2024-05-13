import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import { HealthLabels } from "./HealthLabels";
import {
  Container,
  Heading,
  Image,
  Text,
  Center,
  AspectRatio,
  Flex,
} from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Container
      cursor={"pointer"}
      onClick={() => clickFn(recipe)}
      background="palette.yellowDark"
      borderRadius="10px"
      padding={0}
    >
      <AspectRatio ratio={3 / 2}>
        <Image
          src={recipe.image}
          alt={"Picture of " + recipe.label}
          width="100%"
          borderTopRadius="10px"
        />
      </AspectRatio>
      <Flex padding={["5%", "15px"]} flexDir="column"  rowGap="5px" >
        <Text textAlign="center">{recipe.mealType}</Text>
        <Heading size="lg" textAlign="center">{recipe.label}</Heading>
        <HealthLabels recipe={recipe} />
        <DietLabels recipe={recipe} />
        <Center columnGap="5px">
          <Text>Dishtype:</Text>
          <Text fontWeight="bold">{recipe.dishType}</Text>
        </Center>
        <Cautions recipe={recipe} />
      </Flex>
    </Container>
  );
};
