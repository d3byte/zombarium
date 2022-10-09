import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

export const DAMAGE_ANIMATION_DURATION = 2000;

export const GlobalStyles = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
    }

    * {
        font-family: Roboto, sans-serif;
    }
`;

const damageKeyframes = keyframes`
    0% {
        border-color: white;
    }

    50% {
        border-color: red;
    }

    100% {
        border-color: white;
    }
`;

export const TilesWrapper = styled.div<{ showDamageAnimation?: boolean }>`
  flex-grow: 1;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 100px;
  border: 4px solid white;
  ${({ showDamageAnimation }) =>
    showDamageAnimation
      ? css`
          animation: ${DAMAGE_ANIMATION_DURATION / 1000}s ${damageKeyframes} ease-in-out;
        `
      : ''}
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
  background: white;
  box-sizing: border-box;
  padding: 10px 20px;
  min-width: 100px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: bold;
  width: auto;

  &:hover {
    background: #dee3e1;
  }
`;
