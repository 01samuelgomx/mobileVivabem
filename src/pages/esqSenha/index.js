import React from 'react';
import { Button, View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { estilo }  from '../../estilo/style';


const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
const ImgBack = require('../../img/fundoEsqsenha.png');

export default function EsqSenha ({ navigation }) {
  return (
    <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
        <ImageBackground source={ImgBack} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>

      <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />
      <TextInput style={estilo.input} placeholder='Data Nascimento' />
      <TextInput style={estilo.input} placeholder='Email' />
      <TextInput style={estilo.input} placeholder='Telefone' />
      <CustomButton title="Entrar" onPress={() => navigation.navigate('home')} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />
      </ImageBackground>
      
    </View>
  );
}
