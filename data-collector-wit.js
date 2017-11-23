const {Wit, log} = require('node-wit');

const client = new Wit({
  accessToken: 'IBKY5STM7CQEUH755KJZY35RB52S2MMP',
  logger: new log.Logger(log.DEBUG) // optional
});

console.log(client.message('none'));
