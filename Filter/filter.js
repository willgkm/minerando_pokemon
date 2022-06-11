const pokelist = [
  {
      "id": 1,
      "name": "Bulbasaur",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  },
  {
      "id": 2,
      "name": "Ivysaur",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
  },
  {
      "id": 3,
      "name": "Venusaur",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
  },
  {
      "id": 4,
      "name": "Charmander",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
  },
  {
      "id": 5,
      "name": "Charmeleon",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
  },
  {
      "id": 6,
      "name": "Charizard",
      "types": [
          "fire",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
  },
  {
      "id": 7,
      "name": "Squirtle",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
  },
  {
      "id": 8,
      "name": "Wartortle",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
  },
  {
      "id": 9,
      "name": "Blastoise",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
  },
  {
      "id": 10,
      "name": "Caterpie",
      "types": [
          "bug"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
  },
  {
      "id": 11,
      "name": "Metapod",
      "types": [
          "bug"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
  },
  {
      "id": 12,
      "name": "Butterfree",
      "types": [
          "bug",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
  },
  {
      "id": 13,
      "name": "Weedle",
      "types": [
          "bug",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
  },
  {
      "id": 14,
      "name": "Kakuna",
      "types": [
          "bug",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
  },
  {
      "id": 15,
      "name": "Beedrill",
      "types": [
          "bug",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
  },
  {
      "id": 16,
      "name": "Pidgey",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
  },
  {
      "id": 17,
      "name": "Pidgeotto",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
  },
  {
      "id": 18,
      "name": "Pidgeot",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
  },
  {
      "id": 19,
      "name": "Rattata",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
  },
  {
      "id": 20,
      "name": "Raticate",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
  },
  {
      "id": 21,
      "name": "Spearow",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
  },
  {
      "id": 22,
      "name": "Fearow",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
  },
  {
      "id": 23,
      "name": "Ekans",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
  },
  {
      "id": 24,
      "name": "Arbok",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
  },
  {
      "id": 25,
      "name": "Pikachu",
      "types": [
          "electric"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  },
  {
      "id": 26,
      "name": "Raichu",
      "types": [
          "electric"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
  },
  {
      "id": 27,
      "name": "Sandshrew",
      "types": [
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
  },
  {
      "id": 28,
      "name": "Sandslash",
      "types": [
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
  },
  {
      "id": 29,
      "name": "Nidoran-f",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
  },
  {
      "id": 30,
      "name": "Nidorina",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
  },
  {
      "id": 31,
      "name": "Nidoqueen",
      "types": [
          "poison",
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
  },
  {
      "id": 32,
      "name": "Nidoran-m",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
  },
  {
      "id": 33,
      "name": "Nidorino",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
  },
  {
      "id": 34,
      "name": "Nidoking",
      "types": [
          "poison",
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
  },
  {
      "id": 35,
      "name": "Clefairy",
      "types": [
          "fairy"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
  },
  {
      "id": 36,
      "name": "Clefable",
      "types": [
          "fairy"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
  },
  {
      "id": 37,
      "name": "Vulpix",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
  },
  {
      "id": 38,
      "name": "Ninetales",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
  },
  {
      "id": 39,
      "name": "Jigglypuff",
      "types": [
          "normal",
          "fairy"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
  },
  {
      "id": 40,
      "name": "Wigglytuff",
      "types": [
          "normal",
          "fairy"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
  },
  {
      "id": 41,
      "name": "Zubat",
      "types": [
          "poison",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
  },
  {
      "id": 42,
      "name": "Golbat",
      "types": [
          "poison",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
  },
  {
      "id": 43,
      "name": "Oddish",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
  },
  {
      "id": 44,
      "name": "Gloom",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
  },
  {
      "id": 45,
      "name": "Vileplume",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
  },
  {
      "id": 46,
      "name": "Paras",
      "types": [
          "bug",
          "grass"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
  },
  {
      "id": 47,
      "name": "Parasect",
      "types": [
          "bug",
          "grass"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
  },
  {
      "id": 48,
      "name": "Venonat",
      "types": [
          "bug",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
  },
  {
      "id": 49,
      "name": "Venomoth",
      "types": [
          "bug",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
  },
  {
      "id": 50,
      "name": "Diglett",
      "types": [
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
  },
  {
      "id": 51,
      "name": "Dugtrio",
      "types": [
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
  },
  {
      "id": 52,
      "name": "Meowth",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
  },
  {
      "id": 53,
      "name": "Persian",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
  },
  {
      "id": 54,
      "name": "Psyduck",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
  },
  {
      "id": 55,
      "name": "Golduck",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
  },
  {
      "id": 56,
      "name": "Mankey",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
  },
  {
      "id": 57,
      "name": "Primeape",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
  },
  {
      "id": 58,
      "name": "Growlithe",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
  },
  {
      "id": 59,
      "name": "Arcanine",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
  },
  {
      "id": 60,
      "name": "Poliwag",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
  },
  {
      "id": 61,
      "name": "Poliwhirl",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
  },
  {
      "id": 62,
      "name": "Poliwrath",
      "types": [
          "water",
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
  },
  {
      "id": 63,
      "name": "Abra",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
  },
  {
      "id": 64,
      "name": "Kadabra",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
  },
  {
      "id": 65,
      "name": "Alakazam",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
  },
  {
      "id": 66,
      "name": "Machop",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
  },
  {
      "id": 67,
      "name": "Machoke",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
  },
  {
      "id": 68,
      "name": "Machamp",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
  },
  {
      "id": 69,
      "name": "Bellsprout",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
  },
  {
      "id": 70,
      "name": "Weepinbell",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
  },
  {
      "id": 71,
      "name": "Victreebel",
      "types": [
          "grass",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
  },
  {
      "id": 72,
      "name": "Tentacool",
      "types": [
          "water",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
  },
  {
      "id": 73,
      "name": "Tentacruel",
      "types": [
          "water",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
  },
  {
      "id": 74,
      "name": "Geodude",
      "types": [
          "rock",
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
  },
  {
      "id": 75,
      "name": "Graveler",
      "types": [
          "rock",
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
  },
  {
      "id": 76,
      "name": "Golem",
      "types": [
          "rock",
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
  },
  {
      "id": 77,
      "name": "Ponyta",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
  },
  {
      "id": 78,
      "name": "Rapidash",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
  },
  {
      "id": 79,
      "name": "Slowpoke",
      "types": [
          "water",
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
  },
  {
      "id": 80,
      "name": "Slowbro",
      "types": [
          "water",
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
  },
  {
      "id": 81,
      "name": "Magnemite",
      "types": [
          "electric",
          "steel"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
  },
  {
      "id": 82,
      "name": "Magneton",
      "types": [
          "electric",
          "steel"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
  },
  {
      "id": 83,
      "name": "Farfetchd",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
  },
  {
      "id": 84,
      "name": "Doduo",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
  },
  {
      "id": 85,
      "name": "Dodrio",
      "types": [
          "normal",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
  },
  {
      "id": 86,
      "name": "Seel",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
  },
  {
      "id": 87,
      "name": "Dewgong",
      "types": [
          "water",
          "ice"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
  },
  {
      "id": 88,
      "name": "Grimer",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
  },
  {
      "id": 89,
      "name": "Muk",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
  },
  {
      "id": 90,
      "name": "Shellder",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
  },
  {
      "id": 91,
      "name": "Cloyster",
      "types": [
          "water",
          "ice"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
  },
  {
      "id": 92,
      "name": "Gastly",
      "types": [
          "ghost",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
  },
  {
      "id": 93,
      "name": "Haunter",
      "types": [
          "ghost",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
  },
  {
      "id": 94,
      "name": "Gengar",
      "types": [
          "ghost",
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
  },
  {
      "id": 95,
      "name": "Onix",
      "types": [
          "rock",
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
  },
  {
      "id": 96,
      "name": "Drowzee",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
  },
  {
      "id": 97,
      "name": "Hypno",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
  },
  {
      "id": 98,
      "name": "Krabby",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
  },
  {
      "id": 99,
      "name": "Kingler",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
  },
  {
      "id": 100,
      "name": "Voltorb",
      "types": [
          "electric"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
  },
  {
      "id": 101,
      "name": "Electrode",
      "types": [
          "electric"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
  },
  {
      "id": 102,
      "name": "Exeggcute",
      "types": [
          "grass",
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
  },
  {
      "id": 103,
      "name": "Exeggutor",
      "types": [
          "grass",
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
  },
  {
      "id": 104,
      "name": "Cubone",
      "types": [
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
  },
  {
      "id": 105,
      "name": "Marowak",
      "types": [
          "ground"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
  },
  {
      "id": 106,
      "name": "Hitmonlee",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
  },
  {
      "id": 107,
      "name": "Hitmonchan",
      "types": [
          "fighting"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
  },
  {
      "id": 108,
      "name": "Lickitung",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
  },
  {
      "id": 109,
      "name": "Koffing",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
  },
  {
      "id": 110,
      "name": "Weezing",
      "types": [
          "poison"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
  },
  {
      "id": 111,
      "name": "Rhyhorn",
      "types": [
          "ground",
          "rock"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
  },
  {
      "id": 112,
      "name": "Rhydon",
      "types": [
          "ground",
          "rock"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
  },
  {
      "id": 113,
      "name": "Chansey",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
  },
  {
      "id": 114,
      "name": "Tangela",
      "types": [
          "grass"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
  },
  {
      "id": 115,
      "name": "Kangaskhan",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
  },
  {
      "id": 116,
      "name": "Horsea",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
  },
  {
      "id": 117,
      "name": "Seadra",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
  },
  {
      "id": 118,
      "name": "Goldeen",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
  },
  {
      "id": 119,
      "name": "Seaking",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
  },
  {
      "id": 120,
      "name": "Staryu",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
  },
  {
      "id": 121,
      "name": "Starmie",
      "types": [
          "water",
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
  },
  {
      "id": 122,
      "name": "Mr-mime",
      "types": [
          "psychic",
          "fairy"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
  },
  {
      "id": 123,
      "name": "Scyther",
      "types": [
          "bug",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
  },
  {
      "id": 124,
      "name": "Jynx",
      "types": [
          "ice",
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
  },
  {
      "id": 125,
      "name": "Electabuzz",
      "types": [
          "electric"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
  },
  {
      "id": 126,
      "name": "Magmar",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
  },
  {
      "id": 127,
      "name": "Pinsir",
      "types": [
          "bug"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
  },
  {
      "id": 128,
      "name": "Tauros",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
  },
  {
      "id": 129,
      "name": "Magikarp",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
  },
  {
      "id": 130,
      "name": "Gyarados",
      "types": [
          "water",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
  },
  {
      "id": 131,
      "name": "Lapras",
      "types": [
          "water",
          "ice"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
  },
  {
      "id": 132,
      "name": "Ditto",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
  },
  {
      "id": 133,
      "name": "Eevee",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
  },
  {
      "id": 134,
      "name": "Vaporeon",
      "types": [
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
  },
  {
      "id": 135,
      "name": "Jolteon",
      "types": [
          "electric"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
  },
  {
      "id": 136,
      "name": "Flareon",
      "types": [
          "fire"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
  },
  {
      "id": 137,
      "name": "Porygon",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
  },
  {
      "id": 138,
      "name": "Omanyte",
      "types": [
          "rock",
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
  },
  {
      "id": 139,
      "name": "Omastar",
      "types": [
          "rock",
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
  },
  {
      "id": 140,
      "name": "Kabuto",
      "types": [
          "rock",
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
  },
  {
      "id": 141,
      "name": "Kabutops",
      "types": [
          "rock",
          "water"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
  },
  {
      "id": 142,
      "name": "Aerodactyl",
      "types": [
          "rock",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
  },
  {
      "id": 143,
      "name": "Snorlax",
      "types": [
          "normal"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
  },
  {
      "id": 144,
      "name": "Articuno",
      "types": [
          "ice",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
  },
  {
      "id": 145,
      "name": "Zapdos",
      "types": [
          "electric",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
  },
  {
      "id": 146,
      "name": "Moltres",
      "types": [
          "fire",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
  },
  {
      "id": 147,
      "name": "Dratini",
      "types": [
          "dragon"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
  },
  {
      "id": 148,
      "name": "Dragonair",
      "types": [
          "dragon"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
  },
  {
      "id": 149,
      "name": "Dragonite",
      "types": [
          "dragon",
          "flying"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
  },
  {
      "id": 150,
      "name": "Mewtwo",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
  },
  {
      "id": 151,
      "name": "Mew",
      "types": [
          "psychic"
      ],
      "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
  }
]
