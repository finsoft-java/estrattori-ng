import { Injectable } from '@angular/core';
import { CellaTestata, CellaDato } from './tabelle.interfaces';

// ------------------------------------------
// Variabili Comuni Alla definizione di più tabelle
// ------------------------------------------

let bufferTitolo: string;
let bufferSottoTitolo: string;
let bufferDecimal: string;
let bufferDate: string;
let bufferTime: string;
let bufferPercent: string;
let bufferIcon: string;

//---> Inizio tabella non so a cosa serve

// ------------------------------------------
// Dati Mock x tutte le altre tabelle
// ------------------------------------------
export class Client {
  constructor(
    public id: number,
    public name: string,
    public surname: string,
    public street: string,
    public icon: string,
    public accountInfo: AccountInfo
  ) { }
}

export class AccountInfo {
  constructor(
    public uid: string,
    public password: string,
    public accountLastLogin: Date,
    public idAuth: number
  ) { };
}

export class RowTestataTabelle {
  constructor(
    public id: String,
    public name: String,
    public surname: String,
    public info: String,
    public idAuth: String,
    public password: String,
    public uid: String,
  ) { }

}

let TestataTabella = [
  new RowTestataTabelle(
    'ID',
    'Nome',
    'Cognome',
    'Conferma/Rimuovi',
    'ID Utente',
    'Password',
    'Data'
  )
]

let Clients = [
  new Client(
    0,
    'Sawyer',
    'Mckenzie',
    'Agate Court',
    'assets/icons/1.png',
    new AccountInfo(
      'd6cc01f2-aad2-',
      '59391bbd502d',
      new Date(),
      0)
  ),
  new Client(
    1,
    'Mae',
    'Watkins',
    'Commercial Street',
    'assets/icons/2.png',
    new AccountInfo(
      'cc6bc503-341b-410b-83',
      '59391bbde5',
      new Date(),
      9)
  ),
  new Client(
    2,
    'Rivers',
    'Giles',
    'Rutherford Place',
    'assets/icons/3.png',
    new AccountInfo(
      '3cbb85bd-0be9-4',
      '59391bbd',
      new Date(),
      2
    )
  ),
  new Client(
    3,
    'Clements',
    'Osborn',
    'Calder Place',
    '',
    new AccountInfo(
      '3e0b6ebe-ba7d',
      '59391b',
      new Date(),
      4
    )
  ),
  new Client(
    4,
    'Lloyd',
    'Odonnell',
    'Crawford Avenue',
    '',
    new AccountInfo(
      '4fa67d9e-60f1-4de',
      '59391bbd',
      new Date(),
      6
    )
  ),
  new Client(
    5,
    'Michelle',
    'Browning',
    'Seigel Court',
    'assets/icons/1.png',
    new AccountInfo(
      '72723e25-927e-4f',
      '59391bbd6',
      new Date(),
      5
    )
  ),
  new Client(
    6,
    'House',
    'Lang',
    'Ide Court',
    '',
    new AccountInfo(
      '567cb816-1d5c-',
      '59391bbd',
      new Date(),
      3
    )
  ),
  new Client(
    7,
    'Toni',
    'Rhodes',
    'Gerald Court',
    'assets/icons/3.png',
    new AccountInfo(
      'ea679837-f033-475b',
      '59391bb',
      new Date(),
      10
    )
  ),
  new Client(
    8,
    'Ferrell',
    'Mendez',
    'Aurelia Court',
    'assets/icons/4.png',
    new AccountInfo(
      '9a0b2959-1a1c-4e',
      '59391bbd6ac',
      new Date(),
      11
    )
  ),
  new Client(
    9,
    'Mcdonald',
    'Swanson',
    'Bergen Court',
    'assets/icons/6.png',
    new AccountInfo(
      '9f42700b-9a7e-449',
      '59391bbd85',
      new Date(),
      1
    )
  ),
  new Client(
    10,
    'Gould',
    'Mueller',
    'Henderson Walk',
    '',
    new AccountInfo(
      '273a8e24-50f8-4d6',
      '59391bbdab5',
      new Date(),
      8
    )
  ),
  new Client(
    11,
    'Latonya',
    'Justice',
    'Brooklyn Road',
    '',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    12,
    'Latonya111111',
    'Justice',
    'Brooklyn Road',
    'assets/icons/1.png',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    13,
    'Latonya2222222',
    'Justice',
    'Brooklyn Road',
    '',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    14,
    'Latonya333333',
    'Justice',
    'Brooklyn Road',
    '',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    15,
    'Latonya4444444',
    'Justice',
    'Brooklyn Road',
    'assets/icons/1.png',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    16,
    'Latonya555555',
    'Justice',
    'Brooklyn Road',
    'assets/icons/1.png',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    17,
    'Latonya66666',
    'Justice',
    'Brooklyn Road',
    'assets/icons/1.png',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    18,
    'Latonya77777',
    'Justice',
    'Brooklyn Road',
    'assets/icons/1.png',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    19,
    'Latonya888888',
    'Justice',
    'Brooklyn Road',
    '4',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  ),
  new Client(
    20,
    'Latonya9999999',
    'Justice',
    'Brooklyn Road',
    'assets/icons/5.png',
    new AccountInfo(
      '784b75f7-8966-',
      '59391b',
      new Date(),
      7
    )
  )

]

