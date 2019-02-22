const fs = require('fs')
const pathUtil = require('path')
const camelcase = require('camelcase')
const RawPagesToDefs = require('./generators/raw-pages-to-def')
const destVueFiles = './generated/vue'
const destRouteFiles = './routes'
const source = 'source'
const rawDataSource = 'raw_data'
const insidePageRawDefFileName = 'inside-pages'
const destEhrDefs = './generated/ehrDefs'

main()

function main () {
  generateInsidePageDefs()
  outside()
}

/**
 * Inside refers to the EHR side of the application. Outside is the learnnig management side of things.
 *
 * In this function we prepare the page definition configurtion and then invoke the main "inside"
 * generating function.
 *
 */
function generateInsidePageDefs() {
  let fSrc = pathUtil.join(rawDataSource, insidePageRawDefFileName) + '.txt'
  let fDest = pathUtil.join(destEhrDefs, insidePageRawDefFileName)  + '.js'
  console.log('read file ', fSrc)
  fs.readFile(fSrc, 'utf8', function (err, contents) {
    var inputToDef = new RawPagesToDefs()
    var masterPageDefs = inputToDef.getDefinitions(contents)
    var results = JSON.stringify(masterPageDefs, null, 2)
    results = results.replace(/'/g, "\\'")
    results = results.replace(/"/g, "'")
    // results = _fixBooleans(results)
    var modDef = 'module.exports = function () {\n  return ' + results + '\n}'
    console.log('write file ', fDest)
    fs.writeFileSync(fDest, modDef)
    /* ****
    Have definitions ... ready to go ...
    */
    inside()
  })
}


function outside () {
  const outsideDefs = require('./raw_data/outsideDefs')
  flushDefs(outsideDefs)
  var outfilename = pathUtil.join(destRouteFiles, 'outsideRoutes.js')
  makeRoutes(outsideDefs, 'outside', './outside/views',  outfilename)
}

function inside () {
  const insideDefs = require('./generated/ehrDefs/inside-pages')()
  // go through the definitions and compute properties as needed.
  flushDefs(insideDefs, true)
  // prepare a tree structure to produce the nested menu
  var outfilename = pathUtil.join(destRouteFiles, 'treeDef.json')
  var tree = makeTree(insideDefs, outfilename)
  // make the Vue components
  makeVueFiles(insideDefs)
  outfilename = pathUtil.join(destRouteFiles, 'menuList.json')
  // make the menu
  makeMenu(tree, outfilename)
  outfilename = pathUtil.join(destRouteFiles, 'insideRoutes.js')
  // make the routing
  makeRoutes(insideDefs, 'inside', './inside/views', outfilename)
}

function flushDefs (defs, forInside) {
  defs.forEach(def => {
    def.componentName = def.componentName ? def.componentName : camelcase(def.routeName, { pascalCase: true })
    def.dataName = camelcase(def.routeName)
    def.routeName = def.routeName
    def.fullPath = def.path + '/' + def.routeName
    def.title = def.title || splitCamelCase(def.componentName)
    def.label = def.label || def.title
    def.redirect = def.redirect ? def.redirect : ''
    // the first part past '/ehr/' is the top level menu item name ...
    if (forInside) {
      def.topLevel = def.fullPath.split('/')[2]
    }
  })
}

function makeRoutes (defs, layout, cPath, outfilename) {
  var routes = []
  var s1 = '    '
  var s2 = '      '
  var s3 = '        '
  routes.push(`export function ${layout}() {\n`)
  routes.push('  return [')
  var parts = []
  defs.forEach(def => {
    var rt = ''
    rt += `${s1}{\n`
    rt += `${s2}path: '${def.fullPath}',\n`
    rt += `${s2}name: '${def.routeName}',\n`
    rt += `${s2}component: () =>\n`
    rt += `${s3}import(/* webpackChunkName: "chunk-[request][index]" */`
    rt += ` '${cPath}/${def.componentName}.vue'),\n`
    rt += `${s2}meta: { layout: '${layout}', label: '${def.label}', topLevel: '${def.topLevel}' }\n`
    rt += `${s1}}`
    parts.push(rt)
  })
  routes.push(parts.join(',\n'))
  routes.push('  ]\n' + '}\n')
  var pathOutput = routes.join('\n')
  console.log('write file with routes',outfilename)
  fs.writeFileSync(outfilename, pathOutput, 'utf8')
}
function findTreeItem (def, tree) {
  var paths = def.path.split('/')
  paths.shift()
  // console.log('Look for ', def.path, paths)
  var item = tree['root']
  paths.forEach((p) => {
    // console.log('item children', item.children)
    item.children.forEach((child) => {
      if (child.name === p) {
        item = child
      }
    })
  })
  return item
}

function makeTreeItem (def, tree) {
  var item = {}
  item.name = def.routeName
  if (def.redirect.length > 0) {
    item.redirect = def.redirect
  }
  item.label = def.label
  item.routeName = def.routeName
  item.topLevel = def.topLevel
  item.def = def
  item.children = []
  var parent = findTreeItem(def, tree)
  parent.children.push(item)
}

function makeTree (defs, outfilename) {
  var tree = {}
  tree.root = { children: [] }
  defs.forEach(def => {
    makeTreeItem(def, tree)
  })
  var txtContent = JSON.stringify(tree, null, 2)
  console.log('write file with tree',outfilename)
  fs.writeFileSync(outfilename, txtContent, 'utf8')
  return tree
}

function makeMenu (tree, outfilename) {
  var content = []
  content.push('[')
  var elements = []
  tree.root.children.forEach((c) => elements.push(JSON.stringify(c, null, 2)))
  content.push(elements.join(','))
  content.push(']')
  var txtContent = content.join('\n')
  console.log('write file with menu',outfilename)
  fs.writeFileSync(outfilename, txtContent, 'utf8')
}

function getComponent(fName) {
  let templateFileName = pathUtil.join(__dirname, source, fName)
  let componentTemplate = fs.readFileSync(templateFileName, 'utf8')
  return componentTemplate
}

function makeVueFiles (defs) {
  const componentTemplate = getComponent('newTemplate.txt')
  defs.forEach(def => {
    // console.log('def.generateComponent',  def.generateComponent)
    if (def.generateComponent !== 'custom') {
      makeVueFile(def, componentTemplate)
    }
  })
}

function splitCamelCase (string) {
  return string.split(/(?=[A-Z])/g).join(' ')
}

function makeVueFile (def, componentTemplate) {
  var content = componentTemplate
    .replace(/{title}/g, def.title)
    .replace(/{label}/g, def.label)
    .replace(/{componentName}/g, def.componentName)
    .replace(/{pageDataKey}/g, def.pageDataKey)
    .replace(/{redirect}/g, def.redirect)
    .replace(/{routeName}/g, def.routeName)
    .replace(/{path}/g, def.fullPath)
  content = '// Generated VUE file. Before modifying see docs about Vue file generation \n' + content
  var outfilename = pathUtil.join(destVueFiles, def.componentName + '.vue')
  console.log('write file with vue',outfilename)
  fs.writeFileSync(outfilename, content, 'utf8')
}
