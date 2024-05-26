import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Home from './src/pages/home'
import Login from './src/pages/login'
import EsqSenha from './src/pages/esqSenha'
import Exercicios from './src/pages/exercicio'
import Aulas from './src/pages/aula'
import Treino from './src/pages/treino'
import Routes from './src/routes'

export default function App() {
  return (
    <NavigationContainer>
      <Routes /> 
    </NavigationContainer>
  );
}