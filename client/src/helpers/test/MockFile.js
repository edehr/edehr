/**
 * @jest-environment jsdom
 */
// import { Blob } from 'buffer'
// import Blob from 'cross-blob'

export default class MockFile  {
  constructor (content) {
    let name = 'testMock.txt'
    let mimeType = 'plain/txt'
    const blob = new Blob([content], { type: mimeType })
    blob.lastModifiedDate = new Date()
    blob.name = name
    
    return blob
  }
}