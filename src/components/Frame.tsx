  import {
  HStack,
  Heading,
  ListItem,
  UnorderedList,
  VStack,
} from "@chakra-ui/react";
import { BtnTheme } from "./BtnTheme";

export const Frame = ({
  title1,
  title2,
  label,
  list1,
  list2,
  onClick,
}: {
  title1: string;
  title2?: string;
  label: string;
  list1?: string[];
  list2?: string[];
  onClick?: () => void;
}) => {
  return (
    <>
      <VStack
        rounded={"sm"}
        border={"1px solid teal"}
        padding={"16px"}
        alignItems={"start"}
      >
        <Heading as={"h3"} size={"md"} textAlign={"center"} w={"100%"}>
          {title1}
        </Heading>

        <UnorderedList>
          {list1?.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </UnorderedList>

        {title2 && (
          <>
            <Heading as={"h3"} size={"md"} textAlign={"center"} w={"100%"}>
              {title2}
            </Heading>

            <UnorderedList>
              {list2?.map((item, index) => (
                <ListItem key={index}>{item}</ListItem>
              ))}
            </UnorderedList>
          </>
        )}
        <HStack justify={"center"} w={"100%"}>
          <BtnTheme onClick={onClick}>{label}</BtnTheme>
        </HStack>
      </VStack>
    </>
  );
};
