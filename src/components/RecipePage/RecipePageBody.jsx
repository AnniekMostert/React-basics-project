import { Grid, GridItem } from "@chakra-ui/react";
import { Info } from "./Info";
import { Ingredients } from "./Ingredients";
import { HealthLabels } from "../HealthLabels";
import { DietLabels } from "../DietLabels";
import { Cautions } from "../Cautions";
import { Nutrients } from "./Nutrients";

export const RecipePageBody = ({ recipe }) => {
  const templateAreasBase = `
    "info"
    "ingr"
    "hl"
    "dl"
    "cau"
    "nutr"
    `;
  const templateAreasSm = `
    "info nutr"
    "ingr ingr"
    "hl hl"
    "dl cau"
    `;
  const templateAreasMd = `
    "info ingr nutr"
    "hl hl dl"
    "hl hl cau"
    `;

  return (
    <Grid
      templateAreas={{
        base: templateAreasBase,
        sm: templateAreasSm,
        md: templateAreasMd,
      }}
      bgColor="palette.yellowBackground"
      rowGap="1px"
    >
      <GridItem area="info" bgColor="palette.yellowDark" paddingBottom="5px" paddingRight={{sm: "5px"}}>
        <Info recipe={recipe} />
      </GridItem>
      <GridItem area="ingr" bgColor="palette.yellowDark" paddingTop={{base: "5px", md: 0}} paddingBottom="5px" paddingX={{md: "5px"}}>
        <Ingredients recipe={recipe} />
      </GridItem>
      <GridItem area="hl" bgColor="palette.yellowDark" paddingY="5px">
        <HealthLabels recipe={recipe} recipePage={true} />
      </GridItem>
      <GridItem
        area="dl"
        bgColor="palette.yellowDark"
        paddingY="5px"
        paddingRight={{ sm: "5px" }}
      >
        <DietLabels recipe={recipe} recipePage={true} />
      </GridItem>
      <GridItem
        area="cau"
        bgColor="palette.yellowDark"
        paddingY="5px"
        paddingLeft={{ sm: "5px" }}
      >
        <Cautions recipe={recipe} recipePage={true} />
      </GridItem>
      <GridItem area="nutr" bgColor="palette.yellowDark" paddingTop={{base: "5px", sm: 0}} paddingBottom={{sm: "5px"}} paddingLeft={{sm: "5px"}}>
        <Nutrients totalNutrients={recipe.totalNutrients} />
      </GridItem>
    </Grid>
  );
};
