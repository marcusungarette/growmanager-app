import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import theme from '../../styles/theme';

interface TouchableType extends TouchableOpacityProps {
  data: {
    name: string;
    photo: string;
  };
}

export const Touchable = styled.TouchableOpacity<TouchableType>`
  flex: 1;
  max-width: 45%;
  background-color: ${theme.colors.shape};
  border-radius: 20px;
  padding: 10px 10px;
  align-items: center;
  margin: 10px;
`;

export const Text = styled.Text`
  color: ${theme.colors.green_dark};
  font-family: ${theme.family.heading};
  margin: 0 16px;
`;
