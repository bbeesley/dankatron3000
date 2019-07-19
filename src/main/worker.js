addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

const handleRequest = async request => {
  console.dir(request);
  const filename = request.url.split('/').pop();
  const tag = filename.replace(/\.gif$/, '');
  const gif = await getGif(tag);
  return new Response(gif, {
    status: 200,
    headers: { 'Content-Type': 'image/gif' },
  });
};

const config = {
  giphy: {
    baseUrl: 'https://api.giphy.com/v1/gifs',
    apiKey: GIPHY_API_KEY,
  },
};

const getGif = async tag => {
  const metaRes = await fetch(
    `${config.giphy.baseUrl}/random?api_key=${config.giphy.apiKey}&tag=${tag}`
  );
  const meta = await metaRes.json();
  const imageRes = await fetch(meta.data.images.original.url);
  const buffer = await imageRes.arrayBuffer();
  return buffer;
};
