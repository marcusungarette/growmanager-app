import styled from 'styled-components/native';
import { TouchableOpacityProps, TextProps } from 'react-native';
import theme from '../../styles/theme';

interface TouchableType extends TouchableOpacityProps {
  color?: string;
  isActive: boolean;
}

interface TextType extends TextProps {
  isActive: boolean;
}

export const Touchable = styled.TouchableOpacity<TouchableType>`
  width: 76px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  margin: 0 5px;
  background: ${props =>
    props.isActive ? `${theme.colors.green_light}` : `${theme.colors.shape}`};
  opacity: ${props => (props.isActive ? '1' : '1')};
`;

export const Text = styled.Text<TextType>`
  color: ${props =>
    props.isActive ? `${theme.colors.green_dark}` : `${theme.colors.heading}`};
  font-size: ${theme.sizes.caption};
  font-family: ${props =>
    props.isActive ? `${theme.family.heading}` : `${theme.family.text}`}; ;
`;
