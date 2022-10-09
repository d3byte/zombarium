import { usePlayerContext } from 'contexts/player.context';
import { StatsContainer, StatsItem } from './styles';

export const Stats = () => {
  const {
    player: { stats },
    inventoryWeight,
  } = usePlayerContext();
  return (
    <StatsContainer>
      <StatsItem>Здоровье: {stats.hp}</StatsItem>
      <StatsItem>Энергия: {stats.energy}</StatsItem>
      <StatsItem>Голод: {stats.hunger}</StatsItem>
      <StatsItem>Вес инвентаря: {inventoryWeight.toFixed(2)}</StatsItem>
    </StatsContainer>
  );
};
