'use strict'
const fs = require('fs')

/**
ule dependencies.
 */
const camelCase = require('camelcase')

class RawPagesToDefs {
  /**
   * Main entry point. Provide the raw text as extracted from the Inputs spreadsheet.
   * Returns a stringify'd module.
   * @param contents
   * @param fileBaseName
   * @returns {string}
   */
  getDefinitions(contents) {
    let c = contents
    c = this._zapGremlins(c)
    c = this._fixEmptyCells(c)
    c = this._fixTabs(c)
    let entries = this._rawToEntries(c)
    return entries
  }

  /**
   * The text content contains one line per entry.
   * Each line contains some key/value pairs.
   * Each k/v pair is wrapped in {}
   * Split the content into an array of entries each with a key/value map
   * @param content
   * @returns {Array}
   */
  _rawToEntries(content) {
    let lines = content.split('\n')
    let entries = []
    lines.forEach(aLine => {
      if (aLine.length <=0 ) {
        return;
      }
      let entry = {}
      let regexp = /\{[^}]*\}/g
      let found = aLine.match(regexp)
      if (!found) {
        console.log('ERROR unable to find kv pair', aLine)
        return
      }
      found.forEach(part => {
        let seq = part.slice(1, -1)
        let parts = seq.split(':')
        let key = camelCase(this._cleanStr(parts[0]))
        entry[key] = this._cleanStr(parts[1])
      })
      entries.push(entry)
    })
    return entries
  }

  /**
   * Trim white space.
   * Trim surrounding double quotes (part of the results when selecting, copying and pasting data from Excel
   * @param str
   * @returns {string}
   */
  _cleanStr(str) {
    let res = str.trim()
    if (res.length >= 2 && res.charAt(0) === '"') {
      res = res.slice(1, -1)
    }
    return res
  }

  /**
   * Assumption that empty cells contain a tab followed by 'eCell'.
   * Remove these from the content
   * @param contents
   * @returns {string}
   */
  _fixEmptyCells(contents) {
    let optsAll = /\teCell/g
    let newContents = contents.replace(optsAll, '')
    let emptyLine = /(eCell\n)/g
    newContents = newContents.replace(emptyLine, '')
    return newContents
  }

  /**
   * Replace all tabs with a space
   * @param contents
   * @returns {string | * | void}
   */
  _fixTabs(contents) {
    let optsAll = /\t/g
    let newContents = contents.replace(optsAll, ' ')
    return newContents
  }

  /**
   * Remove all non-ascii chars.  Sometimes a copy paste from Excel includes a whole bunch of junk
   * @param contents
   * @returns {string | * | void}
   */
  _zapGremlins(contents) {
    // eslint-disable-next-line no-control-regex
    return contents.replace(/[^\x00-\x7F]/g, '')
  }
}

module.exports = RawPagesToDefs
