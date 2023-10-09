import achocolatado from '../../assets/itens/achocolatado.png';
import cafe from '../../assets/itens/cafe.png';
import leite from '../../assets/itens/leite.png';
import pao from '../../assets/itens/pao.png';
import rosquinhas from '../../assets/itens/rosquinhas.png';
 const padaria = {
    topo: {
        titulo: "Detalhes da cesta",
    },
    detalhes: {
        nome: "Padaria carrinho", 
        nomecesta:"Padaria feliz, Lençóis Paulista", 
        descricao:"Venha conhecer nossa caixinha de delicias, escolhidas a dedo para seu maravilhoso café da manhã",
        preco:"R$ 35,60",
    },
    itens: {
        titulo: "Itens da cesta",
        lista: [
          {
            nome: "Achocolatado",
            imagem: achocolatado,
          },
          {
            nome: "Café",
            imagem: cafe,
          },
          {
            nome: "Leite",
            imagem: leite,
          },
          {
            nome: "Pão",
            imagem: pao,
          },
          {
            nome: "Rosquinhas",
            imagem: rosquinhas,
          }
        ]
      }
    }
  
  export default padaria;