// @flow
import fetch from 'node-fetch';
import config from './config';

export const random = async (ctx, tag: string) => {
    try {
        ctx.log.info(`Requesting gif for tag: ${tag}`);
        const metaRes = await fetch(`${config.giphy.baseUrl}/random?api_key=${config.giphy.apiKey}&tag=${tag}`);
        const meta = await metaRes.json();
        ctx.log.info('meta', meta.data.images.original.url);
        const imageRes = await fetch(meta.data.images.original.url);
        return imageRes.buffer();
    } catch (err) {
        ctx.log.error(err.message, err);
    }
};
