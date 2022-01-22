let jmenoMuz = 'Honza';
let jmenoZena = 'Eva';
let narozeniMuz = 1980;
let narozeniMesicMuz = 10;
let narozeniMesicZena = 9;
let narozeniZena = 1991;
let mesice =
  (narozeniZena - narozeniMuz) * 12 + (narozeniMesicZena - narozeniMesicMuz);

console.log(
  jmenoMuz +
    ' a ' +
    jmenoZena +
    ' a jsou od sebe věkově vzdáleni ' +
    mesice +
    ' měsíců.'
);

/*Nadefinujme si proměnné a jejich hodnoty potřebné k uložení následujících informací: 
• Jméno muže a ženy 
• Rok a měsíc narození muže i ženy 

Spočteme rozdíl věku muže a ženy v měsících a vypíšeme ve formátu "[muz] a [zena] jsou od sebe věkově vzdáleni [XY] měsíců." 

Pro zjednodušení úkolu počítejme, že je muž vždy starší! (ať nemusíme řešit absolutní hodnotu pomocí Math.abs()).*/
