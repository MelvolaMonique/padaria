import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import topo from '../../../assets/topo.png'
import logo from '../../../assets/logo.png'
import cesta from '../../../assets/cesta.png'

const width = Dimensions.get('screen').width;

export default function Padaria(){
 return<>
 <Image source={topo} style ={estilos.topo}/>
 <Text style={estilos.titulo}> Detalhes da Padaria</Text>
 <View style = {estilos.padaria}>
   <Text style={estilos.nome}>Padaria carrinho</Text>

<View style={estilos.cestaa}>
 <Image style={estilos.imagemdacesta} source={cesta}></Image>
 <Text style={estilos.nomecesta}>Padaria feliz, Lençóis Paulista</Text>
</View>
<Text style={estilos.descricao}>Venha conhecer nossa caixinha de delicias, escolhidas a dedo para
  seu maravilhoso café da manhã
</Text>
<Text style={estilos.preco}>R$ 35,60</Text>
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
    padding: 16,
    fontFamily: "MontserratBold"
  },
  padaria: {
    paddingVertical: 8,
    paddingHorizontal: 16

  },

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
  }


})

