import React from 'react';
import { Layer, Stage } from 'react-konva';

import { ColorGrid } from './Grid';
import { defaultGridState } from './Grid'
import { ColorSelector } from './ColorSelector'
import { WindowResizeListener } from './WindowResizeListener';

export const App = () => {
  const colorSelectorHeight = 40;
  const cellSize = 20;

  return (
    <div>
      <ColorSelector height={`${colorSelectorHeight}px`} />
      <WindowResizeListener> 
      {
        dimensions => 
        <Stage width={dimensions.width} height={dimensions.height}>
          <Layer>
            <ColorGrid dimensions={dimensions} cellSize={cellSize}
              colors={defaultGridState(cellSize, dimensions)}
            />
          </Layer>
        </Stage>
      }
      </WindowResizeListener>
    </div>
  )
}