//---> Fine tabella non so a cosa serve

//---> Inizio tabella Accordion

// ------------------------------------------
// Tabella Standard
// ------------------------------------------

// ------------------------------------------------------------------------------
// DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARA
// ------------------------------------------------------------------------------

export class RowTestataTabellaAccordion {

  constructor(
    public col1: CellaTestata,
    public col2: CellaTestata,
    public col3: CellaTestata,
    public col4: CellaTestata,
    public col5: CellaTestata,
    public col6: CellaTestata
  ) { }

}

export class RowDatiTabellaAccordion {
  constructor(
    public col1: CellaDato,
    public col2: CellaDato,
    public col3: CellaDato,
    public col4: CellaDato,
    public col5: CellaDato,
    public col6: CellaDato,
    public accordion: CellaDato[]
  ) { }
}

// ------------------------------------------------------------------------------
// DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI
// ------------------------------------------------------------------------------

let TestataTabellaAccordion: [RowTestataTabellaAccordion] = [
  new RowTestataTabellaAccordion(
    new CellaTestata('', 'COLUMN1', '', 0, false, '{"text-align": "left"}'),
    new CellaTestata('number', 'COLUMN2', '', 0, false, '', "two"),
    new CellaTestata('time', 'COLUMN3', '', 0, true),
    new CellaTestata('date', 'COLUMN4', '', 0, false),
    new CellaTestata('percent', 'COLUMN5', '', 0, false),
    new CellaTestata('icon', 'COLUMN6', '', 0, false),
  )
]

bufferTitolo = "Titolo cella";
bufferSottoTitolo = "Sottotitolo/Descrizione";
bufferDecimal = "0,00 €";
bufferDate = "gg.mm.aaaa";
bufferTime = "00:00:00"
bufferPercent = "-000%"
bufferIcon = "assets/icons/1.png"

let bufferTitoloAccordion = "Label";
let bufferSottoTitoloAccordion = "Valore del Dato";

let DatiTabellaAccordion: RowDatiTabellaAccordion[] = [
  new RowDatiTabellaAccordion(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "#C53200"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    [
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion)
    ]
  ),

  new RowDatiTabellaAccordion(
    new CellaDato('', bufferTitolo, '{"text-align": "left"}', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, '{"text-align": "left"}'),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "#C53200"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    [
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion)
    ]
  ),
  new RowDatiTabellaAccordion(
    new CellaDato('', bufferTitolo, '{"text-align": "left"}', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "#C53200"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '{}', 'icomoon-Modifica_matita6'),
    [
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion)
    ]
  ),
  new RowDatiTabellaAccordion(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "green"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    [
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion)
    ]
  ),
  new RowDatiTabellaAccordion(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "green"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    [
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion)
    ]
  ),
  new RowDatiTabellaAccordion(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "green"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    [
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion),
      new CellaDato('', bufferTitoloAccordion, '', bufferSottoTitoloAccordion)
    ]
  ),

]

