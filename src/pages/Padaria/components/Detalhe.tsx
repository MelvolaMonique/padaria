 import React from "react";
 import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import logo from '../../../../assets/logo.png'


type Props = {
    nome: string;
    nomecesta: string
    descricao: string
    preco: string
}

export default function Detalhe({nome, nomecesta, descricao, preco}: Props){
    return<>
    <Text style={estilos.nome}>{nome}</Text>
<View style={estilos.cestaa}>
    <Image style={estilos.imagemdacesta} source={logo}/>
    <Text style={estilos.nomecesta}>{nomecesta}</Text>
</View>
<Text style={estilos.descricao}>{descricao}</Text>
<Text style={estilos.preco}>{preco}</Text>

<TouchableOpacity style={estilos.botao}>
  <Text style={estilos.textobotao}>Comprar</Text>
</TouchableOpacity>
 </>
    
}
const estilos = StyleSheet.create({
    nome: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
    fontFamily: "MontserratBold"
    },
    cestaa:{
      flexDirection: "row",
      paddingVertical: 12
    },
    imagemdacesta: {
      width: 32,
      height: 32
    },
  nomecesta:{
  fontSize: 16,
  fontFamily: "MontserratBold",
  lineHeight: 26,
  marginLeft:12
  },
  
    descricao:{
      color: "#A3A3A3",
      fontFamily: "MontserratItalic"
    },
    preco:{
      fontSize: 26,
      fontFamily: "MontserratRegular",
      color: "#2A9F85",
      marginTop: 8,
    },
    botao: {
        marginTop: 16,
        backgroundcolor: '#00000',
        color: "2#a9f85",
        borderRadius: 6
      },
      textobotao: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "MontserratBold"
      }
  
  
  })