import { Box, Button, Text, useToast } from '@chakra-ui/react'
import React, { useState } from 'react'
import { LanguageKey } from './CodeEditor'
import { executeCode } from './api/codeExecute'


type Props = {
    editorRef: React.MutableRefObject<any>
    language: string
}

const Output = (props: Props) => {
    const toast = useToast()
    const [output, setOutput] = useState<string[]>()
    const [isLoading, setisLoading] = useState(false);
    const [isError, setisError] = useState(false)

    const runCode = async () => {
        const sourceCode = props.editorRef.current.getValue()
        if (!sourceCode) return;

        try {
            setisLoading(true);
            const { run: result } = await executeCode(props.language, sourceCode);
            setOutput(result.output.split("\n"))
            result.stderr ? setisError(true) : setisError(false);
        } catch (error: any) {
            console.log(error);
            toast({
                "title": "An error occured.",
                description: error.message || "Unable to run code.",
                status: "error",
                duration: 6000,
            })
        } finally {
            setisLoading(false);
        }
    }

    return (
        <Box w={"50%"}>
            <Text mb={2} fontSize={'lg'}>Output</Text>
            <Button variant={'outline'} colorScheme='green' mb={4} onClick={runCode} isLoading={isLoading}>Run Code</Button>
            <Box height={"75vh"} color={isError ? "red.400" : ""} p={2} border={"1px solid"} borderRadius={4} borderColor={isError ? "red.500" : "#333"}>
                {output ? output.map((line, i) => <Text key={i}>{line}</Text>) : `Click "Run Code" to see the output here `}

            </Box>
        </Box>
    )
}

export default Output