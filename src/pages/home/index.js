import React, { useEffect, useState } from 'react';
import { ScrollView, Button, View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { estilo }  from '../../estilo/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Axios } from 'axios';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Home({ navigation }) {
const { idAluno } = route.params || {};

console.log("Cód aluno", idAluno);
console.log(route.params);

const [nomeAluno,setNomeALuno] = useState("");
const [tipoPlano,setTipoPlano] = useState("");

useEffect(() =>{

const fetchAlunoData = async () =>{

try{
  const token = await AsyncStorage.getItem('userToken')
  const resposta = await Axios.get(`http://127.0.0.1:8000/api/aluno/${idAluno}`,{
    Headers:{
      Authorization: `Bearer  ${token}`,
    }
  });

  setNomeALuno(resposta.data.noome); //Nome deve estar na mesma maneira no json da api
  setTipoPlano(resposta.data.tipo_Plano);//tipo deve estar na mesma maneira no json da api
  // console.log(resposta.data);
  
  } catch{
    console.error("Erro ao buscar os dados do aluno", error)
  }
};

if(idAluno){
  fetchAlunoData();
}
},[idAluno]);

    return (
      <ScrollView contentContainerStyle={estilo.dashView}>

        <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e', marginTop: 50}}>Olá, {nomeAluno}</Text>
        <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070', marginTop: 30}}> Planop {tipoPlano}</Text>
       


        <View style={estilo.dashB1}>
          <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070'}}>Você está na sua</Text>
          <Text style={{fontFamily: 'Segoe UI', fontSize: 40, fontWeight: '700', color: '#34495e'}}>contª</Text>
          <Text style={{fontFamily: 'Segoe UI', fontSize: 25, fontWeight: '400', color: '#707070'}}>sessão de treinos</Text>
        </View>

      
        <View style={estilo.dashB2}>
        
          <CustomButton title="Acesse suas aulas" onPress={() => navigation.navigate('Login')} buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash} />
          <CustomButton title='Acesse seus treinos' onPress={() => navigation.navigate('treino')} buttonStyle={estilo.btnDash} textStyle={estilo.TextoBtnDash}/>
        </View>
        {/* Certifique-se de que o caminho da imagem está correto */}
        <Image source={require('../../img/treinoDash.png')} style={{width: 345, height: 219, marginTop: 30}} />
        <CustomButton title='Minha Matricula' onPress={() => navigation.navigate('matricula')} buttonStyle={estilo.btnPlano} textStyle={estilo.btnPlano}/>
        
      </ScrollView>
    );
}
