/*
1. Sukurkite funkciją, kuri paverstų eurus į dolerius.
Sugeneruokite atsitiktinį skaičių (eurų sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
doleriais.
*/

function eurosToDollars(euros) {
  const valiutukursas = 1.08 // https://www.bankai.lt/valiutos/valiutu-kursai/usd
  const dollars = euros * valiutukursas
  return dollars
}

const bentkiekEuro = Math.floor(Math.random() * 1000) + 1  //atsitiktinis kiekis euro
const dollars = eurosToDollars(bentkiekEuro)
console.log(bentkiekEuro + " EUR yra " + dollars.toFixed(2) + " USD")


/*
2. Sukurkite funkciją, kuri paverstų dolerius į eurus.
Sugeneruokite atsitiktinį skaičių (dolerių sumą) nuo 1 iki 1000.
Pritaikykite savo sukurtą funkciją ir išspausdinkite atitikmenį
eurais.
*/
function dollarsToEuros(dollariai) {
  const kursas = 0.92; // https://www.bankai.lt/valiutos/valiutu-kursai/usd
  const eurosskaiciuokle = dollariai * kursas
  return eurosskaiciuokle
}

const atsitiktinisDoleriuKiekis = Math.floor(Math.random() * 1000) + 1
const eurai = dollarsToEuros(atsitiktinisDoleriuKiekis)
console.log(atsitiktinisDoleriuKiekis + " USD yra " + eurai.toFixed(2) + " EUR")

/*
3. Parašykite programą, kuri suskaičiuotų žmogaus BMI (body
mass index), kai yra žinomas žmogaus ūgis ir svoris. 
BMI formulė: žmogaus svoris (kg) padalintas iš ūgio metrais kvadratu. 
Pvz. svoris = 80kg, ūgis = 1.8 m. 
BMI = 80 / 1.8**2 = 24.69
Viršsvoris = BMI > 25
Normalu = 18.5 <= BMI < 25
Per mažas svoris = BMI < 18.5
*/

function skaiciuotiBMI() {
  const svoris = parseFloat(document.getElementById('svoris').value)
  const ugis = parseFloat(document.getElementById('ugis').value) / 100

  const bmi = svoris / (ugis * ugis)
  let klasifikacija

  if (bmi < 18.5) {
    klasifikacija = 'Per mažas svoris'
  } else if (bmi >= 18.5 && bmi < 25) {
    klasifikacija = 'Normalus svoris'
  } else {
    klasifikacija = 'Viršsvoris'
  }

  const rezultatai1 = `
    <h2>Rezultatai:</h2>
    <p>BMI: ${bmi.toFixed(2)}</p>
    <p>Klasifikacija: ${klasifikacija}</p>
  `
  document.getElementById('rezultatai1').innerHTML = rezultatai1
}

/*
4. Parašykite programą, kuri iš duoto žmogaus amžiaus metais
pasakytų kiek tai yra sekundėmis, minutėmis, valandomis,
dienomis.
*/

function konvertuoti() {
  const amzius = parseInt(document.getElementById('amzius').value)

  const sekundes = amzius * 365 * 24 * 60 * 60
  const minutes = amzius * 365 * 24 * 60
  const valandos = amzius * 365 * 24
  const dienos = amzius * 365

  const rezultatai = `
    <h2>Rezultatai:</h2>
    <p>Amžius: ${amzius} metai</p>
    <p>Sekundės: ${sekundes}</p>
    <p>Minutės: ${minutes}</p>
    <p>Valandos: ${valandos}</p>
    <p>Dienos: ${dienos}</p>`

  document.getElementById('rezultatai').innerHTML = rezultatai
}

/*
5. Parašykite programą, kuri konvertuos termometro
duomenis iš Farenheito į Celsijų, ir atvirkščiai.
*/

function tempKeitimas(laipsniai) {
  let oras
  if (laipsniai == "C") {
    oras = document.getElementById("c").value * 9 / 5 + 32
    document.getElementById("f").value = Math.round(oras)
  } else {
    oras = (document.getElementById("f").value - 32) * 5 / 9
    document.getElementById("c").value = Math.round(oras)
  }
}

/*
6. Sukurkite kodą, kuris išspausdins į konsolę
1-2-3-4-5-6-7-8-9-10 vienoje eilutėje. Prieš vienetą ir po
dešimties neturėtų būti brūkšniuko.
*/
let numbers = ''

for (let i = 1; i <= 10; i++) {
  numbers += i
  if (i !== 10) {
    numbers += '-'
  }
}
console.log(numbers)

/*
7. Panaudokite for ciklus, kad sukurtumėte tokį vaizdą konsolėje.
*
**
***
****
*****
*/

