// import { formatDistance } from 'date-fns';
// import { ptBR } from 'date-fns/locale';
import React from 'react';
import { Header } from '../../components/Header';

import { Wrapper, Spot, SpotImage, Plants, PlantsTitle } from './styles';

import waterdrop from '../../assets/waterdrop.png';

export function MyPlants() {
  return (
    <Wrapper>
      <Header />

      <Spot>
        <SpotImage source={waterdrop} />
      </Spot>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>
      </Plants>
    </Wrapper>
  );
}
