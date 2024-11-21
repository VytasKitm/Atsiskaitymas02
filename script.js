'use strict';

// Uzduotis 3.1:

function nelyginiai() {
	let sum = 0
	let i = 1
		while ( i < 100) {
			sum += i
			i += 2
		}
		return sum
}
console.log("Pirma užduotis:")                              
console.log(`Nelyginių skaičių suma: ${nelyginiai()}`)



// Uzduotis 3.2:

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

function kvadratas(arr) {
	return arr.map(el => el*el)
}

console.log("Antra užduotis:")
console.log(`Pirminis masyvas:\n${array}`)
console.log(`Kvadratų masyvas:\n${kvadratas(array)}`)



// Uzduotis 3.3:

const studentas = {
	vardas: "Vytautas",
	pavarde: "Cerniauskas",
	pazymiai: [8,9,10,7,6,7,5,10,8,7,10,7]
}

function vidurkis(obj) {
	let suma = obj.pazymiai.reduce((acc,el) => acc+el) 
	return suma/obj.pazymiai.length
}

console.log("Trečia užduotis:")
console.log(`Pažymių vidurkis:\n${vidurkis(studentas).toFixed(2)}`)