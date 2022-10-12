import { Button, ModalActions, ModalBackdrop, ModalHeader } from 'game/styles';
import { RulesItem, RulesList, StyledModalContainer, Text } from './styles';
import React from 'react';
import { MAX_PLAYER_ENERGY, ZOMBIE_AGRO_RADIUS } from 'constants/entity-stats.const';
import { useGameContext } from 'contexts/game.context';
import { STORAGE_KEYS } from 'constants/storage-keys.const';
import { setIsInfoOpened } from 'hoc/withGameContext/actions';

export const Info = () => {
  const { isInfoOpened, dispatch } = useGameContext();

  const onCloseBtnClick = () => {
    localStorage.setItem(STORAGE_KEYS.WAS_INFO_SHOWN, 'yes');
    dispatch(setIsInfoOpened(false));
  };

  if (!isInfoOpened) {
    return null;
  }

  return (
    <ModalBackdrop>
      <StyledModalContainer>
        <ModalHeader>Об игре</ModalHeader>
        <Text>
          <b>Дисклеймер:</b> эта игра была намеренно сделана максимально примитивной, чтобы на её создание не
          потребовалось большое количество времени. Суть этого проекта заключается в том, чтобы продемонстрировать код,
          который я пишу.
        </Text>
        <Text>
          <b>Правила игры:</b>
          <RulesList>
            <RulesItem>Ваш персонаж представлен синей иконкой, а зомби - зеленой</RulesItem>
            <RulesItem>Вы можете ходить только по горизонтали и вертикали</RulesItem>
            <RulesItem>На каждый ход вам отведено {MAX_PLAYER_ENERGY} единиц энергии</RulesItem>
            <RulesItem>
              Каждое действие, будь то перемещение или атака, требует определенное количество энергии, зависящее от веса
              инвентаря персонажа
            </RulesItem>
            <RulesItem>
              Чтобы атаковать зомби, необходимо передвинуться на соседнюю с ним клетку, а также иметь экипированное
              оружие
            </RulesItem>
            <RulesItem>
              Чтобы экипировать оружие, нужно зайти в инвентарь и нажать на соответствующую кнопку "Экипировать"
              напротив оружия
            </RulesItem>
            <RulesItem>
              Внутри дома, слева от двери есть сундук. Чтобы его открыть, нужно наступить на ту же клетку, где он
              находится, после чего нажать на него. Если у вас будет достаточное количество энергии, откроется окно с
              предметами внутри сундука. Так как добыча генерируется рандомно при перезагрузке страницы, вам может не
              повезти и оружия или других предметов может не оказаться.
            </RulesItem>
            <RulesItem>
              По завершении вашего хода, зомби будут двигаться в вашу сторону и атаковать вас только если вы достижимы
              по траектории движения и находитесь в пределах {ZOMBIE_AGRO_RADIUS} клеток.
            </RulesItem>
            <RulesItem>
              С некоторым шансом зомби при атаке могут наложить на вас негативные эффекты: кровотечение и болезнь. Они
              будут снижать количество вашего здоровья каждый ход.
            </RulesItem>
            <RulesItem>
              Чтобы вылечить кровотечение, нужно использовать бинт. Чтобы вылечить болезнь - витамины.
            </RulesItem>
          </RulesList>
        </Text>
        <ModalActions>
          <Button onClick={onCloseBtnClick}>Закрыть</Button>
        </ModalActions>
      </StyledModalContainer>
    </ModalBackdrop>
  );
};
