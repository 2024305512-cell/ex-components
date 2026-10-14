import Lista from "@/components/Lista";

export default function Home() {
  const compras = ['Arroz', 'Feijão', 'Carne', 'Tomate', 'Cebola']; //tamanho do array: 5
  const esportes = ['Futebol', 'Natação', 'Vôlei', 'Futsal']; //tamanho do array: 4
  const cidades = ['Osório', 'Capão da Canoa', 'Tramandaí', 'Imbé', 'Santo Antônio da Patrulha', 'Porto Alegre']; //tamanho do array: 6
  const vazio = [];
  return (
    <div>
      <h1>Exemplo de Components React</h1>
      <h2>Listas</h2>
      <Lista titulo="Lista de Compras" elementos={compras} />
      <Lista titulo="Lista de Esportes" elementos={esportes} />
      <Lista titulo="Lista de Cidades" elementos={cidades} />
    </div>
  );
}
//       <h3>Lista de Compras</h3>
//       <ul>
//         <li>{compras[0]}</li>
//         <li>{compras[1]}</li>
//         <li>{compras[2]}</li>
//         <li>{compras[3]}</li>
//         <li>{compras[4]}</li>
//       </ul>

//       <h3>Lista de Esportes</h3>
//       <ul>
//         <li>{esportes[0]}</li>
//         <li>{esportes[1]}</li>
//         <li>{esportes[2]}</li>
//         <li>{esportes[3]}</li>
//       </ul>

//       <h3>Lista de Cidades</h3>
//       <ul>
//         <li>{cidades[0]}</li>
//         <li>{cidades[1]}</li>
//         <li>{cidades[2]}</li>
//         <li>{cidades[3]}</li>
//         <li>{cidades[4]}</li>
//         <li>{cidades[5]}</li>
//       </ul>
//     </div>
//   );
// }
