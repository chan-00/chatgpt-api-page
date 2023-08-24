import styled from "styled-components";
import {Input} from "@/atoms/input";
import {SubmitButton} from "@/atoms/submitButton";
import React from "react";
import {messageType} from "@/types/messageType";

interface ChatInputContainerType {
    className?: string;
    setMessageData: React.SetStateAction<messageType[]>;
}

const ChatInputContainerStyle = styled.div`
    width: 100%;
    border: 1px solid black;
`;

const ChatInputContainer = ({ className, setMessageData }: ChatInputContainerType) => {
    return (
        <ChatInputContainerStyle className={className}>
            <Input placeholderText={"채팅 내용을 입력해 주세요."} type={"text"} />
            <SubmitButton text={"Chat"} />
        </ChatInputContainerStyle>
    )
}

export { ChatInputContainer };