import styled from "styled-components";
import React, {useState} from "react";
import {ChatContentsContainer} from "@/molecules/chatContentsContainer";
import {messageType} from "@/types/messageType";
import {ChatInputContainer} from "@/molecules/chatInputContainer";
import {chatGptApiFetcher} from "@/funcs/apiFetcher/chatGptApiFetcher";

interface ChatAreaType {
    className?: string;
}

const ChatAreaStyle = styled.div`
    width: 400px;
    height: 500px;
  
    display: grid;
    grid-template-rows: 1fr 30px;
`;

const ChatArea = ({ className }: ChatAreaType) => {

    const [ inputValue, setInputValue ] = useState<string>('');
    const [ chatMessage, setChatMessage ] = useState<messageType[]>([]);

    const handleClickEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
        if(inputValue.length !== 0) {
            setChatMessage(prevState => [...prevState, [inputValue, "user"]]);
            chatGptApiFetcher(inputValue, setChatMessage);
            setInputValue("");
        }
        else {
            alert("채팅 내용을 입력하세요.");
        }
    }

    const handleEnterKeyPressedEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter") {
            if(inputValue.length !== 0) {
                setChatMessage(prevState => [...prevState, [inputValue, "user"]]);
                chatGptApiFetcher(inputValue, setChatMessage);
                setInputValue("");
            }
            else if(inputValue.length === 0) {
                alert("채팅 내용을 입력하세요.");
            }
        }
    }

    return (
        <ChatAreaStyle className={className}>
            <ChatContentsContainer message={chatMessage} />
            <ChatInputContainer value={inputValue}
                                setValue={setInputValue}
                                handleClickEvent={handleClickEvent}
                                handleEnterKeyPressed={handleEnterKeyPressedEvent} />
        </ChatAreaStyle>
    );
}

export { ChatArea };