import React from 'react';
import {
  Wrapper,
  PlantInfo,
  PlantName,
  PlantAbout,
  Controller,
  CardTipContainer,
  CardTipImage,
  CardTipText,
  AlertLabel,
  Container,
} from './styles';

import { useRoute } from '@react-navigation/core';
import { SvgFromUri } from 'react-native-svg';
import waterdrop from '../../assets/waterdrop.png';
import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';

interface Params {
  plant: {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
      times: number;
      repeat_every: string;
    };
  };
}

export function PlantSave() {
  const route = useRoute();
  const { plant } = route.params as Params;

  return (
    <Wrapper showsVerticalScrollIndicator={false}>
      <Container>
        <PlantInfo>
          <SvgFromUri uri={plant.photo} height={180} width={180} />

          <PlantName>{plant.name}</PlantName>

          <SizedBox height={16} width={0} />
          <PlantAbout>{plant.about}</PlantAbout>
        </PlantInfo>

        <SizedBox height={32} width={0} />
        <Controller>
          <CardTipContainer>
            <CardTipImage source={waterdrop} />

            <SizedBox height={0} width={24} />
            <CardTipText>{plant.water_tips}</CardTipText>
          </CardTipContainer>

          <AlertLabel>Escolha o melhor horário para ser lembrado:</AlertLabel>

          <SizedBox height={30} width={0} />

          <SizedBox height={30} width={0} />
          <Button
            title="Cadastrar planta"
            onPress={() => {
              'ola';
            }}
          />
          <SizedBox height={20} width={0} />
        </Controller>
      </Container>
    </Wrapper>
  );
}
