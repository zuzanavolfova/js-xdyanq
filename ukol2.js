let jmeno = prompt('Jaké je tvé jméno');
let vek = prompt('Kolik ti je let');
let vypocet = 18 - vek;

if (vek >= 18) {
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je Vám ' +
      vek +
      ' let a tak mate pravo ridit auto'
  );
} else {
  let vypocet = 18 - vek;
  if (vypocet===1)
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je Vám ' +
      "17 let" +
      ' a tak musíte ještě rok počkat, než budete moci ridit auto.'
  );
  else if (vypocet >=2 && vypocet<=4)
  console.log(
    'Vaše jméno je ' +
      jmeno +
      ', je Vám ' +
      vek " let" +
      ' a tak musíte ještě' + vypocet + " roky počkat, než budete moci ridit auto."
  }
