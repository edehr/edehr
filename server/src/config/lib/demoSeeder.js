
export default function () {
  return Promise.resolve()
    .then(() => {
      return require('../demo-data/consumers')(true)
    })
}
