import React, { Component } from 'react';
import { Layer, Rect, Stage, Group} from 'react-konva';
import update from 'immutability-helper';

import { ColorGrid } from './Grid';
import { initalGridState } from './Grid'
import { ColorSelector } from './ColorSelector'
import { WindowResizeListener } from './WindowResizeListener';
import { mouseDown } from './index';

const cellSize = 20;

export class App extends Component {

  state = {
    colorSelected: 'rgb(34, 34, 34)',
    colors: initalGridState(20)
  }

  colorSelected = (color) => {
    this.setState({...this.state, colorSelected: color})
  }

  updateCell = (x, y, k) => {
    if(!mouseDown) return;
    k.setFill(this.state.colorSelected);
    k.draw();
    this.setState((prevState, props) => update(
      prevState, {
        colors: {
          [x] : {
            [y] : {
              $set: prevState.colorSelected
            }
          }
        }
      }
    ))
  }

  render() {
    const colorSelectorHeight = 40;
    return (
      <div>
        <ColorSelector height={`${colorSelectorHeight}px`} colorSelected={(color) => this.colorSelected(color)} />
        <WindowResizeListener>
          {
            (dimensions) =>
              <Stage y={colorSelectorHeight} width={dimensions.width} height={dimensions.height}>
                <Layer>
                  <ColorGrid dimensions={dimensions} cellSize={cellSize}
                    colors={this.state.colors}
                    updateCell={(x, y, cell) => this.updateCell(x, y, cell)}
                  />
                </Layer>
              </Stage>
          }
        </WindowResizeListener>
      </div>
  )}
}
