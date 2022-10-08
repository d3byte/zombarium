import { useGameContext } from "contexts/game.context";
import { Button } from "game/styles";
import { setOpenedInventory } from "hoc/withGameContext/actions";
import React from "react"
import { Effects } from "./effects";
import { Stats } from "./stats";
import { FooterContainer } from "./styles";
import { Turn } from "./turn";

export const Footer = () => {
    const { dispatch } = useGameContext();

    const onBtnClick = () => {
        dispatch(setOpenedInventory(true));
    };

    return (
        <FooterContainer>
            <Button onClick={onBtnClick}>Открыть инвентарь</Button>
            <Stats />
            <Effects />
            <Turn />
        </FooterContainer>
    );
}