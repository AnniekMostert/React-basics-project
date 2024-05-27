import { Divider, Grid, GridItem } from "@chakra-ui/react";
import { Info } from "./Info";
import { Ingredients } from "./Ingredients";
import { HealthLabels } from "../HealthLabels";
import { DietLabels } from "../DietLabels";
import { Cautions } from "../Cautions";
import { Nutrients } from "./Nutrients";

export const RecipePageBody = ({ recipe }) => {
  const templateAreasBase = `"info"
    "ingr"
    "hl"
    "dl"
    "cau"
    "div"
    "nutr"`;
  const templateAreasSm = `"info ingr"
    "hl hl"
    "dl cau"
    "div div"
    "nutr nutr"`;
  const templateAreasMd = `"info ingr nutr"
  "div div div"
  "hl dl cau"`;

  return (
    <Grid
      templateAreas={{
        base: templateAreasBase,
        sm: templateAreasSm,
        md: templateAreasMd,
      }}
    >
      <GridItem area="info">
        <Info recipe={recipe} />
      </GridItem>
      <GridItem area="ingr">
        <Ingredients recipe={recipe} />
      </GridItem>
      <GridItem area="hl">
        <HealthLabels recipe={recipe} recipePage={true} />
      </GridItem>
      <GridItem area="dl">
        <DietLabels recipe={recipe} recipePage={true} />
      </GridItem>
      <GridItem area="cau">
        <Cautions recipe={recipe} recipePage={true} />
      </GridItem>
      <GridItem area="nutr">
        <Nutrients totalNutrients={recipe.totalNutrients} />
      </GridItem>
      <GridItem area="div">
        <Divider my="5px" />
      </GridItem>
    </Grid>
  );
};
