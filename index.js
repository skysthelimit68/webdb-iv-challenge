const server = require('./api/server.js');

const port = 3500;

server.listen(port, () => {
    console.log(`\n** API running on http://localhost:${port} **\n`)
})