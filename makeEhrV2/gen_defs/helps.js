'use strict'
const assert = require('assert').strict
const camelCase = require('camelcase')

// Sample of multiline content:
// Section	Label	Input_type	Options	Data_From	Input_format	Helper_Text	Mandatory	Validation	Notes	Questions_for_the_group	Element_Key	FQN	NavURL	Dependant_On_FQN
const nlSep = '-NL-'

class RawHelper {

  _prepareContent(contents, mlFields) {
    let c = contents
    c = this._zapGremlins(c)
    c = this._fixEmptyCells(c)
    c = this._fixTabs(c)
    mlFields.forEach(hdr => {
      c = this._fixMultiLineFields(c, hdr)
    })
    return c
  }
  /**
   * The text content contains one line per entry.
   * Each line contains some key/value pairs.
   * Each k/v pair is wrapped in {}
   * Split the content into an array of entries each with a key/value map
   * @param content
   * @returns {Array}
   */
  _rawToEntries(content, mlFields) {
    content = this._prepareContent(content, mlFields)
    let lines = content.split('\n')
    let entries = []
    lines.forEach(aLine => {
      if (aLine.trim().length === 0) {
        return
      }
      let entry = {}
      let regexp = /\{[^}]*\}/g
      let found = aLine.match(regexp)
      assert.ok(
        found,
        'ERROR unable to find any kv pairs in this content: ' + JSON.stringify(aLine)
      )
      found.forEach(part => {
        // slice off the surrounding {}
        let seq = part.slice(1, -1)
        let indexOfFirst = seq.indexOf(':')
        let key = seq.slice(0, indexOfFirst)
        let value = seq.slice(indexOfFirst + 1)
        key = camelCase(rawHelper._cleanStr(key))
        value = rawHelper._cleanStr(value)
        entry[key] = value
      })
      entries.push(entry)
    })
    return entries
  }


  _prepareDropDownOptions(src,dest) {
    // 1. Split options for drop down inputs ...
    if (src.options) {
      let parts = src.options.split(nlSep)
      dest.options = parts.map(p => {
        let key = p
        let text = p
        // 2. Split on '=', if present use the sub-parts otherwise key and text are the same
        let kv = p.split(':=')
        if(kv.length === 2) {
          key = kv[0].trim()
          text= kv[1].trim()
        }
        return { key: key, text: text }
      })
    }
  }

  _prepareHelperText(src, dest) {
    if (src.helperText) {
      let text = []
      let html = []
      let parts = src.helperText.split(nlSep)
      parts.forEach(p => {
        text.push(p)
        html.push('<p>' + p + '</p>')
      })
      dest.helperHtml = html.join('\n')
      dest.helperText = text.join('\n')
    }
  }

  _prepareSpecialProperties (src, dest, page) {
    // TODO it would be good to put the marScheduleOption into the Inputs.
    // using the element key here is a quick way to accomplish this while I have poor internet
    if (src.specialProperties === 'marScheduleOption' || src.elementKey === 'scheduleTime') {
      page.medSchedule = []
      // get the options from the dest because they have been processed by now
      dest.options.forEach( (opt) => {
        let t = opt.text
        page.medSchedule.push({elementKey: camelCase(t), label: t})
      })
      // console.log('marScheduleOption', page.medSchedule)
    }
  }

  _transferProperties (src, propertyList) {
    let dest = {}
    propertyList.forEach(prop => {
      let sK = prop
      let dK = prop
      if (typeof prop === 'object') {
        sK = prop.sKey
        dK = prop.dKey
      }
      if (src[sK]) {
        dest[dK] = src[sK]
      }
    })
    return dest
  }
  /**
   * Trim white space.
   * Trim surrounding double quotes (part of the results when selecting, copying and pasting data from Excel
   * @param str
   * @returns {string}
   */
  _cleanStr (str) {
    let res = str.trim()
    if (res.length >= 2 && res.charAt(0) === '"') {
      res = res.slice(1, -1)
    }
    return res
  }

  /**
   * Fields may have data that spans multiple lines.
   * Search the entire contents for "{ sometext followed by multiline content up to the closing }"
   * Replace with { sometext followed by the contents of each line surrounded by double quotes
   * For example the following ...
   * "{Options: married
   *    single
   *    life partner
   *    divorced
   *    separated
   *    widowed}"
   * Becomes ....
   *    {Options: "married-NL-single-NL-life partner-NL-divorced-NL-separated-NL-widowed"}
   * @param contents
   * @param root
   * @param sep
   * @returns {string | * | void}
   */
  _fixMultiLineFields (contents, root) {
    let s = '"{' + root + '[^"]*}"'
    let optsAll = new RegExp(s, 'g')
    // let found1 = contents.match(optsAll);
    let newContents = contents.replace(optsAll, function (opts) {
      let re = '({' + root + ')([^}]*)(}")'
      let regexp = new RegExp(re)
      let found = opts.match(regexp)
      let raw = found[2].split('\n').map(e => {
        return e.trim()
      })
      let results = '{' + root + ' "' + raw.join(nlSep) + '"}'
      return results
    })
    return newContents
  }

  /**
   * Assumption that empty cells contain a tab followed by 'eCell'.
   * Remove these from the content
   * @param contents
   * @returns {string}
   */
  _fixEmptyCells (contents) {
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
  _fixTabs (contents) {
    let optsAll = /\t/g
    let newContents = contents.replace(optsAll, ' ')
    return newContents
  }

  /**
   * Remove all non-ascii chars.  Sometimes a copy paste from Excel includes a whole bunch of junk
   * @param contents
   * @returns {string | * | void}
   */
  _zapGremlins (contents) {
    // eslint-disable-next-line no-control-regex
    return contents.replace(/[^\x00-\x7F]/g, '')
  }

}

const rawHelper = new RawHelper()

module.exports = rawHelper
