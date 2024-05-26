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

// Corrigindo o caminho da imagem de fundo
const ImgBack = require('../../img/background.png');

export default function Login({ navigation }) {

     return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
          
        <ImageBackground source={ImgBack} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />
        <TextInput style={estilo.input} placeholder='Email' />
        <TextInput secureTextEntry={true} style={estilo.input} placeholder='Senha' />
        <CustomButton title="Entrar" onPress={() => navigation.navigate('home')} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />
        <CustomButton title="Esqueci a senha" onPress={() => navigation.navigate('esqSenha')} buttonStyle={estilo.btn2} textStyle={estilo.btn2Texto} />
        </ImageBackground>

      </View>

  );
}
