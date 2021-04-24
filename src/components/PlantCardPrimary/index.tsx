import React from 'react';
import { Text, Touchable } from './styles';
import { TouchableOpacityProps } from 'react-native';
import { SvgUri } from 'react-native-svg';
interface PlantProps extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}
export function PlantCardPrimary({ data, ...props }: PlantProps) {
  return (
    <Touchable data={data} {...props}>
      <SvgUri width="100" height="100" uri={data.photo} />
      <Text>{data.name}</Text>
    </Touchable>
  );
}
