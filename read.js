var d3 = require("d3");
const fetch = require('node-fetch');
const URL = 'https://raw.githubusercontent.com/idris-maps/heig-datavis-2019/master/20190322-node/exercice_node/ch_asylum_demands.csv';
fetch(URL)
// Transforme en texte
.then(r => r.text())
//Transforme en JSON
.then(d3.csvParse)
// Filter
.then(r => r.filter(r => r.affected !== '*'))
// MAP = Transformation => ...r sert a reprendre toutes les autres colones 
.then(r => r.map(r => ({...r, affected:Number(r.affected),year:Number(r.year)})))
.then(r => r.map(r => ({...r, country_asylum:r.country_asylum.includes('USA')? "USA" : r.country_asylum})))
.then(console.log);