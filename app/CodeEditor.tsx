
import { Box, HStack } from '@chakra-ui/react';
import { Editor } from '@monaco-editor/react'
;
import React, { useRef, useState } from 'react'
import LanguageSelector from './LanguageSelector';
import ThemeSelector from "./ThemeSelector"
import { CODE_SNIPPETS, LANGUAGE_VERSION} from './constant';
import Output from './Output';
type Props = {}



export type LanguageKey = keyof typeof LANGUAGE_VERSION;
export type CodeSnippetKey = keyof typeof CODE_SNIPPETS;
const CodeEditor = (props: Props) => {
  
 
  const [value, setValue] = useState<string>(CODE_SNIPPETS.javascript)
  const [language, setLanguage] = useState<LanguageKey>('javascript')
  const editorRef = useRef(null);
  const [theme, setTheme] = useState('vs-dark');

  const onMount = (editor:any) =>{
      editorRef.current = editor
      editor.focus();
  }

  const onSelect = (newlanguage:LanguageKey)=>{
    setLanguage(newlanguage)
    setValue(CODE_SNIPPETS[newlanguage as CodeSnippetKey])
  }
  return (
 <Box>
  <HStack spacing={4}>
  <Box width={"50%"}>
    <LanguageSelector language={language} onSelect={onSelect}/>
    <ThemeSelector  theme={theme} onSelect={setTheme}/>
    <Editor
      height="75vh"
      theme={theme}
      
      language={language}
      defaultValue={CODE_SNIPPETS[language as CodeSnippetKey]}
      value={value}
      onMount={onMount}
      onChange={(value) => setValue(value || "")}
    />
  </Box>
  <Output editorRef={editorRef} language={language}/>
  </HStack>
 </Box>
  )

}

export default CodeEditor