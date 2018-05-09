import bunyan from 'bunyan';
import init from './server';

const log = bunyan.createLogger({ name: 'index.js' });

init()
    .then(() => log.info('Server is listening'))
    .catch((err) => log.error('Server failed to start', err));
