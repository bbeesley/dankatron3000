// @flow
import { random } from './giphy';
import type { Context } from 'koa';


/**
 * Healthcheck controller
 * @param {Object}  ctx The Koa context object
 * @return {Promise<void>}  We don't need to return anything
 */
export const health = async (ctx: Context) => {
    ctx.set('Content-Type', 'application/json');
    ctx.body = {
        // $FlowIssue: suppressing until types are updated for node 9
        cpuUsage: process.cpuUsage(),
        memoryUsage: process.memoryUsage(),
    };
};

export const dank = async (ctx: Context) => {
    const data = await random(ctx, 'dank');
    ctx.body = data;
    ctx.set('Content-Type', 'image/gif');
};

export const cage = async (ctx: Context) => {
    const data = await random(ctx, 'nick+cage');
    ctx.body = data;
    ctx.set('Content-Type', 'image/gif');
};
