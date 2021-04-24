import React, { useEffect, useState } from 'react';
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
import api from '../../services/api';

interface EnvironmentProps {
  key: string;
  title: string;
}
export function PlantSelect() {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);

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
    </Wrapper>
  );
}
