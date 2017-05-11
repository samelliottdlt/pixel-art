import React, { Component } from "react";
import { Layer, Stage } from "react-konva";

import { ColorGrid } from "./Grid";
import { defaultGridState } from "./Grid";
import { ColorSelector } from "./ColorSelector";
import { WindowResizeListener } from "./WindowResizeListener";

export class App extends Component {
  state = { selectedColor: "rgb(34, 34, 34)" };

  render() {
    const colorSelectorHeight = 40;
    const cellSize = 20;
    const { selectedColor } = this.state;

    return (
      <div>
        <ColorSelector
          height={`${colorSelectorHeight}px`}
          setSelectedColor={color => this.setState({ selectedColor: color })}
        />
        <WindowResizeListener>
          {dimensions => (
            <Stage width={dimensions.width} height={dimensions.height}>
              <Layer>
                <ColorGrid
                  dimensions={dimensions}
                  cellSize={cellSize}
                  colors={defaultGridState(cellSize, dimensions)}
                  selectedColor={selectedColor}
                />
              </Layer>
            </Stage>
          )}
        </WindowResizeListener>
      </div>
    );
  }
}
