import EhrDefs from '@/ehr-definitions/ehr-defs-grid'
import EhrDataModel from '@/ehr-definitions/EhrDataModel'

export default class SeedModel {
  constructor (seedData) {
    this.sData = seedData
  }
  get pageKeys () { return this.ehrDataModel.pageKeys }
  tagListAsString () { return this.sData.tagList || ''}
  tagListAsArray () { return this.tagListAsString().split(',') }
  tagListIncludes (value) { return this.tagListAsString().includes(value)}

  get pageNames () {
    return this.pageKeys.map( pk => EhrDefs.getPageDefinition(pk).pageTitle).sort( (a,b,) => a.localeCompare(b))
  }
  get seed () { return this.sData }
  get creatorNotes () { return this.sData.creatorNotes }
  set seed (s) { this.sData = s}
  get id () { return this.sData._id}
  get ehrDataModel () { return this.sData.ehrData ? new EhrDataModel(this.sData.ehrData): undefined}
}
