import React from "react";
import { StyleSheet, View } from "react-native";

import Topo from "./components/Topo";
import Detalhe from "./components/Detalhe";
import padaria from "../../mocks/padaria"

export default function Padaria(){
 return<>
<Topo titulo={padaria.topo.titulo}/>
 <View style = {estilos.padaria}>
<Detalhe
nome={padaria.detalhes.nome}
nomecesta={padaria.detalhes.nomecesta}
descricao={padaria.detalhes.descricao}
preco={padaria.detalhes.preco}
 
 />
</View>
</>
}

const estilos = StyleSheet.create({
  padaria: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }

})

