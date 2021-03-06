import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Wrapper, Form, Icon, Title, Input, Footer } from './styles';

import { Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { SizedBox } from '../../components/SizedBox';
import { Button } from '../../components/Button';
import theme from '../../styles/theme';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  function handleFocused() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  }

  async function handleNavigateToConfirmation() {
    if (!name) {
      return Alert.alert('Por favor, antes de prosseguir digite seu nome...🥺');
    }
    try {
      await AsyncStorage.setItem('@growmanager:user', name);
      navigation.navigate('Confirmation');
    } catch (error) {
      Alert.alert('Nao foi possivel salvar o seu nome');
    }
  }

  return (
    <Wrapper>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Form>
          <Icon>{isFilled ? '😄' : '😀'}</Icon>
          <SizedBox height={24} width={0} />
          <Title>
            Como podemos {'\n'}
            chamar você?
          </Title>
          <SizedBox height={40} width={0} />

          <Input
            style={{
              borderColor:
                isFocused || isFilled ? theme.colors.green : theme.colors.gray,
            }}
            placeholder="Digite um nome"
            onFocus={handleFocused}
            onBlur={handleBlur}
            onChangeText={handleChange}
          />

          <SizedBox height={40} width={0} />
          <Footer>
            <Button title="Confirmar" onPress={handleNavigateToConfirmation} />
          </Footer>
        </Form>
      </TouchableWithoutFeedback>
    </Wrapper>
  );
}
