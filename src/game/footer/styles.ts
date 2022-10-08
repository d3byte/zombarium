import styled from "styled-components";

export const StatsContainer = styled.ul`
    list-style: none;
    display: inline-flex;
    column-gap: 10px;
    margin: 0;
    padding: 0;
    align-items: center;
`;

export const StatsItem = styled.li``;

export const TurnContainer = styled.div`
    display: inline-flex;
    column-gap: 20px;
    align-items: center;
    margin-left: auto;
`;

export const TurnText = styled.div`
    font-weight: bold;
`;

export const FooterContainer = styled.footer`
    display: flex;
    align-items: center;
    column-gap: 20px;
    box-sizing: border-box;
    padding: 20px;
    background: #818AA3;
    overflow: hidden;
    border-top: 1px solid #4D5061;
    color: #0D090A;
`;