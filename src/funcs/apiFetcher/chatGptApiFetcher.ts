import React from "react";
import {messageType} from "@/types/messageType";

type setChatMessageType = React.Dispatch<React.SetStateAction<messageType[]>>;

const chatGptApiFetcher = (inputValue: string, setChatMessage: setChatMessageType) => {
    setChatMessage(prevState => [...prevState, ["안녕하세요", "ai"]]);
}

export { chatGptApiFetcher };