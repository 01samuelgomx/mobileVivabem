import React from 'react';
import { ScrollView, Button, View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { estilo }  from '../../estilo/style';


const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const ImgBack = require('../../img/fundoEsqsenha.png');

export default function Perfil ({ navigation }) {
  return (
      <ScrollView contentContainerStyle={estilo.dashView}>

      <ImageBackground source={ImgBack} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image style={{width: 130,height: 130}} source={require('../../img/icons/perfil.png')} />
      <TextInput style={estilo.input} placeholder='Nome' />
      <TextInput style={estilo.input} placeholder='Data Nascimento' />
      <TextInput style={estilo.input} placeholder='Email' />
      <TextInput secureTextEntry={true} style={estilo.input} placeholder='Senha' />
      <TextInput style={estilo.input} placeholder='Telefone' />
      <CustomButton title="Salvar" onPress={() => navigation.navigate('Home')} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />
      </ImageBackground>

      </ScrollView>
  );
}
