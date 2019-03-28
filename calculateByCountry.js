const fetch = require('node-fetch');
const d3 = require('d3');
const R = require('ramda');

const writeJson = require('./writeJson');

// récupère les données
const DATA = require('./asylum.json');

//Récupère les pays
const COUNTRIES = R.uniq(DATA.map(R.prop("country_asylum")));

//Trouve et compte
const findAndCountCountry = country_asylum => ({
country_asylum, somme:
 //récupère les infos par pays
 DATA.filter(d => d.country_asylum === country_asylum)
//crée un tableau avec que le nbr de migrant
 .map(d => d.affected)
 //incrémente les valeurs
.reduce((somme, d) => somme + d, 0)
});

let COUNTRIES_FINAL = COUNTRIES.map(pays => findAndCountCountry(pays));

writeJson('asylumByCountry.json', COUNTRIES_FINAL);