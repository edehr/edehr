const mongoose = require('mongoose')
const Schema = mongoose.Schema

// runPostSave().catch(error => console.error(error.stack))

runSeed().catch(error => console.error(error.stack))

async function runPostSave () {
  await mongoose.connect('mongodb://localhost:27018/test')

  const schema = new Schema({ name: String })
  schema.post('save', async function (doc) {
    await new Promise(resolve => setTimeout(() => resolve(), 2000))
    console.log('post save 1')
  })
  schema.post('save', function (doc) {
    console.log('post save 2')
  })
  const Person = mongoose.model('Person', schema)
  const p = new Person({ name: 'Taco' })
  await p.save()
  console.log('save promise resolved!')
}

async function runSeed () {
  await mongoose.connect('mongodb://localhost:27018/test')

  const SeedSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      createDate: { type: Date, default: Date.now },
      lastUpdateDate: { type: Date, default: Date.now },
      usageCount: { type: Number, default: 0 }
    }
  )
  const SeedData = mongoose.model('SeedData', SeedSchema)

  const LObjSchema = new mongoose.Schema({
    name: { type: String, required: true},  // resource_link_title
    description: { type: String }, // resource_link_description
    seedDataId: {type: mongoose.Schema.Types.ObjectId, ref: 'SeedData', required: true},
    createDate: { type: Date, default: Date.now },
    lastUpdateDate: { type: Date, default: Date.now }
  })
  LObjSchema.post('save', async function (doc) {
    // await new Promise(resolve => setTimeout(() => resolve(), 100))
    console.log('post save LObj doc', doc)
  })
  const LObj = mongoose.model('LObj', LObjSchema)


  const theSD = new SeedData({ name: 'Case study' })
  await theSD.save()
  console.log('theSD', theSD)


  const lobj = new LObj({ name: 'Case study', seedDataId: theSD._id })
  await lobj.save()
  console.log('lobj', lobj)

  console.log('runSeed done')
}
