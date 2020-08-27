'use strict'
require('@babel/register')({})
require("@babel/runtime/regenerator")
require('@babel/polyfill')
require('./src/server/server')
