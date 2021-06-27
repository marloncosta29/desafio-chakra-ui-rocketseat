import { Flex, Img, Text } from "@chakra-ui/react";

interface TravelTypesProps {
  type: "nightlife" | "beach" | "modern" | "classic" | "more";
  text: string;
}

const TravelIconByType = {
  nightlife: "cocktail.png",
  beach: "surf.png",
  modern: "building.png",
  classic: "museum.png",
  more: "earth.png",
};

export function TravelTypes({ type, text }: TravelTypesProps) {
  return (
    <Flex
      flexDirection="column"
      align="center"
      justifyContent="center"
      w={158}
      h={145}
    >
      <Img src={`images/${TravelIconByType[type]}`} />
      <Text mt={5}>{text}</Text>
    </Flex>
  );
}
