import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  background-color: #fff;
`;

export const Title = styled.Text`
  font-size: ${theme.sizes.title};
  font-weight: bold;
  text-align: center;
  color: ${theme.colors.heading};
  line-height: 38px;
  margin-top: 60px;
`;

export const Image = styled.Image`
  height: ${Dimensions.get('window').width * 0.7}px;
`;

export const Subtitle = styled.Text`
  font-size: ${theme.sizes.medium};
  padding: 0px 20px;
  text-align: center;
  margin-bottom: 50px;
  line-height: 25px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${theme.colors.green};
  width: 56px;
  height: 56px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: ${theme.sizes.medium};
  text-align: center;
`;
