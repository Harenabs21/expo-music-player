import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';

interface ButtonWithIconPorps {
  iconName: 'play' | 'plus';
  onPress: () => void;
  color: string;
  style: StyleProp<ViewStyle>;
}

const ButtonWithIcon = ({ iconName, onPress, color, style }: ButtonWithIconPorps) => {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <FontAwesome name={iconName} size={24} color={color} />
    </TouchableOpacity>
  );
};

export default ButtonWithIcon;
