import React, { Component } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text, Image, Group } from 'react-konva';
import { ReactComponent as SVGHeart } from '../svg/heart.svg'
import useImage from 'use-image';

const src = "https://www.freeiconspng.com/uploads/heart-png-15.png";


//Resize: https://thewebdev.info/2021/03/01/how-to-resize-html5-canvas-to-fit-the-window/
function Canvas() {

  
  const width = window.innerWidth*0.7;
  const height = window.innerHeight;
  const screenWidth = width - 300;
  const screenHeight = 500;
  const baseWidth = width - 100;
  const baseHeight = 100;
  const topY = 20
  
  const longText = `I'm Emilia and I  `;
  const [image] = useImage(src);

  console.log(image);
    
  const green = "#0f0";
  const red = "#f00";
  const blue = "#00f";
  const gray = "#464646";
  const fontFamily = "Encode Sans";
    
  
    
    return (
        <Stage width={width} height={height}>
      <Layer>
        <Rect
          x={(width-screenWidth)/2}
          y={topY}
          width={screenWidth}
          height={screenHeight}
          stroke={gray}
          strokeWidth={6}
          fill='white'
          cornerRadius= {50}
        />
        <Rect
          x={(width-baseWidth)/2}
          y={topY+screenHeight}
          width={baseWidth}
          height={baseHeight}
          stroke={gray}
          strokeWidth={6}
          fill='white'
          cornerRadius= {50}
          />
         <Rect
          x={(width-baseWidth)/2+50}
          y={topY+screenHeight+baseHeight/4}
          width={100}
          height={50}
          stroke={gray}
          strokeWidth={6}
          fill={gray}
          cornerRadius= {50}
          />
          
        <Group>
          <Text
            x= {0}
            y= {-20}
            text= 'Hello World'
            fontSize={100}
            fontStyle = "bold"
            fontFamily= {fontFamily}
            fill={green}
            align="center"
            verticalAlign="middle"
            width={width}
            height={screenHeight}
            shadowBlur={0}
            shadowOpacity={1}
            shadowColor={red}
            shadowOffsetX={8}
            shadowOffsetY = {8}          
          >        
           </Text>          
          <Text
              x= {0}
              y= {-20}
              text= 'Hello World'
              fontSize={100}
              fontStyle = "bold"
              fontFamily= {fontFamily}
              fill={green}
              align="center"
              verticalAlign="middle"
              width={width}
              height={screenHeight}
              shadowBlur={0}
              shadowOpacity={1}
              shadowColor={blue}
              shadowOffsetX={4}
              shadowOffsetY = {4}          
            >        
            </Text>
          </Group>
          <Group>
            <Text
              x= {((width-screenWidth)/2)+50}
              y= {50}
              text= '<'
              fontSize= {100}
              fontFamily= {fontFamily}
              fill={green}
              shadowBlur={0}
              shadowOpacity={1}
              shadowColor={red}
              shadowOffsetX={8}
              shadowOffsetY = {8} 
            >        
            </Text>
            <Text
              x= {((width-screenWidth)/2)+50}
              y= {50}
              text= '<'
              fontSize= {100}
              fontFamily= {fontFamily}
              fill={green}
              shadowBlur={0}
              shadowOpacity={1}
              shadowColor={blue}
              shadowOffsetX={4}
              shadowOffsetY = {4} 
            >        
            </Text>
            <Text
              x= {((width+screenWidth)/2)-100}
              y= {screenHeight-100}
              text= '/>'
              fontSize= {100}
              fontFamily= {fontFamily}
              fill={green}
              shadowBlur={0}
              shadowOpacity={1}
              shadowColor={red}
              shadowOffsetX={8}
              shadowOffsetY = {8} 
            >        
            </Text>
            <Text
              x= {((width+screenWidth)/2)-100}
              y= {screenHeight-100}
              text= '/>'
              fontSize= {100}
              fontFamily= {fontFamily}
              fill={green}
              shadowBlur={0}
              shadowOpacity={1}
              shadowColor={blue}
              shadowOffsetX={4}
              shadowOffsetY = {4} 
            >        
            </Text>
          </Group>
          <Group>
          <Text
              x= {-100}
              y= {80}
              text= {longText}
              fontSize= {40}
              fontFamily= {fontFamily}
              fill={gray}
              align="center"
              verticalAlign="middle"
              width={width}
              height={screenHeight}
            >        
            </Text>
            <Image
              x={width/2+40}
              y={height/2-40}
              align="center"
              verticalAlign="middle"
              scaleX={0.03}
              scaleY = {0.03}
              image = {image}
              
            />
            <Text
              x= {180}
              y= {80}
              text= 'to code!'
              fontSize= {40}
              fontFamily= {fontFamily}
              fill={gray}
              align="center"
              verticalAlign="middle"
              width={width}
              height={screenHeight}
            >        
            </Text>
            
          
          </Group>
       
       </Layer>
    </Stage>
      );
    
  }

export default Canvas