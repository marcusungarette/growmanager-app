import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CardHeader, CardGreet, Greetings, Image, Username } from './styles';

export function Header() {
  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    async function loadStoragaUserName() {
      const user = await AsyncStorage.getItem('@growmanager:user');
      setUserName(user || '');
    }

    loadStoragaUserName();
  }, []);
  return (
    <CardHeader>
      <CardGreet>
        <Greetings>Olá,</Greetings>
        <Username>{userName}</Username>
      </CardGreet>
      <Image source={require('../../assets/marcus.jpg')} />
    </CardHeader>
  );
}
