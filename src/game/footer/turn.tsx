import { useGameContext } from "contexts/game.context";
import { Button } from "game/styles";
import { useTurn } from "hooks/use-turn";
import { EntityTypeEnum } from "types/entities/entity.type";
import { TurnContainer, TurnText } from "./styles";

export const Turn = () => {
    const { turn } = useGameContext();
    const { endTurn } = useTurn();
    return (
        <TurnContainer>
            {turn === EntityTypeEnum.PLAYER && <Button onClick={() => endTurn(EntityTypeEnum.ZOMBIE)}>Закончить ход</Button>}
            <TurnText>{turn === EntityTypeEnum.PLAYER ? 'Ваш ход': 'Ход зомби'}</TurnText>
        </TurnContainer>
    );
}