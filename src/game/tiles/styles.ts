import styled, { css } from 'styled-components';
import { EntityTypeEnum } from 'types/entities/entity.type';
import { TileTypeEnum } from 'types/game/tile.type';
import { ReactComponent as EnergyIcon } from 'assets/energy.svg';
import { ReactComponent as AttackIcon } from 'assets/attack.svg';

export const Grid = styled.div<{ cols: number; }>`
    display: grid;
    grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
`;

const highlightOnHover = (color?: string) => css`
    border: 1px solid transparent;

    &:hover {
        border-color: ${color || 'black'};
        cursor: pointer;
    }
`;

const tileTypeBasedCss = {
    [TileTypeEnum.DOOR]: css`
        background: #896A67;

        &:after {
            position: absolute;
            content: '';
            width: 25%;
            height: 10px;
            border-radius: 2px;
            bottom: 10px;
            right: 10px;
            background-color: black;
        }
    `,
    [TileTypeEnum.FLOOR]: css``,
    [TileTypeEnum.WALL_HORIZONTAL]: css`
        background: #ccc;
    `,
    [TileTypeEnum.WALL_VERTICAL]: css`
        background: #ccc;
    `,
};

const entityTypeBasedCss = {
    [EntityTypeEnum.PLAYER]: css``,
    [EntityTypeEnum.ZOMBIE]: css``,
};

export const TileWrapper = styled.div<{ type: TileTypeEnum; }>`
    position: relative;
    width: 100%;
    box-sizing: border-box;

    ${({ type }) => tileTypeBasedCss[type]}

    &:before {
        content: "";
        height: 0;
        display: inline-block;
        padding-top: 100%;
        width: 1px;
        position: relative;
    }
`;

export const Object = styled.div<{ canLoot: boolean; isSameTileWithPlayer: boolean; }>`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;
    height: 50%;
    background: #896A67;
    margin-top: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    ${({ canLoot, isSameTileWithPlayer }) => highlightOnHover((!isSameTileWithPlayer || canLoot) ? '' : '#FF4B3E')}

    &:empty {
        width: 100%;
    }

    &:before {
        position: absolute;
        content: '';
        box-sizing: border-box;
        padding: 0 10px;
        width: calc(100% - 20px);
        height: 10px;
        border-radius: 5px;
        background-color: black;
    }
`;

export const Entity = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    & > svg {
        width: 50%;
        height: 50%;
    }
`;

export const TileInfoWrapper = styled.div<{ notEnoughEnergy: boolean; }>`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    cursor: pointer;
    border: 2px solid black;
    box-sizing: border-box;
    z-index: 2;
    ${({ notEnoughEnergy }) => notEnoughEnergy ? 'border-color: #FF4B3E;' : ''}
`;

export const TileInfoContainer = styled.div`
    flex-grow: 1;
`;

export const TileInfoFooter = styled.footer`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 5px;
    width: 100%;
    bottom: -25px;
    box-sizing: border-box;
    padding: 5px;
`;

export const TileContainer = styled.div`
    display: flex;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;

    &:not(:hover) ${TileInfoWrapper} {
        display: none;
    }

    & ${Object} + ${Entity} {
        position: absolute;
        top: 0;
    }
`;

export const StyledEnergyIcon = styled(EnergyIcon)`
    width: 14px;
    height: 14px;
`;

export const StyledAttackIcon = styled(AttackIcon)`
    width: 14px;
    height: 14px;
`;
