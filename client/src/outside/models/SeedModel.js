import EhrDefs from '@/helpers/ehr-defs-grid'
import EhrDataModel from '@/outside/models/EhrDataModel'

export default class SeedModel {
  constructor (seedData) {
    this.sData = seedData
  }
  get pageKeys () { return this.ehrDataModel.pageKeys }
  get pageNames () {
    return this.pageKeys.map( pk => EhrDefs.getPageDefinition(pk).pageTitle).sort( (a,b,) => a.localeCompare(b))
  }
  get seed () { return this.sData }
  set seed (s) { this.sData = s}
  get id () { return this.sData._id}
  get ehrDataModel () { return this.sData.ehrData ? new EhrDataModel(this.sData.ehrData): undefined}
}
