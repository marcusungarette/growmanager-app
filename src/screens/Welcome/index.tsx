import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Wrapper, Title, Image, Subtitle, Button } from './styles';

import Icon from 'react-native-vector-icons/Feather';
import wateringImg from '../../assets/watering.png';
import { ButtonText } from '../../components/Button/styles';

Icon.loadFont();
export function Welcome() {
  const navigation = useNavigation();

  function handleNavigateToUserIdentification() {
    navigation.navigate('UserIdentification');
  }

  return (
    <Wrapper>
      <Title>
        Gerencie {'\n'}
        suas plantas de {'\n'}
        forma fácil
      </Title>

      <Image source={wateringImg} resizeMode="contain" />

      <Subtitle>
        Não esqueça mais de regar suas {'\n'}
        plantas. Nós cuidamos de lembrar você {'\n'}
        sempre que precisar.
      </Subtitle>

      <Button onPress={handleNavigateToUserIdentification}>
        {/* <Icon name="chevron-right" size={24} color={theme.colors.white} /> */}
        <ButtonText> &gt; </ButtonText>
      </Button>
    </Wrapper>
  );
}
