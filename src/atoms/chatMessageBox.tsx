import styled from "styled-components";
import {possessionType} from "@/types/messageType";

interface ChatMessageBoxType {
    className?: string;
    text: string;
    possession: possessionType;
}

interface ChatMessageBoxStyleType {
    possession: possessionType;
}

const ChatMessageBoxStyle = styled.div<ChatMessageBoxStyleType>`
    border: 1px solid black;
    border-radius: 10px;
    background-color: ${props => props.possession === "user" ? "skyblue" : "white"};
    float: ${props => props.possession === "user" ? "right" : "left"};
`;

const ChatMessageBox = ({ className, text, possession }: ChatMessageBoxType) => {
    return (
        <ChatMessageBoxStyle className={className} possession={possession}>
            {text}
        </ChatMessageBoxStyle>
    )
}

export { ChatMessageBox };