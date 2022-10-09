import React from 'react';
import { useGameContext } from 'contexts/game.context';
import { useMemo } from 'react';
import { Grid } from './styles';
import { Tile, TileProps } from './tile';

export const TilesGrid = () => {
  const {
    currentLevel: { tiles },
  } = useGameContext();
  const colsAmount = useMemo(() => tiles[0].length, [tiles]);
  const flatTiles: TileProps[] = useMemo(() => {
    const newArr: TileProps[] = [];
    tiles.forEach((row, y) => {
      row.forEach((tile, x) => newArr.push({ position: { x, y }, tile }));
    });
    return newArr;
  }, [tiles]);

  return (
    <Grid cols={colsAmount}>
      {flatTiles.map((tile) => (
        <Tile key={tile.tile.id} {...tile} />
      ))}
    </Grid>
  );
};
