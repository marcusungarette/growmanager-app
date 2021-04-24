import React from 'react';
import { Text, Touchable } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}
export function PlantCardPrimary({ data, ...props }: PlantProps) {
  return (
    <Touchable data={data} {...props}>
      <Text>{data.name}</Text>
    </Touchable>
  );
}
