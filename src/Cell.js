import React, { Component } from 'react';
import { Rect } from 'react-konva';

import { selectedColor } from './ColorSelector';

export class Cell extends Component {

  shouldComponentUpdate() {
    // cell recoloring is handled by using konva low level api for performance reasons. always return false
    return false;
  }

  updateCell() {
    const { cell } = this.refs;
    cell.fill(selectedColor);
    cell.draw();
  }

  render() {
    const { cellSize, rowIndex, colIndex, initialColor } = this.props;
    return (
      <Rect
        x={rowIndex * cellSize} y={colIndex * cellSize}
        height={cellSize} width={cellSize}
        fill={ initialColor }
        ref='cell'
        onClick={() => this.updateCell()}
        onTap={() => this.updateCell()}
        onMouseOver={(e) => (e.evt.buttons === 1 || e.evt.buttons === 3) && this.updateCell() }
      />
    )
  }
}