//---> Fine tabella Accordion

// ------------------------------------------
// Tabella Standard
// ------------------------------------------

// ------------------------------------------------------------------------------
// DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARA
// ------------------------------------------------------------------------------

export class RowTestataTabellaStandard {

  constructor(
    public col1: CellaTestata,
    public col2: CellaTestata,
    public col3: CellaTestata,
    public col4: CellaTestata,
    public col5: CellaTestata,
    public col6: CellaTestata
  ) { }

}

export class RowDatiTabellaStandard {
  constructor(
    public col1: CellaDato,
    public col2: CellaDato,
    public col3: CellaDato,
    public col4: CellaDato,
    public col5: CellaDato,
    public col6: CellaDato
  ) { }
}

// ------------------------------------------------------------------------------
// DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI
// ------------------------------------------------------------------------------

let TestataTabellaStandard: RowTestataTabellaStandard[] = [
  new RowTestataTabellaStandard(
    new CellaTestata('', 'COLUMN1', '', 0, false, '{"text-align": "left"}'),
    new CellaTestata('number', 'COLUMN', '', 0, false, '', "two"),
    new CellaTestata('time', 'COLUMN3', '', 0, true),
    new CellaTestata('date', 'COLUMN4', '', 0, false),
    new CellaTestata('percent', 'COLUMN5', '', 0, false),
    new CellaTestata('icon', 'COLUMN6', '', 0, false),
  )
]

bufferTitolo = "Titolo cella";
bufferSottoTitolo = "Sottotitolo/Descrizione";
bufferDecimal = "0,00 €";
bufferDate = "gg.mm.aaaa";
bufferTime = "00:00:00"
bufferPercent = "-000%"
bufferIcon = "assets/icons/1.png"

// let bufferPercent = 0


let DatiTabellaStandard: RowDatiTabellaStandard[] = [
  new RowDatiTabellaStandard(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "#C53200"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    // new CellaDato('icon', bufferIcon, '{}'),
  ),

  new RowDatiTabellaStandard(
    new CellaDato('', bufferTitolo, '{"text-align": "left"}', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, '{"text-align": "left"}'),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "#C53200"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    // new CellaDato('icon', bufferIcon, '{}'),
  ),

  new RowDatiTabellaStandard(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "#C53200"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '{}', 'icomoon-Modifica_matita6'),
    // new CellaDato('icon', bufferIcon, '{}'),
  ),
  new RowDatiTabellaStandard(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "green"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    // new CellaDato('icon', bufferIcon, '{}'),
  ),
  new RowDatiTabellaStandard(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "green"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),

    // new CellaDato('icon', bufferIcon, '{}'),
  ),
  new RowDatiTabellaStandard(
    new CellaDato('', bufferTitolo, '', bufferSottoTitolo),
    new CellaDato('', bufferDecimal, ''),
    new CellaDato('', bufferTime, ''),
    new CellaDato('', bufferDate, ''),
    new CellaDato('', bufferPercent, '{"color": "green"}'),
    new CellaDato('iconintesa', 'icomoon-Modifica_matita5', '', 'icomoon-Modifica_matita6'),
    // new CellaDato('icon', bufferIcon, '{}'),
  ),

]

// ------------------------------------------
// TABELLA SEMPLICE
// ------------------------------------------

// ------------------------------------------------------------------------------
// DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARAZIONI DICHIARA
// ------------------------------------------------------------------------------

export class RowTestataTabellaEstrattori {

  constructor(
    public codProcedura: CellaTestata,
    public codAggregazione: CellaTestata,
    public dataRif: CellaTestata,
    public descProcedure: CellaTestata
  ) { }

}

export class RowDatiTabellaEstrattori {
  constructor(
    public codProcedura: CellaDato,
    public codAggregazione: CellaDato,
    public dataRif: CellaDato,
    public descProcedure: CellaDato
  ) { }
}

// ------------------------------------------------------------------------------
// DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI DATI
// ------------------------------------------------------------------------------

