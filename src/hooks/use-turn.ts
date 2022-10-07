import { useGameContext } from 'contexts/game.context';
import { refreshEntityEnergy } from 'hoc/withGameContext/actions';
import { useEffect } from 'react';
import { EntityTypeEnum } from 'types/entities/entity.type';

export const useTurn = () => {
  const { turn, dispatch } = useGameContext();

  useEffect(() => {
    if (turn === EntityTypeEnum.ZOMBIE) {
      dispatch(refreshEntityEnergy());
      // do something
    }
  }, [turn]);

  return {};
};
