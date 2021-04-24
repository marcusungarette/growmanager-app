import React from 'react';
import { Text, Touchable } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface EnvironmentButtonProps extends TouchableOpacityProps {
  title: string;
  color?: string;
  isActive?: boolean;
}

export function EnvironmentButton({
  title,
  color,
  isActive = false,
  ...props
}: EnvironmentButtonProps) {
  return (
    <Touchable isActive={isActive} color={color} {...props}>
      <Text isActive={isActive}>{title}</Text>
    </Touchable>
  );
}
