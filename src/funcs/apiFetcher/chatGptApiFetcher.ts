import React from "react";
import {messageType} from "@/types/messageType";

type setChatMessageType = React.Dispatch<React.SetStateAction<messageType[]>>;

const chatGptApiFetcher = async (inputValue: string, setChatMessage: setChatMessageType) => {
    setChatMessage(prevState => [...prevState, ["안녕하세요", "ai"]]);

    /*
    const apiUrl: string = "https://api.openai.com/v1/chat/completions";
    const apiObj: Object = {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: inputValue }],
        })
    };

    const response = await fetch(apiUrl, apiObj);
    const data = await response.json();

    setChatMessage(prevState => [...prevState, [data.message.content, "ai"]]);
     */
}

export { chatGptApiFetcher };