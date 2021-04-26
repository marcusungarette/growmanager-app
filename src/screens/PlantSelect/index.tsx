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
  LoadActive,
} from './styles';
import { Header } from '../../components/Header';
import { EnvironmentButton } from '../../components/EnviromentButton';
import api from '../../services/api';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { useNavigation } from '@react-navigation/core';
import { Load } from '../../components/Load';
import theme from '../../styles/theme';

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
  const [filteredPlants, setFilteredPlants] = useState<PlantProps[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1);

  const [loadingMore, setLoadingMore] = useState(false);

  const navigation = useNavigation();

  async function fetchEnvironment() {
    const data = await api.fetchEnvironment();
    setEnvironments([
      {
        key: 'all',
        title: 'Todos',
      },
      ...data,
    ]);
  }

  async function fetchPlants() {
    const data = await api.fetchPlants(page);

    if (!data) {
      return setLoading(true);
    }

    if (page > 1) {
      setPlants(oldValue => [...oldValue, ...data]);
      setFilteredPlants(oldValue => [...oldValue, ...data]);
    } else {
      setPlants(data);
      setFilteredPlants(data);
    }
    setLoading(false);
    setLoadingMore(false);
  }

  function handleFetchMore(distance: number) {
    if (distance < 1) {
      return;
    }

    setLoadingMore(true);
    setPage(oldValue => oldValue + 1);
    fetchPlants();
  }

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    //Verifica se o ambiente seleciona é o todos se for cancela o filtro
    // e retorna os dados que ja tinham vindo da API
    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plant =>
      plant.environments.includes(environment),
    );

    setFilteredPlants(filtered);
  }

  function handlePlantSelect(plant: PlantProps) {
    navigation.navigate('PlantSave', { plant });
  }

  useEffect(() => {
    fetchEnvironment();
  }, []);

  useEffect(() => {
    fetchPlants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Load />;
  }
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
          //@ts-ignore
          keyExtractor={item => String(item.key)}
          renderItem={({ item }: any) => (
            <EnvironmentButton
              title={item.title}
              isActive={item.key === environmentSelected}
              onPress={() => handleEnvironmentSelected(item.key)}
            />
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
          data={filteredPlants}
          //@ts-ignore
          keyExtractor={item => String(item.id)}
          renderItem={({ item }: any) => (
            <PlantCardPrimary
              data={item}
              onPress={() => handlePlantSelect(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) =>
            handleFetchMore(distanceFromEnd)
          }
          ListFooterComponent={
            loadingMore ? <LoadActive color={theme.colors.green} /> : <></>
          }
        />
      </Plants>
    </Wrapper>
  );
}
