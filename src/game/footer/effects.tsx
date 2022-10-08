import React from 'react';
import { ReactComponent as BleedingIcon } from 'assets/bleeding.svg';
import { ReactComponent as IllnessIcon } from 'assets/illness.svg';
import { usePlayerContext } from 'contexts/player.context';
import { DebuffTypeEnum } from 'types/effects/debuff.type';
import { EffectsContainer, GetStyledIcon } from './styles';

const Bleeding = GetStyledIcon(BleedingIcon);
const Illness = GetStyledIcon(IllnessIcon);

const mapDebuffToIcon = {
    [DebuffTypeEnum.BLEED]: <Bleeding title="Кровотечение" />,
    [DebuffTypeEnum.ILLNESS]: <Illness title="Болезнь" />,
};

export const Effects = () => {
    const { player: { debuffs } } = usePlayerContext();

    return (
        <EffectsContainer>
            {debuffs.map(debuff => mapDebuffToIcon[debuff.type])}
        </EffectsContainer>
    );
};