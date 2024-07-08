// utils/codeExecution.js

import axios from "axios";
import {LANGUAGE_VERSION}  from "../constant";
import { LanguageKey } from "../CodeEditor";

const API = axios.create({
  baseURL: "https://emkc.org/api/v2/piston",
});

export async function executeCode(language:string, sourceCode:string) {
  try {
    const response = await API.post("/execute", {
      language: language,
      version: LANGUAGE_VERSION[language as LanguageKey],
      files: [
        {
          content: sourceCode,
        },
      ],
    });
    return response.data;
  } catch (error) {
    console.error("Error executing code:", error);
    throw error;
  }
}