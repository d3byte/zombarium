import React from 'react';
import { useTile } from 'hooks/use-tile';
import { EntityPositionInterface, EntityTypeEnum } from 'types/entities/entity.type';
import { TileInterface } from 'types/game/tile.type';
import { TileContainer, Object, TileWrapper, Entity } from './styles';
import { ReactComponent as PlayerSvg } from 'assets/Player.svg';
import { ReactComponent as ZombieSvg } from 'assets/Zombie.svg';
import { TileInfo } from './info';
import { usePlayerContext } from 'contexts/player.context';
import { ZombieInterface } from 'types/entities/zombie.type';
import { ObjectInterface } from 'types/objects/object.type';

export interface TileProps {
    tile: TileInterface;
    position: EntityPositionInterface;
}

const getEntitySvg = (type: EntityTypeEnum) => {
    switch (type) {
        case EntityTypeEnum.PLAYER:
            return <PlayerSvg />;
        case EntityTypeEnum.ZOMBIE:
            return <ZombieSvg />;
        default:
            return null;
    }
}

export const Tile = ({ tile, position }: TileProps) => {
    const { walkTo, attack, lootObject } = usePlayerContext();
    const { entity, isEntityPlayer, canLootObject, isAllowedToWalkOn, isAttackPossible, energyForWalk, ...rest } = useTile(position, tile);

    const onClick = () => {
        if (isAttackPossible && entity) {
            attack(entity as ZombieInterface);
        } else if (isAllowedToWalkOn) {
            walkTo(position, energyForWalk);
        }
    }

    const onObjectClick = (e: any) => {
        e.stopPropagation();
        if (canLootObject) {
            lootObject(tile.object as ObjectInterface);
        }
    }

    return (
        <TileWrapper type={tile.type}>
            <TileContainer onClick={onClick}>
                {tile.object && <Object isSameTileWithPlayer={isEntityPlayer} canLoot={canLootObject} onClick={onObjectClick} />}
                {entity && <Entity>{getEntitySvg(entity.type)}</Entity>}
                <TileInfo entity={entity} isEntityPlayer={isEntityPlayer} isAllowedToWalkOn={isAllowedToWalkOn} isAttackPossible={isAttackPossible} energyForWalk={energyForWalk} {...rest} />
            </TileContainer>
        </TileWrapper>
    );
}