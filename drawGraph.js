///CONST
const d3 = require('d3')
const fs = require('fs')
const DATA = require('./asylumByCountry.json');

const COLORS = ["#E7FFF7",
				"#98E8FF",
				"#45A2E8",
				"#2278FF",
				"005FF5",
				"#E7FFF7",
				"#98E8FF",
				"#45A2E8",
				"#2278FF",
				"005FF5",
				"#E7FFF7",
				"#98E8FF",
				"#45A2E8",
				"#2278FF",
				"005FF5",
				"#E7FFF7",
				"#98E8FF",
				"#45A2E8",
				"#2278FF",
			]

const graph = DATA => 
`<svg width="1920" heigth="1080" xmlns="http://www.w3.org/2000/svg">
${DATA.map((d,i) => ` <rect y="${((i+1)*30)+30}" height="1" width="500" fill="#000000" style="z-index:1;" />
					<rect y="30" height="1" width="500" fill="#000000" style="z-index:1;" />
					<rect x="500" y="30" height="600" width="1" fill="#000000" style="z-index:1;"  />
				<rect y="${(i+1)*30}" height="30" width="${d.somme*5}" fill="${COLORS[i]}" style="z-index:-1;" />
					 <text y="${((i+1)*30)+20}" x="400" font-family="Arial" font-size="10">${d.country_asylum}(${d.somme})</text>`).join('\n')}
					 <text x="50" y="20" font-family="Arial" font-size="20">Swiss Migration Destination</text>
</svg>`

const writeSvg = svg =>
  fs.writeFileSync('graph.svg', svg, 'utf-8')

writeSvg(graph(DATA));