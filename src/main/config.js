export default {
    port: process.env.PORT || 3005,
    giphy: {
        baseUrl: 'http://api.giphy.com/v1/gifs',
        apiKey: process.env.API_KEY,
    },
};
