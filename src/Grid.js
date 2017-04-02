import React, { Component } from 'react';
import { Layer, Rect, Stage, Group} from 'react-konva';

export class ColorGrid extends Component {
  cells = {}

  shouldComponentUpdate() {
    return false;
  }

  render() {
    const {colors, cellSize, cellSelected, updateCell} = this.props;
    let self = this;
    return (
      <Group>
        {
          colors.map(
            (row, rowIndex) => row.map(
              (cellColor, cellIndex) =>
                <Rect
                  x={rowIndex * cellSize} y={cellIndex * cellSize}
                  height={cellSize} width={cellSize}
                  fill={colors[rowIndex][cellIndex]}
                  ref={(node) => { self.cells['r'+rowIndex.toString()+'c'+cellIndex.toString()] = node}}
                  onMouseOver={(evt) => updateCell(rowIndex, cellIndex, self.cells['r'+rowIndex.toString()+'c'+cellIndex.toString()])}
                  onClick={(evt) => updateCell(rowIndex, cellIndex, self.cells['r'+rowIndex.toString()+'c'+cellIndex.toString()])}
                />
            )
          )
        }
      </Group>
    )
  }
}

export const initalGridState = (cellSize) => {
  const result = [];
  const rowAmount = window.screen.width / (cellSize);
  const cellAmount = window.screen.height / (cellSize);
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
