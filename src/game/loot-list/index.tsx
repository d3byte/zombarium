import { useGameContext } from 'contexts/game.context';
import { usePlayerContext } from 'contexts/player.context';
import { Button, ModalActions, ModalBackdrop, ModalContainer, ModalHeader } from 'game/styles';
import { useLootList } from 'hooks/use-loot-list';
import { ConsumableInterface } from 'types/items/consumable.type';
import { ItemTypeEnum } from 'types/items/item.type';
import { WeaponInterface } from 'types/items/weapon.type';
import { StyledButton, LootListItems, LootListItem, EmptyInventory, LootItemAction } from './styles';

export const LootList = () => {
  const { openedObject } = useGameContext();
  const {
    player: { equippedWeapon },
  } = usePlayerContext();
  const { isInventory, lootList, takeAll, takeLootItem, closeLootList, applyConsumable, setPlayerWeapon, deleteItem } =
    useLootList();

  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>{isInventory ? 'Инвентарь' : openedObject?.title}</ModalHeader>
        {lootList.length === 0 && <EmptyInventory>Нет предметов</EmptyInventory>}
        <LootListItems>
          {lootList.map((item) => (
            <LootListItem key={item.id}>
              <b>{item.title}</b>
              <span>вес: {item.weight}</span>
              <LootItemAction>
                {!isInventory && <Button onClick={() => takeLootItem(item)}>Взять</Button>}
                {isInventory && item.type === ItemTypeEnum.CONSUMABLE && (
                  <Button onClick={() => applyConsumable(item as unknown as ConsumableInterface)}>Использовать</Button>
                )}
                {isInventory && item.type === ItemTypeEnum.WEAPON && (
                  <Button onClick={() => setPlayerWeapon(item as unknown as WeaponInterface)}>
                    {equippedWeapon?.id === item.id ? 'Снять' : 'Экипировать'}
                  </Button>
                )}
                {isInventory && <Button onClick={() => deleteItem(item)}>Выбросить</Button>}
              </LootItemAction>
            </LootListItem>
          ))}
        </LootListItems>
        <ModalActions>
          {!isInventory && lootList.length !== 0 && <StyledButton onClick={takeAll}>Взять все</StyledButton>}
          <StyledButton closeBtn onClick={closeLootList}>
            Закрыть
          </StyledButton>
        </ModalActions>
      </ModalContainer>
    </ModalBackdrop>
  );
};
