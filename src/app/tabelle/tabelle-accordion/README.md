# app-tabelle-accordion

La TABELLA ACCORDION è una tabella che in ogni riga contiene UNA SOLA COLONNA denominata accordion costituita da un array di dati da essere visualizzati con modalità a fisarmonica sul click dell'utente.

La sua struttura è:

  constructor(
    public col1: CellaDato,
    public col2: CellaDato,
    public col3: CellaDato,
    public col4: CellaDato,
    public col5: CellaDato,
    public col6: CellaDato,
    public accordion: CellaDato[]
  ) 