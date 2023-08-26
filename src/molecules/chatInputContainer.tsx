import styled from "styled-components";
import {Input} from "@/atoms/input";
import {SubmitButton} from "@/atoms/submitButton";
import React from "react";

interface ChatInputContainerType {
    className?: string;
    handleEnterKeyPressed?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    handleClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const ChatInputContainerStyle = styled.div`
    border: 1px solid black;
  
    display: grid;
    grid-template-columns: 80% 20%;
`;

const ChatInputContainer = ({ className, handleEnterKeyPressed, handleClickEvent, value, setValue }: ChatInputContainerType) => {

    const handleOnChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <ChatInputContainerStyle className={className}>
            <Input placeholderText={"채팅 내용을 입력해 주세요."}
                   type={"text"}
                   handleKeyDownEvent={handleEnterKeyPressed}
                   handleChangeEvent={handleOnChangeEvent}
                   value={value}/>
            <SubmitButton text={"Chat"}
                          handleClickEvent={handleClickEvent}/>
        </ChatInputContainerStyle>
    )
}

export { ChatInputContainer };