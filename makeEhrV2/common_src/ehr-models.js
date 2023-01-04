/**
 * WARNING Do not edit this code unless you are working in the makeEhr common_src directory.  Use the copy script to deployr to both server and client
 */
export class EhrPages {
  constructor (ehrDefinitions) {
    this.ehrDefintions = ehrDefinitions
    this._pages = Object.keys(ehrDefinitions).map(pageKey => {
      const pgDef = this.ehrDefintions[pageKey]
      return new PageDef(pgDef)
    })
  }
  get pageList () { return this._pages }
  getPagesWithData (ehrModel) { return this._pages.filter( pg => ehrModel.hasData(pg.pageKey))}
  findPage (key) { return this._pages.find( pg => pg.pageKey === key)}
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
  filterPageChildrenByInputType (inputType) {
    return this.pageChildren.filter( pg => pg.inputType === inputType)
  }
  getPageFormData (elementKey, ehrModel) {
    return ehrModel.getPageFormData(this.pageKey, elementKey)
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
    this.def = def
  }
  get elementKey () { return this.def.elementKey }
  get inputType () { return this.def.inputType }
  get isRecHdrFld () { return this.def.recHeader }
}
