import React from 'react';
import { CardHeader, CardGreet, Greetings, Image, Username } from './styles';

export function Header() {
  return (
    <CardHeader>
      <CardGreet>
        <Greetings>Olá,</Greetings>
        <Username>Marcus</Username>
      </CardGreet>
      <Image source={require('../../assets/marcus.jpg')} />
    </CardHeader>
  );
}
