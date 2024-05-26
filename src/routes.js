import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, Feather, FontAwesome5 } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native'
import { estilo } from './../src/estilo/style'

const ImgBack = './src/pages/home/img/fundo.png'

import Home from './pages/home'
import Login from './pages/login'
import EsqSenha from './pages/esqSenha'
import Perfil from './pages/perfil'
import Exercicios from './pages/exercicio'
import Aula from './pages/aula'
import Treino from './pages/treino'


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

function MyTabs(){
    return (

        <Tab.Navigator>

            <Tab.Screen name="home" component={Home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="home" size={24} color="black"/>), headerShown : false  }}/>
            <Tab.Screen name="Exercícios" component={Exercicios} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black" />), }}/>
            <Tab.Screen name="Aulas" component={Aula} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="video" size={24} color="black" />), }}/>
            <Tab.Screen name="Perfil" component={Perfil} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="user" size={24} color="black" />),  headerShown : false }}/>
            
        </Tab.Navigator>
        
    );
}

// function App(){
//     return (
//         <NavigationContainer>
//             <Drawer.Navigator>
//             <Drawer.Screen name="home" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="home" size={24} color="black"/>),  }}/>
//             <Drawer.Screen name="Exercícios" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="dumbbell" size={24} color="black" />), }}/>
//             <Drawer.Screen name="Aulas" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="video" size={24} color="black" />), }}/>
//             <Drawer.Screen name="Perfil" component={home} options={{tabBarIcon: ({size, color}) => (<FontAwesome5 name="user" size={24} color="black" />), }}/>
//             </Drawer.Navigator>
//         </NavigationContainer>
//     );
// }

export default function Routes(){
    return (
        <Stack.Navigator >
            <Stack.Screen name='login' component={Login} options={{headerShown : false}}/>
            <Stack.Screen name='esqSenha' component={EsqSenha} options={{headerShown : false}}/>
            <Stack.Screen name="home" component={MyTabs} />
            <Stack.Screen name="perfil" component={MyTabs} />
            <Stack.Screen name="exercicios" component={MyTabs} />
            <Stack.Screen name="treino" component={Treino} />
        </Stack.Navigator>
    );
    
}