let TestataTabellaSemplice: [RowTestataTabellaEstrattori] = [
  new RowTestataTabellaEstrattori(
    new CellaTestata('', 'Nome', '', 0, false),
    new CellaTestata('', 'Cognome', '', 0, true),
    new CellaTestata('', 'Indirizzo', '', 0, true),
    new CellaTestata('', 'ID Utente', '', 1, true)
  )
]


let ClientsTabellaSemplice: RowDatiTabellaEstrattori[] = [
  new RowDatiTabellaEstrattori(
    new CellaDato('', 'Clements', '{}'),
    new CellaDato('', 'Osborn', '{}'),
    new CellaDato('', 'Calder Place', '{}'),
    new CellaDato('', '3e0b6ebe-ba7d', '{}')
  ),
  new RowDatiTabellaEstrattori(
    new CellaDato('', 'Clements', '{}'),
    new CellaDato('', 'Osborn', '{}'),
    new CellaDato('', 'Calder Place', '{}'),
    new CellaDato('', '3e0b6ebe-ba7d', '{}')
  ), 
  new RowDatiTabellaEstrattori(
    new CellaDato('', 'Clements', '{}'),
    new CellaDato('', 'Osborn', '{}'),
    new CellaDato('', 'Calder Place', '{}'),
    new CellaDato('', '3e0b6ebe-ba7d', '{}')
  ),
  new RowDatiTabellaEstrattori(
    new CellaDato('', 'Clements', '{}'),
    new CellaDato('', 'Osborn', '{}'),
    new CellaDato('', 'Calder Place', '{}'),
    new CellaDato('', '3e0b6ebe-ba7d', '{}')
  ),
  new RowDatiTabellaEstrattori(
    new CellaDato('', 'Clements', '{}'),
    new CellaDato('', 'Osborn', '{}'),
    new CellaDato('', 'Calder Place', '{}'),
    new CellaDato('', '3e0b6ebe-ba7d', '{}')
  )
]


/**
 * Tabella Condizione
 */
export class RowTestataTabellaCond {
  constructor(
    public col1: CellaTestata,
    public col2: CellaTestata,
    public col3: CellaTestata,
    public col4: CellaTestata,
    public col5: CellaTestata,
  ) { }

}

export class RowDatiTabellaCond {
  constructor(
    public col1: CellaDato,
    public col2: CellaDato,
    public col3: CellaDato,
    public col4: CellaDato,
    public col5: CellaDato
  ) { }
}

let TestataTabellaCond: RowTestataTabellaCond = new RowTestataTabellaCond(
    new CellaTestata('', 'COLUMN1', '', 0, false, '{"text-align": "center","font-size": "12px","align":"center"}'),
    new CellaTestata('arr-curr', 'COLUMN TWO', '', 0, false,'{"font-size": "12px"}',null,true),
    new CellaTestata('time', 'COLUMN3', '', 0, true,'{"font-size": "12px"}'),
    new CellaTestata('date', 'COLUMN4', '', 0, false,'{"font-size": "12px"}'),
    new CellaTestata('percent', 'COLUMN5', '', 0, false,'{"color": "#C53200","font-size": "12px"}')
  )

let testataTabellaCondPromise = Promise.resolve(TestataTabellaCond);

let ClientsTabellaCond: RowDatiTabellaCond[] = [
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_1', ''),
    new CellaDato('', [0,12.36]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 1.33),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_2', ''),
    new CellaDato('', [1,2.33]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 2.33),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_3', ''),
    new CellaDato('', [1,22]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 33.3),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_4', ''),
    new CellaDato('', [33]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 33.2),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_5', ''),
    new CellaDato('', [11.1]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 23.33),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_6', ''),
    new CellaDato('', [21.2]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 33.11),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_7', ''),
    new CellaDato('', [22,8995.1]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 21.33),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_8', ''),
    new CellaDato('', [10]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 33.33),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_9', ''),
    new CellaDato('', [21]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 5.33),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_10', ''),
    new CellaDato('', [101]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 33.01),
  ),
  new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_11', ''),
    new CellaDato('', [201]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 3.33),
  ),new RowDatiTabellaCond(
    new CellaDato('', 'Titolo cella_12', ''),
    new CellaDato('', [104]),
    new CellaDato('', new Date()),
    new CellaDato('', new Date()),
    new CellaDato('', 1.33),
  )
]

  let clientsPromiseTabellaCond = Promise.resolve(ClientsTabellaCond);
 //***************************************************

