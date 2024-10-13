
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const CalendarIcon = ({ color = "#030708", size = 16 }) => (
  <Svg viewBox="0 0 256 256" height={size} color={color} width={size}>
    <Path
      d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM156,160H136v20a8,8,0,0,1-16,0V160H100a8,8,0,0,1,0-16h20V124a8,8,0,0,1,16,0v20h20a8,8,0,0,1,0,16Zm52-80H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"
      fill={color}
    />
  </Svg>
);

export default CalendarIcon;