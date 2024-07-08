"use client"
import Image from "next/image";
import React, { useRef } from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";

import Editor from '@monaco-editor/react';
import { Box } from "@chakra-ui/react";
import CodeEditor from "./CodeEditor";
// import { LANGUAGE_VERSION } from "./extractData";
export default function Home() {
  // console.log(LANGUAGE_VERSION)
 
  return (
    <ChakraProvider theme={theme}>
      <Box minH={"100vh"} bg={'#0f0a19'} color={'gray.500'} px={6} py={8}>
          <CodeEditor />
      </Box>

    </ChakraProvider>
  );
}
