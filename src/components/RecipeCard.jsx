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
  Divider,
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
        <Text fontSize="1.4em" fontWeight="bold" textAlign="center">
          {recipe.label}
        </Text>

        <Divider />

        <HealthLabels recipe={recipe} recipePage={false}/>
        <DietLabels recipe={recipe} recipePage={false} />
        <Cautions recipe={recipe} recipePage={false} />

        <Divider />

        <Center columnGap="5px">
          <Text>Dish type:</Text>
          <Text fontWeight="bold">{recipe.dishType}</Text>
        </Center>
      </Flex>
    </Container>
  );
};
