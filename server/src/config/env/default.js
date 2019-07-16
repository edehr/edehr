'use strict'
import { Text } from '../text'

module.exports = {
  secure: {
    ssl: false
  },
  defaultConsumerKey: 'edehrkey',
  app: {
    title: Text.APP_TITLE,
    description: 'TODO add and use description',
    keywords: 'TODO add and use keywords'
  },
  ehr: {
    defaultAssignmentDescription: Text.DEFAULT_ASSIGNMENT_DESCRIPTION
  },
  // TODO stop using sessions and session cookies
  sessionCookie: {
    // session expiration is set by default to 24 hours
    maxAge: 24 * (60 * 60 * 1000),
    // httpOnly flag makes sure the cookie is only accessed
    // through the HTTP protocol and not JS/browser
    httpOnly: true,
    // secure cookie should be turned to true to provide additional
    // layer of security so that the cookie is set only when working
    // in HTTPS mode.
    secure: false
  },
  cookieSecret: process.env.COOKIE_SECRET || 'this is the secret for the session cookie',
  // https://www.npmjs.com/package/session-file-store
  sessionTTL: process.env.TIMETOLIVE || 3600,
  sessionPath: process.env.SESSION_DIR || '.sessions',
  favicon: 'favicon.ico'
}

