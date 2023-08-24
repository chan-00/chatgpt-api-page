import styled from "styled-components";
import {Input} from "@/atoms/input";
import {SubmitButton} from "@/atoms/submitButton";
import React from "react";

interface ChatInputContainerType {
    className?: string;
    handleEnterKeyPressed?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    value: string;
}

const ChatInputContainerStyle = styled.div`
    width: 100%;
    border: 1px solid black;
`;

const ChatInputContainer = ({ className, handleEnterKeyPressed, value }: ChatInputContainerType) => {

    return (
        <ChatInputContainerStyle className={className}>
            <Input placeholderText={"채팅 내용을 입력해 주세요."}
                   type={"text"}
                   handleKeyDownEvent={handleEnterKeyPressed}
                   value={value}/>
            <SubmitButton text={"Chat"} />
        </ChatInputContainerStyle>
    )
}

export { ChatInputContainer };