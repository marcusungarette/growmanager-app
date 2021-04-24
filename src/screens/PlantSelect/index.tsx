import React from 'react';
import { SizedBox } from '../../components/SizedBox';
import {
  Title,
  Wrapper,
  SubTitle,
  HeaderPlants,
  Environment,
  FlatListEnvironment,
} from './styles';
import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnviromentButton';

export function PlantSelect() {
  return (
    <Wrapper>
      <HeaderPlants>
        <SizedBox height={25} width={0} />
        <Header />
        <SizedBox height={25} width={0} />
        <Title>Em qual ambiente</Title>
        <SubTitle>você quer colocar sua planta?</SubTitle>
      </HeaderPlants>

      <SizedBox height={24} width={0} />

      <Environment>
        <FlatListEnvironment
          data={[1, 2, 3, 4, 5]}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          renderItem={({ item }) => (
            <EnvironmentButton title="Cozinha" isActive />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
        />
      </Environment>
    </Wrapper>
  );
}
