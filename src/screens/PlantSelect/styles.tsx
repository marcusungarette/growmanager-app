import styled from 'styled-components/native';
// import { FlatList } from 'react-native';
import theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const HeaderPlants = styled.View`
  padding: 0px 28px;
`;

export const Title = styled.Text`
  font-size: ${theme.sizes.medium};
  font-family: ${theme.family.heading};
  color: ${theme.colors.heading};
`;

export const SubTitle = styled.Text`
  font-size: ${theme.sizes.medium};
  font-family: ${theme.family.text};
  color: ${theme.colors.heading};
`;

export const Environment = styled.View`
  height: 40px;
`;

export const FlatListEnvironment = styled.FlatList``;

export const Plants = styled.View`
  flex: 1;
  padding: 0px 32px;
  justify-content: center;
`;

export const FlatListPlants = styled.FlatList``;
