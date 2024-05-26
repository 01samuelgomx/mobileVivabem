import React from "react";
import {ScrollView, Button, View, Image, Text, TextInput, TouchableOpacity, ImageBackground,} from "react-native";
import { estilo } from "../../estilo/style.js";

const CustomButton = ({ onPress, title, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[estilo.button, buttonStyle]}>
      <Text style={[estilo.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default function Exercicios({ navigation }) {
  return (
    <ScrollView contentContainerStyle={estilo.dashView}>
      <View style={estilo.modalidade}>
        <ImageBackground
          source={require("./../../img/exercicios/legPress.png")}
          style={{ flex: 1 }}
        >
          <View>
            <Text style={estilo.modalidadeTittle}>Leg Press</Text>

            <View style={estilo.shadow}>
              <Text style={estilo.modalidadeTxt}>
                O leg press é um exercício composto de musculação em que o
                indivíduo afasta um peso ou resistência usando as pernas.
              </Text>
            </View>

            {/* <CustomButton onPress={() => navigation.navigate('Login')} buttonStyle={estilo.modalidadeBtn}>
          </CustomButton> */}
          </View>
        </ImageBackground>
      </View>

      <View style={estilo.modalidade}>
        <ImageBackground
          source={require("./../../img/exercicios/agachamento.png")}
          style={{ flex: 1 }}
        >
          <View>
            <Text style={estilo.modalidadeTittle}>Agachamento</Text>

            <View style={estilo.shadow}>
              <Text style={estilo.modalidadeTxt}>
                O agachamento é um exercício físico de força em que o praticante
                abaixa os quadris a partir de uma posição em pé e depois se
                levanta.
              </Text>
            </View>

            {/* <CustomButton onPress={() => navigation.navigate('Login')} buttonStyle={estilo.modalidadeBtn}>
          </CustomButton> */}
          </View>
        </ImageBackground>
      </View>

      <View style={estilo.modalidade}>
        <ImageBackground
          source={require("./../../img/exercicios/extensora.png")}
          style={{ flex: 1 }}
        >
          <View>
            <Text style={estilo.modalidadeTittle}>Extensora</Text>

            <View style={estilo.shadow}>
              <Text style={estilo.modalidadeTxt}>
                Extensão de perna, também chamado de extensão de joelhos é um
                exercício de treinamento com pesos para os quadríceps.
              </Text>
            </View>

            {/* <CustomButton onPress={() => navigation.navigate('Login')} buttonStyle={estilo.modalidadeBtn}>
          </CustomButton> */}
          </View>
        </ImageBackground>
      </View>

      <View style={estilo.modalidade}>
        <ImageBackground source={require("./../../img/exercicios/flexora.png")} style={{ flex: 1 }}>

          <View>
            <Text style={estilo.modalidadeTittle}>Flexora</Text>

            <View style={estilo.shadow}>
              <Text style={estilo.modalidadeTxt}>
                Extensão de perna, também chamado de extensão de joelhos é um
                exercício de treinamento com pesos para os quadríceps.
              </Text>
            </View>

          </View>

        </ImageBackground>
      </View>

      <View style={estilo.modalidade}>
        <ImageBackground
          source={require("./../../img/exercicios/passada.png")}
          style={{ flex: 1 }}
        >
          <View>
            <Text style={estilo.modalidadeTittle}>Passada</Text>

            <View style={estilo.shadow}>
              <Text style={estilo.modalidadeTxt}>
                O leg press é um exercício composto de musculação em que o
                indivíduo afasta um peso ou resistência usando as pernas.
              </Text>
            </View>

            {/* <CustomButton onPress={() => navigation.navigate('Login')} buttonStyle={estilo.modalidadeBtn}>
          </CustomButton> */}
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
