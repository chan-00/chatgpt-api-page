import styled from "styled-components";
import React from "react";
import {Button} from "@/atoms/button";

interface SubmitButtonType {
    text: string;
    handleClickEvent?: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className?: string;
}

const SubmitButtonStyle = styled(Button)`
    background-color: blue;
    color: white;
`;

const SubmitButton = ({text, handleClickEvent, className}: SubmitButtonType) => {

    return (
        <SubmitButtonStyle text={text} handleClickEvent={handleClickEvent} className={className} />
    );
};

export { SubmitButton }