// ------------------------------------------
// False Promises
// ------------------------------------------

let testataTabellaPromise = Promise.resolve(TestataTabella);
let testataTabellaPromiseTabellaAccordion = Promise.resolve(TestataTabellaAccordion);
let testataTabellaPromiseTabellaStandard = Promise.resolve(TestataTabellaStandard);
let testataTabellaPromiseTabellaSemplice = Promise.resolve(TestataTabellaSemplice);


let clientsPromise = Promise.resolve(Clients);
let datiPromiseTabellaAccordion = Promise.resolve(DatiTabellaAccordion);
let datiPromiseTabellaStandard = Promise.resolve(DatiTabellaStandard);
let clientsPromiseTabellaSemplice = Promise.resolve(ClientsTabellaSemplice);
let clientsPromiseTabellaSemplice2 = Promise.resolve(ClientsTabellaSemplice);





// ------------------------------------------
// Servizio Mock
// ------------------------------------------


@Injectable()
export class DatiMockTabelleService {

  constructor() {
  }

  public getTestataTabella(cType?: string, nRiga?: number) {
    let result: any;
    if (cType == "TabellaAccordion")
      result = testataTabellaPromiseTabellaAccordion;
    else if (cType == "TabellaStandard")
      result = testataTabellaPromiseTabellaStandard;
    else if (cType == "TabellaSemplice")
      result = testataTabellaPromiseTabellaSemplice;
    else if (cType == "TabellaEspandibile")
      // per semplicità usa stessa dati testata tabella semplice.
      result = testataTabellaPromiseTabellaSemplice;
    else if (cType == "TabellaSelezionabile")
      result = testataTabellaPromiseTabellaSemplice;
    else if (cType == "TabellaCond")
      result = testataTabellaCondPromise;
    else
      result = testataTabellaPromise;

    return result;
  }

  public getAllClients(cType?: string, nRiga?: number) {
    let result: any;
    if (cType == "TabellaAccordion")
      result = datiPromiseTabellaAccordion;
    else if (cType == "TabellaStandard")
      result = datiPromiseTabellaStandard;
    else if (cType == "TabellaSemplice")
      result = clientsPromiseTabellaSemplice;
    else if (cType == "TabellaSemplice2")
      result = clientsPromiseTabellaSemplice2;
    else if (cType == "TabellaEspandibile")
      // per semplicità usa stessi dati tabella semplice.
      result = clientsPromiseTabellaSemplice;
    else if (cType == "TabellaSelezionabile")
      // per semplicità usa stessi dati tabella semplice.
      result = clientsPromiseTabellaSemplice;
    else if (cType == "TabellaSelezionabile")
      // per semplicità usa stessi dati tabella semplice.
      result = clientsPromiseTabellaSemplice;
    else if (cType == "TabellaCond")
      result = clientsPromiseTabellaCond;
    else
      result = clientsPromise;

    return result;
  }

  
  // ------------------------------------------
  // esempi di filtraggi sui dati mock per semplicità tutti i campi sono boolean e di fantasia.....
  // ------------------------------------------

  // public getStarredClients() {
  //   return clientsPromise
  //     .then(clients => clients.filter(client => client.starred == true));
  // }

  // public getSentClients() {
  //   return clientsPromise
  //     .then(clients => clients.filter(client => client.sent == true));
  // }

  // public getDraftClients() {
  //   return clientsPromise
  //     .then(clients => clients.filter(client => client.draft == true));
  // }

  // public getTrashClients() {
  //   return clientsPromise
  //     .then(clients => clients.filter(client => client.trash == true));
  // }

  // public getClient(id: number | string) {
  //   return clientsPromise
  //     .then(clients => clients.find(client => client.id === +id));
  // }

}
