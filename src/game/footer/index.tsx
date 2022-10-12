import { useGameContext } from 'contexts/game.context';
import { Button } from 'game/styles';
import { setIsInfoOpened, setOpenedInventory } from 'hoc/withGameContext/actions';
import React from 'react';
import { Effects } from './effects';
import { Stats } from './stats';
import { FooterContainer } from './styles';
import { Turn } from './turn';

export const Footer = () => {
  const { dispatch } = useGameContext();

  const onInventoryBtnClick = () => {
    dispatch(setOpenedInventory(true));
  };

  const onShowInfoBtnClick = () => {
    dispatch(setIsInfoOpened(true));
  };

  return (
    <FooterContainer>
      <Button onClick={onShowInfoBtnClick}>Показать правила</Button>
      <Button onClick={onInventoryBtnClick}>Открыть инвентарь</Button>
      <Stats />
      <Effects />
      <Turn />
    </FooterContainer>
  );
};
