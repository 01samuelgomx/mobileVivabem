import React, { useState } from 'react';
import { Button, View, Image, Text, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import { estilo }  from '../../estilo/style';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from 'react-native-modal';

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const ImgBack = require('../../img/background.png');

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [errorModalVisible, setErrorModalVisible] = useState(false);
  
  const [isFocused, setIsFocused] = useState(false);

  const handleLogin = async () => {
    
    // -----------------------------------------------
    //Verifica se o email ou a senha estão preenchidos  
    if(!email.trim() || !senha.trim()){
        setErrorModalVisible(true);
        return;
      }
 
      try {
        const resposta = await axios.post(`http://127.0.0.1:8000/api/login?email=${email}&senha=${senha}`);
        if (resposta.data){
          const aluno = resposta.data;
          if(aluno){
            console.log(aluno);
            console.log(aluno.usuario.dados_aluno.idAluno)
            console.log(aluno.usuario.dados_aluno.nome)
            console.log(aluno.access_token)
 
            const idAluno = aluno.usuario.dados_aluno.id;
            const token = aluno.access_token;
 
            // ----------------------------------
            //Armazenar o token na memória do APP

            await AsyncStorage.setItem('userToken',token);

            navigation.navigate('Home', { idAluno });
          }
        }
      } catch (error) {
       console.error("Erro ao verificar email ou senha", Error);
       setErrorModalVisible("Erro", "Erro ao verificar email e senha");
      }
  };

     return (
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
          
        <ImageBackground source={ImgBack} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />

        <TextInput style={estilo.input} placeholder='Email' onChange={setEmail}/>
        <TextInput secureTextEntry={true} style={estilo.input} placeholder='Senha' onChange={setSenha} />
        
        <CustomButton title="Entrar" onPress={() => navigation.navigate('home')} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />
        <CustomButton title="Esqueci a senha" onPress={() => navigation.navigate('esqSenha')} buttonStyle={estilo.btn2} textStyle={estilo.btn2Texto} />
        </ImageBackground>

      </View>

  );
}
