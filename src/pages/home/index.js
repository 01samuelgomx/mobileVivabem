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

export default function Home({ navigation }) {
    return (
      <ScrollView contentContainerStyle={estilo.dashView}>

        <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e', marginTop: 50}}>Olá, usuário</Text>
        <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070', marginTop: 30}}> Nome do Plano</Text>
        {/* Corrigindo a capitalização de View */}
        <View style={estilo.dashB1}>
          <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070'}}>Você está na sua</Text>
          <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e'}}>contª</Text>
          <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070'}}>sessão de treinos</Text>
        </View>

        {/* Corrigindo a capitalização de View */}
        <View style={estilo.dashB2}>
          {/* <CustomButton title='Acesse suas aulas' buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash}/> */}
          <CustomButton title="Acesse suas aulas" onPress={() => navigation.navigate('Login')} buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash} />
          <CustomButton title='Acesse seus treinos' onPress={() => navigation.navigate('treino')} buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash}/>
        </View>
        {/* Certifique-se de que o caminho da imagem está correto */}
        <Image source={require('../../img/treinoDash.png')} style={{width: 345, height: 219, marginTop: 30}} />
        <CustomButton title='Minha Matricula' onPress={() => navigation.navigate('matricula')} buttonStyle={estilo.btnPlano} textStyle={estilo.btnPlano}/>
        
      </ScrollView>
    );
}
