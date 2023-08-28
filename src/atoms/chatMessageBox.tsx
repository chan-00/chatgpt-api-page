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

const ChatMessageBoxContainerStyle = styled.div<ChatMessageBoxStyleType>`
  text-align: ${props => props.possession === "user" ? "right" : "left"};
`

const ChatMessageBoxStyle = styled.span<ChatMessageBoxStyleType>`
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px;
    background-color: ${props => props.possession === "user" ? "skyblue" : "white"};
`;

const ChatMessageBox = ({ className, text, possession }: ChatMessageBoxType) => {
    return (
        <ChatMessageBoxContainerStyle possession={possession}>
            <ChatMessageBoxStyle className={className} possession={possession}>
                {text}
            </ChatMessageBoxStyle>
        </ChatMessageBoxContainerStyle>
    )
}

export { ChatMessageBox };