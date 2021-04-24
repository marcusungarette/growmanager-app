import React from 'react';
import { Container } from './styles';
import LottieView from 'lottie-react-native';
import loadAnimation from '../../assets/load.json';

export function Load() {
  return (
    <Container>
      <LottieView source={loadAnimation} autoPlay loop />
    </Container>
  );
}
