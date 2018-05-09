// @flow
/* eslint no-return-assign: "off" */
import Koa from 'koa';
import Router from 'koa-router';
import bunyan from 'bunyan';
import koaBunyanLogger from 'koa-bunyan-logger';
import config from './config';
import {
    health,
    dank,
    cage,
} from './routes';

const router = new Router();
const log = bunyan.createLogger({ name: 'server.js' });

/**
 * Initialises the routes and starts the app
 * @returns {Promise<void>} We dont return anything
 */
const init = async (): Promise<void> => {
    log.info('Server has started. Initializing routes.');
    router.get('/healthcheck', health);
    router.get('/dank.gif', dank);
    router.get('/nick-cage.gif', cage);
    const app = new Koa();
    app.use(koaBunyanLogger());
    app.use(koaBunyanLogger.requestIdContext());
    app.use(koaBunyanLogger.requestLogger({}));
    app.use(router.routes());
    log.info('Starting server');
    app.listen(config.port);
};

export default init;
