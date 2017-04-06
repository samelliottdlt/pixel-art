import React from 'react';
import { Group } from 'react-konva';

import { Cell } from './Cell'

export const ColorGrid = ({colors, cellSize, cellSelected, updateCell, colorSelected}) =>
(
  <Group>
    {
      colors.map(
        (row, rowIndex) => row.map(
          (cellColor, colIndex) =>
            <Cell 
              cellSize={cellSize}
              rowIndex={rowIndex}
              colIndex={colIndex}
              initialColor={cellColor}
              colorSelected={colorSelected}
            />
        )
      )
    }
  </Group>
)

export const defaultGridState = (cellSize, dimensions) => {
  const result = [];
  const rowAmount = dimensions.width / (cellSize);
  const cellAmount = dimensions.height / (cellSize);
  for(let i = 0; i < rowAmount; i++) {
    const row = [];
    for(let j = 0; j < cellAmount; j++) {
      if(i%2) {
        if(j%2) row.push('lightgrey')
        else row.push('white');
      }
      else {
        if(j%2) row.push('white')
        else row.push('lightgrey');
      }
    }
    result.push(row);
  }
  return result;
}
