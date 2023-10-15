
"use client"
import { useState, useRef, useEffect } from "react";
import { Input, Box, Avatar, Text, Flex } from '@chakra-ui/react';

const Main = () => {
    const [input, setInput] = useState("");
    const [disabled, setDisabled] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }


    const [chatbotOutput, setChatbotOutput] = useState([{ user: "AI", message: `Hello, what's been on your mind? Tell me about your problems, I may be able to help you.` }]);
    
    useEffect(() => {
        scrollToBottom()
    }, [chatbotOutput]);



    async function handleSubmit(e:any) {
        e.preventDefault();
        if (input === "") return;

        let chatLogNew = [...chatbotOutput, { user: "User", message: `${input}`}];
        setChatbotOutput(chatLogNew);
        setDisabled(true);
        setInput("");

        interface PromptResponses {
            [key:string] : string;
        }

        const promptResponses:PromptResponses = {
            "hello": "Hello! How can I assist you today?",
            "how are you": "I'm just a computer program, but thanks for asking!",
            "can you help me with my assignment?": "Of course! Ask away!",
            // Add more prompts and responses as needed
          };

        let responseMessage = input; // Default to the user's input

        // Check if the input matches a specific prompt in the mapping
        if (promptResponses[input.toLowerCase()]) {
          responseMessage = promptResponses[input.toLowerCase()];
        }
    

        const messages = chatLogNew.map((data) => `${data.user}: ${data.message}`).join("\n");

        const response = await fetch("http://localhost:8080", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: messages
            })
        });
        const data = await response.json();

        console.log(responseMessage)
        setChatbotOutput([...chatLogNew, { user: "AI", message: responseMessage }]);
        scrollToBottom()
        setDisabled(false);
    }

    return (
        <Flex flexDirection='column' height='100%'>
            {/* <Box flexGrow='1' p='20px' bgImage='linear-gradient(135deg, #E0F2FF 0%, #FFF0F2 100%)' overflowY='auto'> */}
            <Box flexGrow='1' p='20px' overflowY='auto'>    
                <Flex flexDirection='column'>
                    {chatbotOutput.map((data, index) => 
                        <Flex m='20px 10px' key={index} className={"MessageLogs"} alignItems='center'>
                            <Avatar bgColor='#404E4D' color='white'  src={data.user === "User" ? '' : 
                            'https://media.discordapp.net/attachments/1162118322175885315/1162782557218291732/Untitled_Artwork_2.png?ex=653d30a5&is=652abba5&hm=c03f455e7e384056336e35db357902abe81bada906824c67ba363e4e4b3813a6&=&width=451&height=703'} />
                            <Text ml='20px' flexGrow='1' fontSize='18px' fontFamily="'Nunito', sans-serif">{data.message}</Text>
                        </Flex>
                    )}
                    <Box mt='7%' ref={messagesEndRef} />
                </Flex>
            </Box>
            <Box bgColor='#e0e0e8' p='20px' opacity='0.7'>
                <form onSubmit={handleSubmit}>
                    <Input type="text" size='lg' value={input} bgColor='white' onChange={disabled ? () => {} : (e) => setInput(e.target.value)} placeholder="Enter a prompt"/>
                </form>
            </Box>
        </Flex>
    )
}

export default Main;