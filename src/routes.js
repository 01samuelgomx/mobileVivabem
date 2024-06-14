import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { estilo } from './../src/estilo/style';

const ImgBack = './src/pages/home/img/fundo.png'

import Home from './pages/home'
import Login from './pages/login'
import EsqSenha from './pages/esqSenha'
import Perfil from './pages/perfil'
import Exercicios from './pages/exercicio'
import Aula from './pages/aula'
import Treino from './pages/treino'
import Matricula from './pages/matricula'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();


function MyTabs({routes}){
    return (

        <Tab.Navigator>

            <Tab.Screen name="home" component={Home} initialParams={{idAluno: route.params.idAluno}} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="home" size={24} color="black"/>), headerShown : false  }}/>
            <Tab.Screen name="Exercícios" component={Exercicios} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black" />), }}/>
            <Tab.Screen name="Aulas" component={Aula} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="video" size={24} color="black" />), }}/>
            <Tab.Screen name="Perfil" component={Perfil} initialParams={{idAluno: route.params.idAluno}} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="user" size={24} color="black" />),  headerShown : false }}/>
            
        </Tab.Navigator>
        
    );
}


export default function Routes({routes}){
    return (
        <Stack.Navigator >
            <Stack.Screen name='login' component={Login} options={{headerShown : false}}/>
            <Stack.Screen name='esqSenha' component={EsqSenha} options={{headerShown : false}}/>

            <Stack.Screen name="home" initialParams={{idAluno: route.params.idAluno}} component={MyTabs} />

            <Stack.Screen name="perfil" initialParams={{idAluno: route.params.idAluno}} component={MyTabs} />

            <Stack.Screen name="exercicios" component={MyTabs} />
            <Stack.Screen name="treino" component={Treino} />
            <Stack.Screen name="matricula" component={Matricula} />
        </Stack.Navigator>
    );

}