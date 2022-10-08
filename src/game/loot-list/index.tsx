import { useGameContext } from "contexts/game.context";
import { usePlayerContext } from "contexts/player.context";
import { Button } from "game/styles";
import { useLootList } from "hooks/use-loot-list";
import { ConsumableInterface } from "types/items/consumable.type";
import { ItemTypeEnum } from "types/items/item.type";
import { WeaponInterface } from "types/items/weapon.type";
import { LootListBackdrop, LootListContainer, LootListActions, StyledButton, LootListHeader, LootListItems, LootListItem, EmptyInventory, LootItemAction } from "./styles";

export const LootList = () => {
    const { openedObject } = useGameContext();
    const { player: { equippedWeapon } } = usePlayerContext();
    const { isInventory, lootList, takeAll, takeLootItem, closeLootList, applyConsumable, setPlayerWeapon, deleteItem } = useLootList();

    return (
        <LootListBackdrop>
            <LootListContainer>
                <LootListHeader>{isInventory ? 'Инвентарь' : openedObject?.title}</LootListHeader>
                {lootList.length === 0 && <EmptyInventory>Нет предметов</EmptyInventory>}
                <LootListItems>
                    {lootList.map(item => (
                        <LootListItem key={item.id}>
                            <b>{item.title}</b>
                            <span>вес: {item.weight}</span>
                            <LootItemAction>
                                {!isInventory && <Button onClick={() => takeLootItem(item)}>Взять</Button>}
                                {isInventory && item.type === ItemTypeEnum.CONSUMABLE && <Button onClick={() => applyConsumable(item as unknown as ConsumableInterface)}>Использовать</Button>}
                                {isInventory && item.type === ItemTypeEnum.WEAPON && (
                                    <Button onClick={() => setPlayerWeapon(item as unknown as WeaponInterface)}>{equippedWeapon?.id === item.id ? 'Снять' : 'Экипировать'}</Button>
                                )}
                                {isInventory && <Button onClick={() => deleteItem(item)}>Выбросить</Button>}
                            </LootItemAction>
                        </LootListItem>
                    ))}
                </LootListItems>
                <LootListActions>
                    {!isInventory && <StyledButton onClick={takeAll}>Взять все</StyledButton>}
                    <StyledButton closeBtn onClick={closeLootList}>Закрыть</StyledButton>
                </LootListActions>
            </LootListContainer>
        </LootListBackdrop>
    );
};
