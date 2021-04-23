import React from 'react';
import { SizedBox } from '../../components/SizedBox';
import {} from 'react-native';
import { Title, Wrapper, SubTitle, HeaderPlants } from './styles';
import { Header } from '../../components/Header';

export function PlantSelect() {
  return (
    <Wrapper>
      <HeaderPlants>
        <SizedBox height={50} width={0} />
        <Header />
        <SizedBox height={40} width={0} />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderPlants>
    </Wrapper>
  );
}
