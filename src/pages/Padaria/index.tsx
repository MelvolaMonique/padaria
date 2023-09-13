import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'
import icon from '../../../assets/icon.png'

const width = Dimensions.get('screen').width;

export default function Padaria(){
 return<>
 <Image source={topo} style ={estilos.topo}/>
 <Text style={estilos.titulo}> Detalhes da Padaria</Text>
 <View style = {estilos.padaria}>
   <Text style={estilos.nome}></Text>

<View style={estilos.icon}>
 <Image style={estilos.imagemdacesta} source={logo}></Image>
 <Text style={estilos.nome}>Padaria feliz, Lençóis Paulista</Text>
</View>
<Text>Padaria(carrinho)</Text>
<Text>Venha conhecer nossa caixinha de delicias, escolhidas a dedo para
  seu maravilhoso café da manhã
</Text>
<Text>R$ 35,60</Text>
</View>
</>
}

const estilos = StyleSheet.create({
  topo: {
    width: "100%",
    height: 578/ 768 * width,
  },
  titulo:{
    width: "100%",
    position:'absolute',
    color:"black",
    textAlign:"center",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "bold",
    padding: 16
  },
  padaria: {
    paddingVertical: 8,
    paddingHorizontal: 16

  },
  imagemdacesta: {
    width: 32,
    height: 32
  },
  nome: {
    fontSize: 16,
    fontFamily:"MontserratBold",
    lineHeight: 26,
    marginLeft: 12
  },
  icon:{
    width: "100%",
    height: 578/ 768 * width,
  }


})

