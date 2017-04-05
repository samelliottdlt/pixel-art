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
  'rgb(240, 248, 255)',
  'rgb(250, 235, 215)',
  'rgb(0, 255, 255)',
  'rgb(127, 255, 212)',
  'rgb(240, 255, 255)',
  'rgb(245, 245, 220)',
  'rgb(255, 228, 196)',
  'rgb(0, 0, 0)',
  'rgb(255, 235, 205)',
  'rgb(0, 0, 255)',
  'rgb(138, 43, 226)',
  'rgb(165, 42, 42)',
  'rgb(222, 184, 135)',
  'rgb(95, 158, 160)',
  'rgb(127, 255, 0)',
  'rgb(210, 105, 30)',
  'rgb(255, 127, 80)',
  'rgb(100, 149, 237)',
  'rgb(255, 248, 220)',
  'rgb(220, 20, 60)',
  'rgb(0, 0, 139)',
  'rgb(0, 139, 139)',
  'rgb(184, 132, 11)',
  'rgb(169, 169, 169)',
  'rgb(0, 100, 0)',
  'rgb(189, 183, 107)',
  'rgb(139, 0, 139)',
  'rgb(85, 107, 47)',
  'rgb(255, 140, 0)',
  'rgb(153, 50, 204)',
  'rgb(139, 0, 0)',
  'rgb(233, 150, 122)',
  'rgb(143, 188, 143)',
  'rgb(72, 61, 139)',
  'rgb(47, 79, 79)',
  'rgb(0, 206, 209)',
  'rgb(148, 0, 211)',
  'rgb(255, 20, 147)',
  'rgb(0, 191, 255)',
  'rgb(105, 105, 105)',
  'rgb(30, 144, 255)',
  'rgb(178, 34, 34)',
  'rgb(255, 255, 240)',
  'rgb(34, 139, 34)',
  'rgb(255, 0, 255)',
  'rgb(220, 220, 220)',
  'rgb(248, 248, 255)',
  'rgb(255, 215, 0)',
  'rgb(218, 165, 32)',
  'rgb(128, 128, 128)',
  'rgb(0, 128, 0)',
  'rgb(173, 255, 47)',
  'rgb(240, 255, 240)',
  'rgb(255, 105, 180)',
  'rgb(205, 92, 92)',
  'rgb(75, 0, 130)',
  'rgb(240, 230, 140)',
  'rgb(230, 230, 250)',
  'rgb(255, 240, 245)',
  'rgb(124, 252, 0)',
  'rgb(255, 250, 205)',
  'rgb(173, 216, 230)',
  'rgb(240, 128, 128)',
  'rgb(224, 255, 255)',
  'rgb(250, 250, 210)',
  'rgb(211, 211, 211)',
  'rgb(144, 238, 144)',
  'rgb(255, 182, 193)',
  'rgb(255, 160, 122)',
  'rgb(32, 178, 170)',
  'rgb(135, 206, 250)',
  'rgb(119, 136, 153)',
  'rgb(176, 196, 222)',
  'rgb(255, 255, 224)',
  'rgb(0, 255, 0)',
  'rgb(50, 205, 50)',
  'rgb(250, 240, 230)',
  'rgb(128, 0, 0)',
  'rgb(102, 205, 170)',
  'rgb(0, 0, 205)',
  'rgb(186, 85, 211)',
  'rgb(147, 112, 219)',
  'rgb(60, 179, 113)',
  'rgb(123, 104, 238)',
  'rgb(0, 250, 154)',
  'rgb(72, 209, 204)',
  'rgb(199, 21, 133)',
  'rgb(25, 25, 112)',
  'rgb(245, 255, 250)',
  'rgb(255, 228, 225)',
  'rgb(255, 228, 181)',
  'rgb(255, 222, 173)',
  'rgb(0, 0, 128)',
  'rgb(253, 245, 230)',
  'rgb(128, 128, 0)',
  'rgb(107, 142, 35)',
  'rgb(255, 165, 0)',
  'rgb(255, 69, 0)',
  'rgb(218, 112, 214)',
  'rgb(238, 232, 170)',
  'rgb(152, 251, 152)',
  'rgb(175, 238, 238)',
  'rgb(219, 112, 147)',
  'rgb(255, 239, 213)',
  'rgb(255, 218, 185)',
  'rgb(205, 133, 63)',
  'rgb(255, 192, 203)',
  'rgb(221, 160, 203)',
  'rgb(176, 224, 230)',
  'rgb(128, 0, 128)',
  'rgb(102, 51, 153)',
  'rgb(255, 0, 0)',
  'rgb(188, 143, 143)',
  'rgb(65, 105, 225)',
  'rgb(139, 69, 19)',
  'rgb(250, 128, 114)',
  'rgb(244, 164, 96)',
  'rgb(46, 139, 87)',
  'rgb(255, 245, 238)',
  'rgb(160, 82, 45)',
  'rgb(192, 192, 192)',
  'rgb(135, 206, 235)',
  'rgb(106, 90, 205)',
  'rgb(119, 128, 144)',
  'rgb(255, 255, 250)',
  'rgb(0, 255, 127)',
  'rgb(70, 130, 180)',
  'rgb(210, 180, 140)',
  'rgb(0, 128, 128)',
  'rgb(216, 191, 216)',
  'rgb(255, 255, 255)',
  'rgb(255, 99, 71)',
  'rgb(64, 224, 208)',
  'rgb(238, 130, 238)',
  'rgb(245, 222, 179)',
  'rgb(245, 245, 245)',
  'rgb(255, 255, 0)',
  'rgb(154, 205, 5)'
];

//  Unique-ness
//colors = [...new Set(colors)];

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
