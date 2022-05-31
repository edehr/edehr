
class EdEhrOrgHelper {
  isEdEhrOrg () {
    const local = window.location.origin.includes('localhost')
    const edehr = window.location.origin.includes('edehr.org')
    if (process.env.NODE_ENV === 'production') {
      return edehr
    } else {
      return edehr || local
    }
  }
}

const edherorg = new EdEhrOrgHelper()
export default edherorg