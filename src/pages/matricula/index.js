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

export default function Matricula({ navigation }) {

     return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
          
        <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />
        <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e', marginTop: 50}}>Suas Matriculas</Text>

      </View>

  );
}
