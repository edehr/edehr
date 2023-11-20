import Counters from './counters'

export async function getNextSequence (toolConsumer, name, size) {
  // be sure to keep only one doc for each name
  // Could have used unqique indexing but that required changing the db options
  // and that introduces unknown risks.
  // If someday the db options are set up for unique schema fields then change this code
  // But then all unit tests that drop the database will need to be revisited too beause the
  // drop database drops indices.
  let cnt = await Counters.findOne({ toolConsumer: toolConsumer, name: name })
  if (!cnt) {
    await Counters.create({toolConsumer: toolConsumer, name: name, seq: 0})
    cnt = await Counters.findOne({ toolConsumer: toolConsumer, name: name })
  }
  cnt.seq++
  await cnt.save()
  let results = '' + cnt.seq
  return results.padStart(size,'0')
}

