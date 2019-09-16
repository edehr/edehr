'use strict'
import { Text } from '../text'

module.exports = {
  defaultConsumerKey: 'edehrkey',
  app: {
    title: Text.APP_TITLE,
    description: 'TODO add and use description',
    keywords: 'TODO add and use keywords'
  },
  ehr: {
    defaultAssignmentDescription: Text.DEFAULT_ASSIGNMENT_DESCRIPTION
  },
  // https://www.npmjs.com/package/session-file-store
  sessionTTL: process.env.TIMETOLIVE || 3600,
  sessionPath: process.env.SESSION_DIR || '.sessions',
  favicon: 'favicon.ico',
}

