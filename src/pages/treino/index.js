import React, { useState } from 'react';
import { ScrollView, View, Text,Image, TextInput, TouchableOpacity, ImageBackground,Modal,Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { estilo } from '../../estilo/style';
import { Checkbox } from 'react-native-paper';

export default function Treino({ navigation }) {

const[visivel,setVisivel]=useState(false)

const [checked, setChecked] = useState(false)

  return (
    <ScrollView contentContainerStyle={estilo.dashView}>

        <View style={estilo.containerModal}>

          <Modal animationType='fade' transparent={false}visible={visivel}>

            <View style={estilo.modal}>

              <Button title='Fechar' options={{tabBarIcon: ({size, color}) => (<FontAwesome name="close" size={24} color="black" />),  headerShown : false }}
               onPress={()=>{setVisivel(false)}}/> 

              <View style={estilo.MO}>
                  <Text style={{color: '#000'}}>Agachamento </Text>
                  <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                      setChecked(!checked);
                    }}
                  />
              </View>

            </View>

          </Modal>

          <TouchableOpacity onPress={() => setVisivel(true)} style={estilo.btnModal}>
           <AntDesign name="caretright" size={24} color="#48c9b0" />
          <Text style={{margin: 5}}>Braço</Text>
         </TouchableOpacity>

          <TouchableOpacity onPress={() => setVisivel(true)} style={estilo.btnModal}>
           <AntDesign name="caretright" size={24} color="#48c9b0" />
          <Text style={{margin: 5}}>Peito</Text>
         </TouchableOpacity>

          <TouchableOpacity onPress={() => setVisivel(true)} style={estilo.btnModal}>
           <AntDesign name="caretright" size={24} color="#48c9b0" />
          <Text style={{margin: 5}}>Pernas</Text>
         </TouchableOpacity>

        </View>
    </ScrollView>
  );
}
