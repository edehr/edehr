
main()

function main() {
  const insideDefs = require('./insideDefs')
  const rows = []
  const cols = ['path', 'rn', 'label', 'redirect']
  insideDefs.forEach( d => {
    let row = ['','','','']
    Object.keys(d).forEach(key => {
      let col = cols.indexOf(key)
      if (col < 0 ) {
        cols.push(key)
        col = cols.indexOf(key)
      }
      let prop = d[key]
      row[col] = prop
    })
    rows.push(row)
    // console.log(row)
  })
  let results = []
  results.push(cols.join(','))
  rows.forEach( row => {
    results.push(row.join(','))
  })
  console.log(results.join('\n'))
}