for (let i = 1; i <= 5; i++) {
  let linija = ''
  for (let zvaigzdute = 1; zvaigzdute <= i; zvaigzdute++) {
    linija += '*'
  }
  console.log(linija)
}

// /*
// 8. Parašykite kodą, kuris apskaičiuos kiek liko dienų iki Kalėdų.
// */
function dienuIkiKaledu() {  //new datos objektas 
  const siandien = new Date() //sios dienos data
  const Kaledos = new Date(siandien.getFullYear(), 11, 25) //new datos objektas Kaledos (0 - sausis, 11 - gruodis)

  if (siandien.getMonth() === 11 && siandien.getDate() > 25) { //tikriname ar Kaledos parametrai jau buvo --> 11 , 25 
    Kaledos.setFullYear(Kaledos.getFullYear() + 1) // jei buvo pridedami dar 1 kalendorini metai
  }

  const vienaDiena = 1000 * 60 * 60 * 24 // vienos deinos parametras iki milisekundziu
  const dienosIkiKaledu = Math.ceil((Kaledos.getTime() - siandien.getTime()) / vienaDiena) //skirtumas tarp sios deinos ir Kaledos
  return dienosIkiKaledu
}

const likoIkiKaledu = dienuIkiKaledu()
console.log(`Iki Kalėdų liko ${likoIkiKaledu} dienų.`)


/*
9. Parašykite kodą, kuris apjungia masyvo duomenis į vieną
tekstinę eilutę. Turėtumėte gauti tokį rezultatą:
Tomas,Dainius,Paulius,Jonas
Tomas+Dainius+Paulius+Jonas
*/

let vardai = ["Tomas", "Dainius", "Paulius", "Jonas"]

let sintaksisKalblelis = vardai.join(",")
console.log(sintaksisKalblelis)

let sintaksisPliusas = vardai.join("+")
console.log(sintaksisPliusas)


/*
10. Parašykite kodą, kuris sugeneruos dvylikos simbolių
slaptažodį. Slaptažodyje privalo būti bent po vieną: didžioji raidė,
mažoji raidė, skaičius, specialusis simbolis. Visi slaptažodžio
simboliai privalo būti atsitiktiniai ir atsitiktine tvarka.
*/


// versija su HTML ir CSS Irgi veikia ===============================================

// function generuotiSlaptazodi() {
//   const didziosiosRaides = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   const mazosiosRaides = 'abcdefghijklmnopqrstuvwxyz'
//   const skaiciai = '0123456789'
//   const specialusSimboliai = '!@#$%^&*()-_+=<>?'

//   let slaptazodis = ''

//   slaptazodis += didziosiosRaides[Math.floor(Math.random() * didziosiosRaides.length)]
//   slaptazodis += mazosiosRaides[Math.floor(Math.random() * mazosiosRaides.length)]
//   slaptazodis += skaiciai[Math.floor(Math.random() * skaiciai.length)];
//   slaptazodis += specialusSimboliai[Math.floor(Math.random() * specialusSimboliai.length)]

//   const galimiSimboliai = didziosiosRaides + mazosiosRaides + skaiciai + specialusSimboliai
//   for (let i = 4; i < 12; i++) {
//     slaptazodis += galimiSimboliai[Math.floor(Math.random() * galimiSimboliai.length)]
//   }

//   slaptazodis = slaptazodis.split('').sort(() => Math.random() - 0.5).join('')
//   document.getElementById('slaptazodis').value = slaptazodis
// }


function generuotiSlaptazodi() {
  const didziosiosRaides = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const mazosiosRaides = 'abcdefghijklmnopqrstuvwxyz'
  const skaiciai = '0123456789'
  const specialusSimboliai = '!@#$%^&*()-_+=<>?'

  let slaptazodis = ''

  slaptazodis += didziosiosRaides[Math.floor(Math.random() * didziosiosRaides.length)]
  slaptazodis += mazosiosRaides[Math.floor(Math.random() * mazosiosRaides.length)]
  slaptazodis += skaiciai[Math.floor(Math.random() * skaiciai.length)]
  slaptazodis += specialusSimboliai[Math.floor(Math.random() * specialusSimboliai.length)]

  const galimiSimboliai = didziosiosRaides + mazosiosRaides + skaiciai + specialusSimboliai
  for (let i = 4; i < 12; i++) {
    slaptazodis += galimiSimboliai[Math.floor(Math.random() * galimiSimboliai.length)]
  }

  slaptazodis = slaptazodis.split('').sort(() => Math.random() - 0.5).join('')
  console.log(slaptazodis)
}

generuotiSlaptazodi()
