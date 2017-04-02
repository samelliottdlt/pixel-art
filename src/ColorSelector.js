import React, { Component } from 'react';
import styled from 'styled-components';

const ColorSelectorContainer = styled.section`
  position: fixed;
  height: ${props => props.height ? props.height : '40px'};
  background: #111111;
  z-index: 1;
  width: 100%;
  text-align: center;
`;

const ColorBlock = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  width: 30px;
`;

const colors = [
  'rgb(255, 255, 255)',
  'rgb(228, 228, 228)',
  'rgb(136, 136, 136)',
  'rgb(34, 34, 34)',
  'rgb(255, 167, 209)',
  'rgb(229, 0, 0)',
  'rgb(229, 149, 0)',
  'rgb(160, 106, 66)',
  'rgb(229, 217, 0)',
  'rgb(148, 224, 68)',
  'rgb(2, 190, 1)',
  'rgb(0, 211, 221)',
  'rgb(0, 131, 199)',
  'rgb(0, 0, 234)',
  'rgb(207, 110, 228)',
  'rgb(130, 0, 128)'
];

export class ColorSelector extends Component {

  colorSelected = (color) => {
    this.props.colorSelected(color);
  }

  render() {
    return (
      <ColorSelectorContainer>
        {
          colors.map(color =>
            <ColorBlock
              backgroundColor={color} key={color} style={{backgroundColor: color}}
              onClick={() => this.colorSelected(color)}
            />)
        }
      </ColorSelectorContainer>
    )
  }
}
