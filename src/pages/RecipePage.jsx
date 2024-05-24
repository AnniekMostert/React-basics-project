import {
  AspectRatio,
  Button,
  CloseButton,
  Container,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { HealthLabels } from "../components/HealthLabels";
import { DietLabels } from "../components/DietLabels";
import { Cautions } from "../components/Cautions";
import { Ingredients } from "../components/Ingredients";
import { Nutrients } from "../components/Nutrients";

export const RecipePage = ({ recipe, clickFn }) => {
  return (
    <Container width="100%" padding={["5%", "15px"]}>
      <Container
        background="palette.yellowDark"
        borderRadius="10px"
        padding={0}
      >
        <Container position="relative" padding={0}>
          <AspectRatio ratio={3 / 2}>
            <Image
              src={recipe.image}
              alt={"Picture of " + recipe.label}
              width="100%"
              borderTopRadius="10px"
            />
          </AspectRatio>
          <CloseButton
            onClick={() => clickFn()}
            position="absolute"
            right="0px"
            top="0px"
            background="palette.yellowBackground"
            borderRadius="0px"
            borderTopRightRadius="10px"
            _hover={{ bgColor: "palette.yellowLight" }}
            _active={{ bgColor: "palette.yellowLight" }}
            _focusVisible={{ shadow: "none" }}
          />
        </Container>

        <Flex padding={["5%", "15px"]} flexDir="column" rowGap="5px">
          <Text textAlign="center" fontSize="sm">
            {recipe.mealType}
          </Text>
          <Divider />

          <Text fontSize="1.4em" fontWeight="bold" textAlign="center">
            {recipe.label}
          </Text>
          <Divider />

          <SimpleGrid columns="2" columnGap="5px" maxWidth="255">
            <Text>Dish type:</Text>
            <Text fontWeight="bold" textTransform="capitalize">
              {recipe.dishType}
            </Text>
            <Text>Cuisine:</Text>
            <Text fontWeight="bold" textTransform="capitalize">
              {recipe.cuisineType.length === 1
                ? recipe.cuisineType[0]
                : `${recipe.cuisineType[0]}\n${recipe.cuisineType[1]}`}
            </Text>
            <Text>Cooking time:</Text>
            <Text fontWeight="bold">{recipe.totalTime + " minutes"}</Text>
            <Text>Servings:</Text>
            <Text fontWeight="bold">{recipe.yield}</Text>
          </SimpleGrid>
          <Divider />

          <Ingredients recipe={recipe} />
          <Divider />

          <HealthLabels recipe={recipe} recipePage={true} />
          <Divider />

          <DietLabels recipe={recipe} recipePage={true} justify="start" />
          <Cautions recipe={recipe} recipePage={true} />
          <Nutrients totalNutrients={recipe.totalNutrients} />
          <Divider />

          <Button
            onClick={() => clickFn()}
            bgColor="palette.yellowBackground"
            _hover={{ bgColor: "palette.yellowLight" }}
            _active={{ bgColor: "palette.yellowLight" }}
            _focusVisible={{ shadow: "none" }}
            marginTop={["5%", "15px"]}
          >
            Back
          </Button>
        </Flex>
      </Container>
    </Container>
  );
};
