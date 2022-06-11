import React from 'react';
import axios from 'axios';


const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

   let PokeList = [];
  let Pokemon = {}
  let TYPE = [];

async function Minerar() {
  console.log('Minerando lista, aguarde...')
  for (var i = 1; i <= 151; i++) {
    Pokemon = [];
      await api.get('/' + i).then((response) => {

      TYPE = [];
      Pokemon = {
        id: response.data.id,
        name:null, 
        types: null,
        img: response.data.sprites.front_default,
      };

      response.data.types.forEach((teste) => {
        TYPE.push(teste.type.name);
      });

      // if(response.data.id < 10){
      //   let idFormatado = "#00" + response.data.id
      //   console.log(idFormatado)
      // }

      
      let nome = response.data.name 
      Pokemon.name = nome.charAt(0).toUpperCase() + nome.slice(1)

      Pokemon.types = TYPE;
      PokeList.push(Pokemon);

      if(i == 151){
        console.log(PokeList)
      }

    });
  }
}

export default function App() {
  return (
    <>
      <button onClick={Minerar}> Minerar </button>
    </>
  );
}
