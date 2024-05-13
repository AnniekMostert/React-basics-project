import { DietLabels } from "./DietLabels";
import { Cautions } from "./Cautions";
import { HealthLabels } from "./HealthLabels";
import { Container, Heading, Image, Text, Center } from "@chakra-ui/react";

export const RecipeCard = ({ recipe, clickFn }) => {
  return (
    <Container
      cursor={"pointer"}
      onClick={() => clickFn(recipe)}
      width="300px"
      background="palette.yellowDark"
      borderRadius="10px"
      padding={0}
    >
      <Image
        src={recipe.image}
        alt={"Picture of " + recipe.label}
        width="100%"
        aspectRatio={3 / 2}
        borderTopRadius="10px"
      />
      <Container padding={["5%", "15px"]}>
        <Text>{recipe.mealType}</Text>
        <Heading>{recipe.label}</Heading>
        <HealthLabels recipe={recipe} />
        <DietLabels recipe={recipe} />
        <Center rowGap="5px">
          <Text>Dishtype:</Text>
          <Text fontWeight="bold">{recipe.dishType}</Text>
        </Center>
        <Cautions recipe={recipe} />
      </Container>
    </Container>
  );
  // <li key={recipe.label}>
  //   <img src={recipe.image} alt={"Picture of " + recipe.label} width={100} />
  //   <p>{recipe.mealType}</p>
  //   <h1>{recipe.label}</h1>
  //   <DietLabels recipe={recipe} />
  //   {recipe.cautions.length > 0 && (
  //     <div className="labels">
  //       <p>Cautions:</p>
  //       <Cautions recipe={recipe} />
  //     </div>
  //   )}

  //   <p>Dish: {recipe.dishType}</p>
  //   <HealthLabels recipe={recipe} />
  //   <p>----------------------------</p>
  // </li>
};
