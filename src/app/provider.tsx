"use client";

import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";

export const Providers = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
