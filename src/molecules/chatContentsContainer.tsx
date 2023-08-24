import styled from "styled-components";
import {messageType} from "@/types/messageType";
import {ChatMessageBox} from "@/atoms/chatMessageBox";

interface ChatContentsContainerType {
    className?: string;
    message: messageType[];
}

const ChatContentsContainerStyle = styled.div`
    border: 1px solid black;
`;

const ChatContentsContainer = ({ className, message }: ChatContentsContainerType) => {

    return (
        <ChatContentsContainerStyle className={className}>
            {message.map((messageData: messageType, index: number) => (
                <ChatMessageBox key={index} text={messageData[0]} possession={messageData[1]} />
            ))}
        </ChatContentsContainerStyle>
    )
}

export { ChatContentsContainer };