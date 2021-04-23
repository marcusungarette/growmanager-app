import React from 'react';
import { CardHeader, CardGeet, Geetings, Image, Username } from './styles';

export function Header() {
  return (
    <CardHeader>
      <CardGeet>
        <Geetings>Olá,</Geetings>
        <Username>Marcus</Username>
      </CardGeet>
      <Image source={require('../../assets/marcus.jpg')} />
    </CardHeader>
  );
}
