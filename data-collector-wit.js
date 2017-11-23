const {Wit, log} = require('node-wit');
const client = new Wit({
  accessToken: 'IBKY5STM7CQEUH755KJZY35RB52S2MMP',
  logger: new log.Logger(log.DEBUG) // optional
});
var args = process.argv.slice(2);
console.log(client.message(args));
