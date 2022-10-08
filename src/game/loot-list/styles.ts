import { Button } from "game/styles";
import styled from "styled-components";

export const LootListContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 50%;
    height: 50%;
    padding: 20px;
    background: white;
    border-radius: 6px;
    box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const LootListBackdrop = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
`;

export const LootListActions = styled.footer`
    margin-top: auto;
    display: flex;
    align-items: center;
    column-gap: 20px;
`;

export const LootListHeader = styled.header`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 32px;
`;

export const LootListItems = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const LootListItem = styled.li`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    font-size: 14px;
    margin-bottom: 10px;
    justify-content: space-between;
`;

export const EmptyInventory = styled.div`
    font-weight: 500;
    font-size: 16px;
`;

export const StyledButton = styled(Button)<{ closeBtn?: boolean; }>`
    && {
        background-color: ${({ closeBtn }) => closeBtn ? '#D8E1E9' : '#7392B7'};

        &:hover {
            background-color: ${({ closeBtn }) => closeBtn ? '#B1C3D3' : '#456387'};
        }
    }
`;

export const LootItemAction = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 20px;
`;