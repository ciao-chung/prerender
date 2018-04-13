#!/usr/bin/env node
const prerender = require('./lib')
const server = prerender()

server.use(prerender.sendPrerenderHeader())
server.use(prerender.removeScriptTags())
server.use(prerender.httpHeaders())

server.start()
