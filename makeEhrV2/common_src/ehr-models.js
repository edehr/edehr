/**
 * WARNING Only edit this code if you are working on the makeEhrV2 copy.
 * See ./makeEhrV2/copy-common-src.sh to distribute to both server and client
 */
// noinspection DuplicatedCode
import EhrDefs from './ehr-page-defs'

export class EhrPages {
  constructor () {
    this.ehrDefintions = EhrDefs
    this.pageKeyList = Object.keys(EhrDefs)

    /*
    TODO These two pages contain elements with ehr_subgroups.  The constructors below do not
    handle this condition.  The test page is not important. The assessmentTools page only provides
    static links and they all work on the page so they are not yet important to this EhrPages
    modeling classes.
     */
    const toRemove = ['testPage','assessmentTools']
    toRemove.forEach( pgKey => {
      const index = this.pageKeyList.indexOf(pgKey)
      if (index > -1) { // only splice array when item is found
        this.pageKeyList.splice(index, 1) // 2nd parameter means remove one item only
      }
    })

    this._pages = this.pageKeyList.map(pageKey => {
      const pgDef = this.ehrDefintions[pageKey]
      return new PageDef(pgDef)
    })
  }

  get pageList () { return this._pages }

  getPagesWithData (ehrModel) { return this._pages.filter( pg => ehrModel.hasData(pg.pageKey))}

  findPage (key) { return this._pages.find( pg => pg.pageKey === key)}

  ehrPagesStats (ehrData) {
    let stats = {meta: { count: 0, draftRows: 0 }}
    this.pageList.forEach( ehrPage => {
      const pageKey = ehrPage.pageKey
      const pageData = ehrData[pageKey]
      const pgStats = ehrPage.ehrPageStats(pageData)
      if (pgStats.hasData) {
        stats[pageKey] = pgStats
        stats.meta.count++
        if (pgStats.hasDraft) {
          stats.meta.draftRows++
        }
      }
    })
    return stats
  }

}

export class PageDef {
  constructor (pgDef) {
    this._pageDef = pgDef
    this.pgChildren = pgDef.pageChildren.map( ch => new PageChildElement(ch))
    // setup page forms and tables
    const pElements = pgDef.pageElements
    const pgElemKeys = Object.keys(pElements)
    const tableKeys = pgElemKeys.filter(k => { return pElements[k].isTable })
    this.tableElements = tableKeys.map(k => { return new PageTable(pElements[k], this.pgChildren)  })
    const formKeys = pgElemKeys.filter(k => { return  pElements[k].isPageForm })
    this.formElements = formKeys.map(k => { return new PageForm(pElements[k], this.pgChildren) })
  }
  get hasTable () { return this.tableElements.length > 0}
  get hasForm () { return this.formElements.length > 0}
  get pageDef () { return this._pageDef }
  get pageKey () { return this._pageDef.pageDataKey}
  get pageForms () { return this.formElements }
  get pageTables () { return this.tableElements }
  get pageChildren () { return this.pgChildren}
  get pageTitle () { return this._pageDef.pageTitle }

  ehrPageStats (pageData) {
    let pgStats = {hasData: false}
    if (pageData) {
      const pageTableKeys = this.pageTables.map(pt => pt.key)
      if (pageTableKeys.length > 0) {
        pgStats.tables = {}
        for (let i = 0; i < pageTableKeys.length; i++) {
          const key = pageTableKeys[i]
          const tData = pageData[key]
          if (tData && tData.length > 0) {
            pgStats.hasData = true
            pgStats.tables[key] = { rows: tData.length }
            tData.forEach(row => {
              if (row.isDraft) {
                pgStats.hasDraft = true
              }
            })
            break
          }
        }
      }
      if (!pgStats.hasData) {
        const pKeys = this.pageChildren.map(c => c.elementKey)
        const clone = cloneNotEmptyProperties(pageData, pKeys)
        if (objectHasContent(clone)) {
          pgStats.hasData = true
        }
      }
      if (pgStats.hasData) {
        pgStats.lastUpdate = pageData.lastUpdate
      }
    }
    return pgStats
  }
  filterPageChildrenByInputType (inputType) {
    return this.pageChildren.filter( pg => pg.inputType === inputType)
  }
  getPageFormData (elementKey, ehrModel) {
    return ehrModel.getPageFormData(this.pageKey, elementKey)
  }
  getPageTable (tableKey) {
    return this.pageTables.find( tbl => tbl.elementKey === tableKey)
  }
  updatePageFormData (ehrModel, elementKey, value) {
    return ehrModel.updatePageFormData(this.pageKey, elementKey, value)
  }
  updateRowElem ( ehrModel, tableKey, rowIndex, elementKey, value) {
    ehrModel.updateRowElem(this.pageKey,tableKey, rowIndex, elementKey, value)
  }
}

export class PageElement /* Form or Table */{
  constructor (pgElementDef, pageChildrenDefs) {
    this.pgElementDef = pgElementDef
    this._childrenDefs = pageChildrenDefs
    this._children = []
  }
  get elementKey () { return this.pgElementDef.elementKey }
  get isForm () { return this.pgElementDef.isPageForm }
  get isTable () { return this.pgElementDef.isTable}
  get key () { return this.pgElementDef.elementKey}
  get hasRecHeader () { return this.pgElementDef.hasRecHeader}
  _setupChildren (cKeys) {
    this._children = cKeys.map( key => {
      const ch = this._childrenDefs.find(pg => pg.elementKey === key)
      return new PageChildElement(ch)
    })
  }
  get children () { return this._children}
  filterPageElementChildrenByInputType (inputType) {
    return this.children.filter( pg => pg.inputType === inputType)
  }
}

export class PageForm extends PageElement {
  constructor (pgElementDef, pageChildren) {
    super(pgElementDef, pageChildren)
    let cKeys = []
    let groups = pgElementDef.ehr_groups
    groups.forEach( grp => {
      cKeys = cKeys.concat(grp.gChildren)
    })
    this.childrenKeys = cKeys
    super._setupChildren(cKeys)
  }
}

export class PageTable extends PageElement{
  constructor (pgElementDef, pageChildren) {
    super(pgElementDef, pageChildren)
    let cKeys = []
    let lists = pgElementDef.ehr_list
    lists.forEach( grp => {
      cKeys = cKeys.concat(grp.items)
    })
    this.childrenKeys = cKeys
    super._setupChildren(cKeys)
  }
}

export class PageChildElement {
  constructor (def) {
    if(!def) {
      console.log('WHAT?')
    }
    this.def = def
  }
  get elementKey () { return this.def.elementKey }
  get inputType () { return this.def.inputType }
  get isRecHdrFld () { return this.def.recHeader }
  getProperty (propKey) { return this.def[propKey]}
}

function cloneNotEmptyProperties (obj, pKeys) {
  const clone = {}
  pKeys.forEach(k => {
    const val = obj[k]
    if (val === undefined || val === null || val === '' || Array.isArray(val)) {
      // do nothing
    } else {
      clone[k] = val
    }
  })
  return clone
}

function objectHasContent ( obj ) {
  return JSON.stringify(obj).trim().length > 2 // /i.e. does not equal {}
}
