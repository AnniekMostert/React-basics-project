import { Center, Heading } from "@chakra-ui/react";
import { data } from "../utils/data";
import { RecipeList } from "../components/RecipeList";
import "./RecipeListPage.css";

export const RecipeListPage = () => {
  return (
    <Center h="100vh" flexDir="column">
      <Heading>Your Recipe App</Heading>
      <ul>
        <RecipeList data={data.hits} />
      </ul>
    </Center>
  );
};
