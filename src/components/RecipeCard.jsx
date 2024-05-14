import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import { HealthLabels } from "./HealthLabels";
import {
  Container,
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
      <Flex padding={["5%", "15px"]} flexDir="column" rowGap="5px">
        <Text textAlign="center" fontSize="sm">
          {recipe.mealType}
        </Text>
        <Text fontSize="1.4em" fontWeight="bold" textAlign="center" py="5px" borderY="2px solid" borderColor="palette.yellowLight">
          {recipe.label}
        </Text>
        <HealthLabels recipe={recipe} />
        <DietLabels recipe={recipe} />
        <Cautions recipe={recipe} />
        <Center columnGap="5px" borderTop="2px solid" borderTopColor="palette.yellowLight" >
          <Text>Dishtype:</Text>
          <Text fontWeight="bold">{recipe.dishType}</Text>
        </Center>
      </Flex>
    </Container>
  );
};
