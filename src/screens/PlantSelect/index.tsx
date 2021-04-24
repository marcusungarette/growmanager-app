import React, { useEffect, useState } from 'react';
import { SizedBox } from '../../components/SizedBox';
import {
  Title,
  Wrapper,
  SubTitle,
  HeaderPlants,
  Environment,
  FlatListEnvironment,
  Plants,
  FlatListPlants,
} from './styles';
import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnviromentButton';
import api from '../../services/api';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';

interface EnvironmentProps {
  key: string;
  title: string;
}

interface PlantProps {
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
}
export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>([]);

  useEffect(() => {
    async function fetchEnvironment() {
      const { data } = await api.get('plants_environments');
      setEnvironments([
        {
          key: 'all',
          title: 'Todos',
        },
        ...data,
      ]);
    }

    fetchEnvironment();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get('plants');
      setPlants(data);
    }

    fetchPlants();
  }, []);

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
          data={environments}
          renderItem={({ item }: any) => (
            <EnvironmentButton title={item.title} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ marginLeft: 20, paddingRight: 20 }}
        />
      </Environment>
      <SizedBox height={40} width={0} />
      <Plants>
        <FlatListPlants
          data={plants}
          renderItem={({ item }: any) => <PlantCardPrimary data={item} />}
        />
      </Plants>
    </Wrapper>
  );
}
