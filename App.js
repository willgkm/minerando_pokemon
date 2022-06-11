import React from 'react';
import axios from 'axios';

import { View, Button } from 'react-native';

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

 let PokeList = [];
  let Pokemon = {}
  let TYPE = [];

function teste() {

  for (var i = 1; i <= 1; i++) {
    Pokemon = [];
      api.get('/' + i).then((response) => {

      TYPE = [];
      Pokemon = {
        id: response.data.id,
        name: response.data.name,
        types: null,
        img: response.data.sprites.front_default,
      };

      response.data.types.forEach((teste) => {
        TYPE.push(teste.type.name);
      });

      Pokemon.types = TYPE;
      console.log(Pokemon)

      PokeList.push(Pokemon);
      console.log(PokeList);
    });
  }
}

export default function App() {
  return (
    <>
      <button onClick={teste}> teste</button>
    </>
  );
}
