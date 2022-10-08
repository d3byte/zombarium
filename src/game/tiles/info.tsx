import { useGameContext } from "contexts/game.context";
import { EntityInterface } from "types/entities/entity.type";
import { StyledAttackIcon, StyledEnergyIcon, TileInfoContainer, TileInfoFooter, TileInfoWrapper } from "./styles";

interface TileInfoProps {
    isEntityPlayer: boolean;
    isAllowedToWalkOn: boolean;
    energyForWalk: number;
    hasEnoughEnergyToWalkOn: boolean;
    isAttackPossible: boolean;
    energyForAttack: number;
    hasEnoughEnergyToAttack: boolean;
    entity?: EntityInterface;
}

export const TileInfo = ({ entity, isEntityPlayer, isAllowedToWalkOn, energyForWalk, hasEnoughEnergyToWalkOn, isAttackPossible, energyForAttack, hasEnoughEnergyToAttack }: TileInfoProps) => {
    const { walkMode } = useGameContext();

    if (isEntityPlayer || !walkMode || (!isAttackPossible && !isAllowedToWalkOn)) {
        return null;
    }

    return (
        <TileInfoWrapper notEnoughEnergy={isAttackPossible ? !hasEnoughEnergyToAttack : !hasEnoughEnergyToWalkOn}>
            <TileInfoContainer>
                {isAttackPossible && <header>Health: {entity?.stats?.hp}</header>}
                <TileInfoFooter>
                    {isAttackPossible ? energyForAttack : energyForWalk}
                    <StyledEnergyIcon />
                    {isAttackPossible && <StyledAttackIcon />}
                </TileInfoFooter>
            </TileInfoContainer>
        </TileInfoWrapper>
    )
};
