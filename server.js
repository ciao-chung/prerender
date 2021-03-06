#!/usr/bin/env node
const prerender = require('./lib')
const memeryCachePlugin = require('prerender-memory-cache')
const server = prerender({
  waitAfterLastRequest: 1000,
})

server.use(memeryCachePlugin)
server.use(prerender.sendPrerenderHeader())
server.use(prerender.removeScriptTags())
server.use(prerender.httpHeaders())
server.use(prerender.whitelist())

server.start()
