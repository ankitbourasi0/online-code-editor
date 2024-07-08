import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, color, Menu, MenuButton, MenuItem, MenuList,Text } from '@chakra-ui/react'
import React from 'react'
import { LANGUAGE_VERSION } from "../app/constant"
import { LanguageKey } from './CodeEditor'
type Props = {
    language: string,
    onSelect: (language: LanguageKey) => void
}

const languages = Object.entries(LANGUAGE_VERSION) as [LanguageKey, string][];

const LanguageSelector = (props: Props) => {
    return (
        <Box ml={2} mb={4}>
            <Menu isLazy>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {props.language}
                </MenuButton>
                <MenuList maxHeight={"300px"} overflowY={"auto"} >
                  {languages.map(([lang,version])=>(
                    <MenuItem
                     color={lang === props.language ? "blue.500" : ""} 
                     bg={lang === props.language ? "gray.200" : "transparent"} 
                     _hover={{color:"blue.500",bg:"gray.200"}}
                     key={lang} 
                     onClick={()=>props.onSelect(lang)}>
                        {lang} 
                        &nbsp;
                        <Text as="span" color="gray.600" fontSize="sm">
                            {version}
                        </Text>
                    </MenuItem>
                  ))}
                </MenuList>
            </Menu>
        </Box>
    )
}

export default LanguageSelector