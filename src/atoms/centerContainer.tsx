import React from "react";
import styled from "styled-components";

interface CenterContainerType {
    className ?: string;
    children : React.ReactNode;
}

const CenterContainerStyle = styled.div`
    display: flex;
    justify-content: center;
`;

const CenterContainer = ({ className, children }: CenterContainerType) => {

    return (
        <CenterContainerStyle className={className}>
            {children}
        </CenterContainerStyle>
    )
}

export { CenterContainer };