import { Button } from 'game/styles';
import styled from 'styled-components';

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
  align-items: center;
`;

export const EmptyInventory = styled.div`
  font-weight: 500;
  font-size: 16px;
`;

export const StyledButton = styled(Button)<{ closeBtn?: boolean }>`
  && {
    background-color: ${({ closeBtn }) => (closeBtn ? '#D8E1E9' : '#7392B7')};

    &:hover {
      background-color: ${({ closeBtn }) => (closeBtn ? '#B1C3D3' : '#456387')};
    }
  }
`;

export const LootItemAction = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 20px;
`;
