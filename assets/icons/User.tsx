import React from 'react';
import Svg, { Path } from 'react-native-svg';

const UserIcon = ({ color = "#030708", size = 16 }) => (
  <Svg fill="none" height={size} viewBox="0 0 256 256" width={size}>
    <Path d="M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z" fill={color} />
  </Svg>
);

export default UserIcon;