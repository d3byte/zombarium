import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
    }

    * {
        font-family: Roboto, sans-serif;
    }
`;

export const TilesWrapper = styled.div`
    flex-grow: 1;
    overflow: auto;
    box-sizing: border-box;
    padding-bottom: 100px;
`;

export const GameLayout = styled.section`
    display: flex;
    flex-direction: column;
    position: relative;
    box-sizing: border-box;
    height: 100vh;
`;

export const Button = styled.button.attrs({ type: 'button' })`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: unset;
    box-shadow: none;
    outline: none;
    background: white;;
    box-sizing: border-box;
    padding: 10px 20px;
    min-width: 100px;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    width: auto;

    &:hover {
        background: #DEE3E1;
    }
`;