module.exports = {
  apps : [{
    name        : 'ssr',
    script      : '/path-to-server.js',
    env: {
      'ALLOWED_DOMAINS': 'www.example.com,example.com',
      'CACHE_TTL': '600',
    },
    // restart every monday
    cron_restart: '0 0 * * 1',
  }]
}