import React from 'react';
import {useState} from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native';
import { estilo }  from '../../estilo/style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Modal } from 'react-native-paper';

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
            console.log(aluno.usuario.dados_aluno.nomeAluno)
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
  }


     return (
        <SafeAreaView style={{flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'}}>
          
        <ImageBackground source={ImgBack} style={{width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Image style={estilo.img} source={require('../../img/logoVivaBem.svg')} />
        
        <TextInput style={estilo.input} placeholder='Email' onChange={setEmail}/>
        <TextInput secureTextEntry={true} style={estilo.input} placeholder='Senha' onChange={setSenha}/>

        <CustomButton title="Entrar" onPress={handleLogin} buttonStyle={estilo.btn} textStyle={estilo.btnTexto} />


        <CustomButton title="Esqueci a senha" onPress={() => navigation.navigate('esqSenha')} buttonStyle={estilo.btn2} textStyle={estilo.btn2Texto} />
        </ImageBackground>


        <Modal isVisible={errorModalVisible} onBackdropPress={() => setErrorModalVisible(false)}>

          <View style={estilo.errorModalVisible}>
            <Text style={estilo.errorModalTittle}>ERRO</Text>
            <Text style={estilo.errorModalMenssage}>Email ou senha incorreta. Tente novamente</Text>

            <TouchableOpacity onPress={() => setErrorModalVisible(false)}>
              <Text style={errorModalButtonText}>OK</Text>
            </TouchableOpacity>

          </View>
          
        </Modal>

      </SafeAreaView>
  );
}
